import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Square, Loader2, Play, CheckCircle2, ArrowRight, Star, TrendingUp, MessageSquare, BookOpen, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

interface DimensionResult {
  score: number;
  comment: string;
}

interface ImprovementItem {
  issue: string;
  before: string;
  after: string;
  explanation: string;
}

interface AssessmentResult {
  overall_score: number;
  transcription: string;
  dimensions: {
    content: DimensionResult;
    vocabulary: DimensionResult;
    fluency: DimensionResult;
    grammar: DimensionResult;
    professionalism: DimensionResult;
  };
  strengths: string[];
  improvements: ImprovementItem[];
  comparison: string;
  encouragement: string;
  mispronounced_words?: string[];
}

interface VoiceAssessmentProps {
  referenceText: string;
  onSuccess?: (score: number) => void;
}

const DIMENSIONS = [
  { key: 'content',        label: '内容完整度', labelEn: 'Content',        icon: BookOpen,      color: 'text-blue-600',   bg: 'bg-blue-50' },
  { key: 'vocabulary',     label: '词汇准确度', labelEn: 'Vocabulary',     icon: MessageSquare, color: 'text-violet-600', bg: 'bg-violet-50' },
  { key: 'fluency',        label: '流利度',     labelEn: 'Fluency',        icon: Zap,           color: 'text-amber-600',  bg: 'bg-amber-50' },
  { key: 'grammar',        label: '语法正确性', labelEn: 'Grammar',        icon: CheckCircle2,  color: 'text-green-600',  bg: 'bg-green-50' },
  { key: 'professionalism',label: '表达专业度', labelEn: 'Professionalism',icon: Star,          color: 'text-rose-600',   bg: 'bg-rose-50' },
] as const;

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 8 ? 'bg-green-100 text-green-700 border-green-200' :
    score >= 6 ? 'bg-amber-100 text-amber-700 border-amber-200' :
                 'bg-red-100 text-red-700 border-red-200';
  return (
    <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full border', color)}>
      {score}/10
    </span>
  );
}

function OverallScoreBadge({ score }: { score: number }) {
  const color =
    score >= 80 ? 'text-green-600' :
    score >= 60 ? 'text-amber-600' :
                  'text-red-500';
  return (
    <div className={cn('text-4xl font-extrabold tabular-nums', color)}>
      {score}
      <span className="text-base font-semibold text-muted-foreground ml-1">/ 100</span>
    </div>
  );
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
      mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) audioChunksRef.current.push(e.data); };
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setAudioUrl(URL.createObjectURL(blob));
      };
      mediaRecorder.start();
      setIsRecording(true);
      setResult(null);
    } catch {
      toast.error('无法访问麦克风，请检查权限设置');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(t => t.stop());
      setIsRecording(false);
    }
  };

  const handleAssess = async () => {
    if (!audioChunksRef.current.length) return;
    setIsAssessing(true);
    try {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      const fd = new FormData();
      fd.append('audio', audioBlob, 'recording.wav');
      fd.append('referenceText', referenceText);

      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/audio-assessment`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}` },
        body: fd,
      });

      if (!res.ok) throw new Error('评分失败');
      const data: AssessmentResult = await res.json();
      setResult(data);
      if (onSuccess && data.overall_score >= 80) onSuccess(data.overall_score);
    } catch {
      toast.error('语音评测失败，请稍后重试');
    } finally {
      setIsAssessing(false);
    }
  };

  return (
    <div className="space-y-4 w-full">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {!isRecording ? (
          <Button onClick={startRecording} variant="default" className="rounded-xl gap-2" disabled={isAssessing}>
            <Mic className="w-4 h-4" /> 开始录音
          </Button>
        ) : (
          <Button onClick={stopRecording} variant="destructive" className="rounded-xl gap-2 animate-pulse">
            <Square className="w-4 h-4" /> 停止录音
          </Button>
        )}
        {audioUrl && !isRecording && (
          <>
            <Button onClick={() => new Audio(audioUrl).play()} variant="outline" className="rounded-xl gap-2" disabled={isAssessing}>
              <Play className="w-4 h-4" /> 试听
            </Button>
            <Button onClick={handleAssess} variant="secondary" className="rounded-xl gap-2" disabled={isAssessing}>
              {isAssessing
                ? <><Loader2 className="w-4 h-4 animate-spin" /> AI 深度评测中…</>
                : <><TrendingUp className="w-4 h-4" /> 获取 AI 详细评分</>}
            </Button>
          </>
        )}
      </div>

      {/* Result Panel */}
      {result && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">

          {/* ── Header: overall score + transcription ── */}
          <Card className="p-5 rounded-2xl border-2">
            <div className="flex flex-col md:flex-row md:items-start gap-5">
              {/* Score circle */}
              <div className="flex flex-col items-center justify-center min-w-[110px] gap-1">
                <OverallScoreBadge score={result.overall_score} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">综合评分</span>
                {result.overall_score >= 80 && (
                  <Badge className="mt-1 bg-green-100 text-green-700 border-green-200 hover:bg-green-100 text-[10px]">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> 表现优异
                  </Badge>
                )}
              </div>

              <Separator orientation="vertical" className="hidden md:block h-auto self-stretch" />

              {/* Transcription */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">识别内容 (Transcription)</p>
                <p className="text-sm italic text-foreground/80 bg-muted/30 rounded-xl px-4 py-3 border border-dashed leading-relaxed">
                  "{result.transcription}"
                </p>
              </div>
            </div>
          </Card>

          {/* ── Five Dimensions ── */}
          {result.dimensions && (
          <Card className="p-5 rounded-2xl border-2">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">五维评分详解</p>
            <div className="space-y-5">
              {DIMENSIONS.map(({ key, label, labelEn, icon: Icon, color, bg }) => {
                const dim = result.dimensions?.[key];
                if (!dim) return null;
                return (
                  <div key={key} className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className={cn('w-7 h-7 rounded-lg flex items-center justify-center shrink-0', bg)}>
                          <Icon className={cn('w-3.5 h-3.5', color)} />
                        </div>
                        <span className="text-sm font-semibold">{label}</span>
                        <span className="text-xs text-muted-foreground hidden sm:inline">({labelEn})</span>
                      </div>
                      <ScoreBadge score={dim.score} />
                    </div>
                    <Progress value={dim.score * 10} className="h-1.5" />
                    <p className="text-sm text-foreground/75 leading-relaxed pl-9">{dim.comment}</p>
                  </div>
                );
              })}
            </div>
          </Card>
          )}

          {/* ── Strengths ── */}
          {result.strengths?.length > 0 && (
            <Card className="p-5 rounded-2xl border-2 border-green-100 bg-green-50/30">
              <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" /> 你做得好的地方
              </p>
              <ul className="space-y-2">
                {result.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* ── Improvements ── */}
          {result.improvements?.length > 0 && (
            <Card className="p-5 rounded-2xl border-2 border-amber-100 bg-amber-50/20">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5" /> 改进建议（具体示例）
              </p>
              <div className="space-y-4">
                {result.improvements.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-sm font-semibold text-foreground/90">{item.issue}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-sm">
                        <span className="text-[10px] font-bold text-red-500 uppercase block mb-1">原表达</span>
                        <p className="text-foreground/80 italic">"{item.before}"</p>
                      </div>
                      <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-sm">
                        <span className="text-[10px] font-bold text-green-600 uppercase block mb-1 flex items-center gap-1">
                          <ArrowRight className="w-3 h-3 inline" /> 升级表达
                        </span>
                        <p className="text-foreground/80 italic font-medium">"{item.after}"</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground pl-1 leading-relaxed">{item.explanation}</p>
                    {i < result.improvements.length - 1 && <Separator className="mt-2" />}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* ── Comparison with reference ── */}
          {result.comparison && (
            <Card className="p-5 rounded-2xl border-2 border-blue-100 bg-blue-50/20">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" /> 与参考范文对比
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">{result.comparison}</p>
            </Card>
          )}

          {/* ── Mispronounced words ── */}
          {result.mispronounced_words && result.mispronounced_words.length > 0 && (
            <Card className="p-5 rounded-2xl border-2">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                重点练习单词 — 点击朗读跟读
              </p>
              <div className="flex flex-wrap gap-2">
                {result.mispronounced_words.map((word, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-destructive/5 text-destructive border-destructive/20 py-1.5 px-3 cursor-pointer hover:bg-destructive/10 transition-colors gap-1.5 text-sm"
                    onClick={() => {
                      const u = new SpeechSynthesisUtterance(word);
                      u.lang = 'en-US';
                      window.speechSynthesis.speak(u);
                      toast.info(`正在朗读：${word}，请跟读练习`);
                    }}
                  >
                    <Play className="w-3 h-3" /> {word}
                  </Badge>
                ))}
              </div>
            </Card>
          )}

          {/* ── Encouragement ── */}
          {result.encouragement && (
            <div className="flex items-start gap-3 px-5 py-4 bg-primary/5 border border-primary/20 rounded-2xl">
              <Star className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm font-medium text-primary leading-relaxed">{result.encouragement}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
