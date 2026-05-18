import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Square, Loader2, Play, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface AssessmentResult {
  score: number;
  pronunciation: number;
  fluency: number;
  intonation: number;
  feedback: string;
  transcription: string;
  mispronounced_words?: string[];
}

interface VoiceAssessmentProps {
  referenceText: string;
  onSuccess?: (score: number) => void;
}

export default function VoiceAssessment({ referenceText, onSuccess }: VoiceAssessmentProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isAssessing, setIsAssessing] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setResult(null);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      toast.error('无法访问麦克风，请检查权限设置');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const handleAssess = async () => {
    if (audioChunksRef.current.length === 0) return;

    setIsAssessing(true);
    try {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.wav');
      formData.append('referenceText', referenceText);

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/functions/v1/audio-assessment`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('评分失败');
      }

      const data = await response.json();
      setResult(data);
      if (onSuccess && data.score >= 80) {
        onSuccess(data.score);
      }
    } catch (err) {
      console.error('Assessment error:', err);
      toast.error('语音评测失败，请稍后重试');
    } finally {
      setIsAssessing(false);
    }
  };

  const playRecording = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-wrap items-center gap-3">
        {!isRecording ? (
          <Button 
            onClick={startRecording} 
            variant="default" 
            className="rounded-xl gap-2 bg-primary hover:bg-primary/90"
            disabled={isAssessing}
          >
            <Mic className="w-4 h-4" /> 开始录音
          </Button>
        ) : (
          <Button 
            onClick={stopRecording} 
            variant="destructive" 
            className="rounded-xl gap-2 animate-pulse"
          >
            <Square className="w-4 h-4" /> 停止录音
          </Button>
        )}

        {audioUrl && !isRecording && (
          <>
            <Button 
              onClick={playRecording} 
              variant="outline" 
              className="rounded-xl gap-2"
              disabled={isAssessing}
            >
              <Play className="w-4 h-4" /> 试听
            </Button>
            <Button 
              onClick={handleAssess} 
              variant="secondary" 
              className="rounded-xl gap-2"
              disabled={isAssessing}
            >
              {isAssessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> 评测中...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" /> 获取 AI 评分
                </>
              )}
            </Button>
          </>
        )}
      </div>

      {result && (
        <Card className="p-5 bg-muted/30 border-none rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">AI 评测结果</span>
              <Badge variant={result.score >= 80 ? "default" : "secondary"} className={cn(result.score >= 80 ? "bg-green-500" : "")}>
                {result.score} 分
              </Badge>
            </div>
            {result.score >= 80 && (
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                <CheckCircle2 className="w-3 h-3 mr-1" /> 表现优异
              </Badge>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <span>发音 (Pronunciation)</span>
                <span>{result.pronunciation}</span>
              </div>
              <Progress value={result.pronunciation} className="h-1.5" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <span>流利度 (Fluency)</span>
                <span>{result.fluency}</span>
              </div>
              <Progress value={result.fluency} className="h-1.5" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <span>语调 (Intonation)</span>
                <span>{result.intonation}</span>
              </div>
              <Progress value={result.intonation} className="h-1.5" />
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-background/50 rounded-xl border border-dashed text-sm">
              <p className="text-xs font-bold text-muted-foreground mb-1 uppercase">识别文本:</p>
              <p className="italic text-foreground/80">"{result.transcription}"</p>
            </div>
            
            <div className="flex items-start gap-2 text-sm pt-1">
              <AlertCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-foreground/80 font-medium leading-relaxed">{result.feedback}</p>
            </div>

            {result.mispronounced_words && result.mispronounced_words.length > 0 && (
              <div className="pt-3 border-t border-dashed mt-3">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">需要重点练习的单词 (Correction Practice):</p>
                <div className="flex flex-wrap gap-2">
                  {result.mispronounced_words.map((word, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="bg-destructive/5 text-destructive border-destructive/20 py-1 px-2 cursor-pointer hover:bg-destructive/10 transition-colors flex items-center gap-1.5" 
                      onClick={() => {
                        const utterance = new SpeechSynthesisUtterance(word);
                        utterance.lang = 'en-US';
                        window.speechSynthesis.speak(utterance);
                        toast.info(`正在朗读: ${word}，请跟读练习`);
                      }}
                    >
                      <Play className="w-3 h-3" /> {word}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
