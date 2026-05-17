import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  MessageSquare, 
  Mail, 
  Users, 
  Smartphone, 
  Shuffle, 
  Send, 
  CheckCircle2, 
  Plus,
  ArrowRight,
  User,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const scenarios = [
  { id: 'interview', name: '面试间', icon: MessageSquare, topics: [
    "How have you handled a disagreement with a peer about project direction?",
    "Tell me about a time you had to learn something new quickly.",
    "Why are you interested in this role and our company?",
    "What are your greatest professional strengths?",
    "Describe a challenging project you managed and how you overcame obstacles.",
    "Where do you see yourself in five years?",
    "How do you handle working under pressure?",
    "Give an example of a time you showed leadership skills."
  ]},
  { id: 'email', name: '邮件台', icon: Mail, topics: [
    "Write a follow-up email after an interview.",
    "Request a deadline extension for a project report.",
    "Apologize to a client for a delay in shipment.",
    "Invite a colleague from another department to a kickoff meeting.",
    "Clarify requirements for a new task assigned by your manager.",
    "Confirm your attendance at a training session next week."
  ]},
  { id: 'meeting', name: '会议回应', icon: Users, topics: [
    "You disagree with a proposed strategy. How do you voice your concern politely?",
    "A colleague suggests a great idea. How do you support and add to it?",
    "The discussion is going off-track. How do you bring it back to the agenda?",
    "You need more data before making a decision. How do you ask for it?",
    "Summarize the main action items discussed in the meeting.",
    "Ask a follow-up question to clarify a point made by the speaker."
  ]},
  { id: 'chat', name: '即时消息', icon: Smartphone, topics: [
    "Ask a teammate for a quick review of your document on Slack.",
    "Inform your team that you will be 15 minutes late for the stand-up.",
    "Confirm that you've completed the urgent task assigned earlier.",
    "Request help with a technical issue on a shared channel.",
    "Give a quick status update on your current project.",
    "Thank someone for their help with a brief message."
  ]},
];

const roles = [
  { id: 'hr', name: 'HR / 招聘专员' },
  { id: 'manager', name: '用人经理' },
  { id: 'tech', name: '技术负责人' },
  { id: 'pm', name: '产品经理' },
  { id: 'exec', name: '高管' },
];

const feedbackStyles = [
  { id: 'warm', name: '温和鼓励' },
  { id: 'direct', name: '直接纠错' },
  { id: 'pro', name: '专业 Manager' },
  { id: 'interviewer', name: '面试官视角' },
];

export default function ScenarioPractice() {
  const [activeScenario, setActiveScenario] = useState('interview');
  const [currentTopic, setCurrentTopic] = useState('');
  const [userInput, setUserInput] = useState('');
  const [activeRole, setActiveRole] = useState('hr');
  const [activeStyle, setActiveStyle] = useState('pro');
  const [feedback, setFeedback] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    generateRandomTopic();
  }, [activeScenario]);

  const generateRandomTopic = () => {
    const scenario = scenarios.find(s => s.id === activeScenario);
    if (scenario) {
      const topics = scenario.topics;
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      setCurrentTopic(randomTopic);
      setFeedback(null);
      setUserInput('');
    }
  };

  const handleGenerateFeedback = () => {
    if (!userInput.trim()) {
      toast.error('请输入内容后再生成反馈');
      return;
    }

    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      const mockFeedback = {
        score: 'B+',
        overall: 'Your answer is understandable, but it sounds too general. Try to include one specific responsibility, one concrete example, and one measurable result.',
        pros: [
          'You correctly identified the context.',
          'The sentence structure is clear.',
          'Professional tone used.'
        ],
        improvements: [
          '“did many things” is too vague for a professional setting.',
          '“learned a lot” is a common phrase; try to specify what exactly you learned.',
          'Add action verbs like "coordinated", "initiated", or "implemented".'
        ],
        errors: [
          { error: 'I was responsible of...', correction: 'I was responsible for...', explanation: 'Preposition "for" is required after "responsible".' }
        ],
        improvedVersion: `In my last role, I was responsible for supporting event coordination, preparing communication materials, and following up with participants. This experience helped me develop stronger organizational and communication skills, especially when working with cross-functional teams under tight deadlines.`,
        usefulPhrases: [
          { phrase: 'I was responsible for...', meaning: '我负责...' },
          { phrase: 'Oversee the project', meaning: '监督项目' },
          { phrase: 'Collaborate with...', meaning: '与...合作' }
        ]
      };
      setFeedback(mockFeedback);
      setIsGenerating(false);
      toast.success('反馈生成成功');
    }, 1500);
  };

  const handleSaveToPhraseBank = (phrase: string, meaning: string) => {
    const savedPhrases = JSON.parse(localStorage.getItem('phraseBank') || '[]');
    const newPhrase = {
      id: Date.now().toString(),
      original: userInput,
      improved: phrase,
      meaning: meaning,
      category: activeScenario === 'interview' ? '面试' : activeScenario === 'email' ? '邮件' : activeScenario === 'meeting' ? '会议' : '管理',
      tags: [activeScenario, activeRole],
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('phraseBank', JSON.stringify([...savedPhrases, newPhrase]));
    toast.success('已保存到我的短语库');
  };

  return (
    <div className="container py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">在真实职场场景中练表达</h1>
        <p className="text-muted-foreground font-medium">
          选择场景、对象与语气，获得职场化改写与专业反馈（Demo 版）。
        </p>
      </div>

      <div className="space-y-8">
        {/* Scenario Tabs */}
        <div className="flex flex-wrap gap-2">
          {scenarios.map((s) => (
            <Button
              key={s.id}
              variant={activeScenario === s.id ? 'default' : 'outline'}
              className={cn(
                "rounded-full px-6 h-11 text-sm font-bold gap-2",
                activeScenario === s.id ? "shadow-md" : "bg-card"
              )}
              onClick={() => setActiveScenario(s.id)}
            >
              <s.icon className="w-4 h-4" />
              {s.name}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Panel */}
          <div className="space-y-6">
            <Card className="rounded-2xl border shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base font-bold flex items-center gap-2 text-primary">
                    <MessageSquare className="w-4 h-4" /> 练习题目
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={generateRandomTopic} className="text-xs font-bold gap-1 text-primary hover:bg-primary/10">
                    <Shuffle className="w-3 h-3" /> 随机题目
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg font-bold text-foreground leading-relaxed italic border-l-4 border-primary pl-4 py-2 bg-muted/20 rounded-r-lg">
                  "{currentTopic}"
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold">模拟角色选择</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {roles.map((r) => (
                    <Button
                      key={r.id}
                      variant={activeRole === r.id ? 'secondary' : 'outline'}
                      size="sm"
                      className={cn("rounded-full text-xs font-bold", activeRole === r.id ? "bg-primary/10 text-primary border-primary/20" : "")}
                      onClick={() => setActiveRole(r.id)}
                    >
                      <User className="w-3 h-3 mr-1" /> {r.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <h3 className="text-sm font-bold text-foreground">你的回答（英文）</h3>
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Supports English & Mixed</span>
              </div>
              <Textarea
                placeholder="在此输入你的英文回答..."
                className="min-h-[200px] rounded-2xl p-4 text-base font-medium resize-none border-2 focus-visible:ring-primary/20 focus-visible:border-primary"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-6 p-6 bg-muted/20 rounded-2xl border border-dashed">
               <div className="space-y-3">
                  <h3 className="text-sm font-bold">反馈风格</h3>
                  <div className="flex flex-wrap gap-2">
                    {feedbackStyles.map((style) => (
                      <Button
                        key={style.id}
                        variant={activeStyle === style.id ? 'default' : 'ghost'}
                        size="sm"
                        className="rounded-full text-xs font-bold"
                        onClick={() => setActiveStyle(style.id)}
                      >
                        {style.name}
                      </Button>
                    ))}
                  </div>
               </div>
               <Button 
                 className="w-full h-12 rounded-xl text-base font-bold gap-2 shadow-lg" 
                 disabled={isGenerating || !userInput.trim()}
                 onClick={handleGenerateFeedback}
               >
                 {isGenerating ? (
                   <>
                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                     正在生成反馈...
                   </>
                 ) : (
                   <>
                     <Send className="w-4 h-4" /> 生成反馈
                   </>
                 )}
               </Button>
            </div>
          </div>

          {/* Feedback Panel */}
          <div className="space-y-6">
            {feedback ? (
              <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                <Card className="rounded-3xl border shadow-xl overflow-hidden bg-white dark:bg-zinc-950">
                   <div className="bg-primary p-6 text-primary-foreground">
                      <div className="flex justify-between items-center mb-4">
                        <Badge className="bg-white/20 text-white border-none uppercase tracking-widest text-[10px] font-bold">AI Feedback Result</Badge>
                        <div className="flex items-center gap-2">
                           <span className="text-xs font-bold opacity-70">Overall Score:</span>
                           <span className="text-2xl font-black">{feedback.score}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 总体评价
                      </h3>
                      <p className="mt-2 text-sm font-medium opacity-90 leading-relaxed">
                        {feedback.overall}
                      </p>
                   </div>
                   <CardContent className="p-8 space-y-8">
                      {/* Pros & Cons */}
                      <div className="grid gap-6 sm:grid-cols-2">
                         <div className="space-y-4">
                            <h4 className="text-xs uppercase font-bold text-green-600 tracking-widest flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> 表达优点
                            </h4>
                            <ul className="space-y-2">
                               {feedback.pros.map((pro: string, i: number) => (
                                 <li key={i} className="text-sm font-medium text-foreground flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />
                                    {pro}
                                 </li>
                               ))}
                            </ul>
                         </div>
                         <div className="space-y-4">
                            <h4 className="text-xs uppercase font-bold text-orange-600 tracking-widest flex items-center gap-1">
                              <Zap className="w-3 h-3" /> 改进建议
                            </h4>
                            <ul className="space-y-2">
                               {feedback.improvements.map((imp: string, i: number) => (
                                 <li key={i} className="text-sm font-medium text-foreground flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                                    {imp}
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </div>

                      {/* Better Version */}
                      <div className="space-y-4">
                         <div className="flex justify-between items-center">
                            <h4 className="text-xs uppercase font-bold text-primary tracking-widest">更好的改写版本</h4>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-7 text-xs font-bold text-primary hover:bg-primary/5 rounded-full"
                              onClick={() => handleSaveToPhraseBank(feedback.improvedVersion, '场景练习改写建议')}
                            >
                              <Plus className="w-3 h-3 mr-1" /> 保存到短语库
                            </Button>
                         </div>
                         <div className="p-5 bg-primary/5 border border-primary/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-5">
                               <MessageSquare className="w-20 h-20" />
                            </div>
                            <p className="text-base font-bold text-primary leading-relaxed relative z-10">
                               {feedback.improvedVersion}
                            </p>
                         </div>
                      </div>

                      {/* Useful Phrases */}
                      <div className="space-y-4 pt-4 border-t">
                         <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-widest">相关可用表达</h4>
                         <div className="grid gap-2">
                            {feedback.usefulPhrases.map((phrase: any, i: number) => (
                              <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                                 <div className="flex flex-col">
                                    <span className="text-sm font-bold text-foreground">{phrase.phrase}</span>
                                    <span className="text-xs text-muted-foreground">{phrase.meaning}</span>
                                 </div>
                                 <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleSaveToPhraseBank(phrase.phrase, phrase.meaning)}>
                                    <Plus className="w-3 h-3" />
                                 </Button>
                              </div>
                            ))}
                         </div>
                      </div>
                   </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-muted/10 rounded-3xl border border-dashed border-muted-foreground/30">
                 <div className="w-16 h-16 rounded-3xl bg-muted/50 flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-muted-foreground/50" />
                 </div>
                 <h3 className="text-xl font-bold text-foreground mb-2">等待生成反馈</h3>
                 <p className="text-muted-foreground max-w-xs font-medium">
                    在左侧输入你的回答并点击「生成反馈」按钮，AI 将为你提供专业的职场表达建议。
                 </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
