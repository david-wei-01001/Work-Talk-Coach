import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  RefreshCw, 
  User, 
  Send, 
  CheckCircle2, 
  Plus, 
  Lightbulb, 
  Zap, 
  MessageCircle,
  Mail,
  Users,
  Presentation,
  UserCircle,
  Phone
} from 'lucide-react';
import { cn } from '@/lib/utils';

const quickScenarios = [
  { id: 'remind', name: '催进度', icon: Zap, prompt: 'You need to finish this today or we will miss the deadline.' },
  { id: 'refuse', name: '礼貌说不', icon: MessageCircle, prompt: "I can't help you with this project right now because I'm too busy." },
  { id: 'bad-news', name: '汇报坏消息', icon: Lightbulb, prompt: 'We encountered a problem and the project will be delayed by a week.' },
  { id: 'ask-help', name: '向上求助', icon: User, prompt: 'I am stuck with this task and I need your help to solve it.' },
  { id: 'praise', name: '表扬团队', icon: CheckCircle2, prompt: 'You guys did a good job on the presentation.' },
];

const targets = [
  { id: 'manager', name: '直属上级' },
  { id: 'exec', name: '高层 / 跳级领导' },
  { id: 'peer', name: '同级同事' },
  { id: 'report', name: '下属' },
  { id: 'client', name: '客户' },
  { id: 'hr', name: 'HR / 招聘' },
  { id: 'vendor', name: '供应商' },
];

const channels = [
  { id: 'email', name: '邮件', icon: Mail },
  { id: 'slack', name: 'Slack / Teams', icon: MessageCircle },
  { id: 'meeting', name: '会议发言', icon: Users },
  { id: 'presentation', name: '演示 / 汇报', icon: Presentation },
  { id: 'interview', name: '面试', icon: UserCircle },
  { id: 'phone', name: '电话', icon: Phone },
];

const tones = [
  { id: 'polite', name: '更礼貌' },
  { id: 'confident', name: '更自信' },
  { id: 'concise', name: '更简洁' },
  { id: 'pro', name: '更专业' },
  { id: 'diplomatic', name: '更委婉' },
  { id: 'firm', name: '更坚定' },
];

export default function ToneRewriter() {
  const [userInput, setUserInput] = useState('');
  const [activeTarget, setActiveTarget] = useState('manager');
  const [activeChannel, setActiveChannel] = useState('email');
  const [activeTone, setActiveTone] = useState('pro');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleRewrite = () => {
    if (!userInput.trim()) {
      toast.error('请输入原句后再生成');
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      const mockResult = {
        rewritten: `Could we prioritize finishing this today? I’m concerned that we may miss the deadline if it is delayed further.`,
        explanation: `这句话比原句更适合发给上级，因为它没有直接命令对方，而是用 “Could we prioritize...” 表达建议，同时用 “I’m concerned that...” 说明风险。`,
        whyBetter: `采用了「风险提示」而非「责任催促」的逻辑，更符合职场向上沟通的礼貌边界。`,
        scenarios: `适用于紧急项目节点、需要上级关注进度但又不想表现得过于咄咄逼人的场景。`,
        alternatives: [
          { phrase: "I'm concerned that...", context: "表达担忧，引入风险" },
          { phrase: "Could we prioritize...?", context: "礼貌请求优先处理" },
          { phrase: "To stay on track, we may need to...", context: "以结果为导向提出需求" }
        ]
      };
      setResult(mockResult);
      setIsGenerating(false);
      toast.success('改写完成');
    }, 1200);
  };

  const handleQuickScenario = (prompt: string) => {
    setUserInput(prompt);
    setResult(null);
  };

  const handleSaveToPhraseBank = () => {
    const savedPhrases = JSON.parse(localStorage.getItem('phraseBank') || '[]');
    const newPhrase = {
      id: Date.now().toString(),
      original: userInput,
      improved: result.rewritten,
      meaning: '语气改写结果',
      category: activeChannel === 'email' ? '邮件' : '全部',
      tags: [activeTarget, activeTone, activeChannel],
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('phraseBank', JSON.stringify([...savedPhrases, newPhrase]));
    toast.success('已保存到我的短语库');
  };

  return (
    <div className="container py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">同一句话，对不同对象怎么说</h1>
        <p className="text-muted-foreground font-medium">
          选择沟通对象、渠道与目标语气，获得更专业、更得体的职场化改写。
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Panel */}
        <div className="space-y-6">
          <Card className="rounded-2xl border shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">快捷场景</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {quickScenarios.map((s) => (
                  <Button
                    key={s.id}
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs font-bold gap-2 hover:bg-primary/5 hover:text-primary hover:border-primary/20"
                    onClick={() => handleQuickScenario(s.prompt)}
                  >
                    <s.icon className="w-3 h-3" />
                    {s.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <h3 className="text-sm font-bold text-foreground">原句（English 或中英混合）</h3>
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Input Raw Expression</span>
            </div>
            <Textarea
              placeholder="例如：You need to finish this today or we will miss the deadline."
              className="min-h-[150px] rounded-2xl p-4 text-base font-medium resize-none border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-bold">沟通对象</h3>
              <div className="flex flex-wrap gap-2">
                {targets.map((t) => (
                  <Button
                    key={t.id}
                    variant={activeTarget === t.id ? 'default' : 'outline'}
                    size="sm"
                    className="rounded-full text-xs font-bold px-4"
                    onClick={() => setActiveTarget(t.id)}
                  >
                    {t.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold">沟通渠道</h3>
              <div className="flex flex-wrap gap-2">
                {channels.map((c) => (
                  <Button
                    key={c.id}
                    variant={activeChannel === c.id ? 'secondary' : 'outline'}
                    size="sm"
                    className={cn(
                      "rounded-full text-xs font-bold px-4 gap-2",
                      activeChannel === c.id ? "bg-accent/10 text-accent border-accent/20" : ""
                    )}
                    onClick={() => setActiveChannel(c.id)}
                  >
                    <c.icon className="w-3 h-3" />
                    {c.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold">目标语气</h3>
              <div className="flex flex-wrap gap-2">
                {tones.map((tone) => (
                  <Button
                    key={tone.id}
                    variant={activeTone === tone.id ? 'default' : 'ghost'}
                    size="sm"
                    className="rounded-full text-xs font-bold px-4"
                    onClick={() => setActiveTone(tone.id)}
                  >
                    {tone.name}
                  </Button>
                ))}
              </div>
            </div>

            <Button 
              className="w-full h-12 rounded-xl text-base font-bold gap-2 shadow-lg" 
              disabled={isGenerating || !userInput.trim()}
              onClick={handleRewrite}
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  正在生成改写...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" /> 立即改写
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Result Panel */}
        <div className="space-y-6">
          {result ? (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <Card className="rounded-3xl border shadow-xl overflow-hidden bg-white dark:bg-zinc-950">
                <div className="bg-accent p-6 text-accent-foreground">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-white/20 text-white border-none uppercase tracking-widest text-[10px] font-bold">Rewritten Result</Badge>
                    <span className="text-[10px] font-bold opacity-70 italic">Powered by WorkTalk rules</span>
                  </div>
                  <h3 className="text-lg font-bold">改写版本</h3>
                  <div className="mt-4 p-4 bg-white/10 rounded-2xl border border-white/20">
                     <p className="text-xl font-bold leading-relaxed">{result.rewritten}</p>
                  </div>
                </div>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase font-bold text-accent tracking-widest flex items-center gap-2">
                       <MessageCircle className="w-3 h-3" /> 中文解释
                    </h4>
                    <p className="text-sm font-medium text-foreground leading-relaxed">
                      {result.explanation}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-widest">为何更合适</h4>
                      <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                        {result.whyBetter}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-widest">适用场景</h4>
                      <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                        {result.scenarios}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 border-t pt-8">
                    <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-widest">可替换表达</h4>
                    <div className="grid gap-3">
                      {result.alternatives.map((alt: any, i: number) => (
                        <div key={i} className="flex flex-col p-4 bg-muted/30 rounded-2xl group hover:bg-muted/50 transition-colors">
                           <span className="text-sm font-bold text-primary mb-1">{alt.phrase}</span>
                           <span className="text-xs text-muted-foreground">{alt.context}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full h-12 rounded-xl font-bold gap-2" onClick={handleSaveToPhraseBank}>
                       <Plus className="w-4 h-4" /> 保存到我的短语库
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-muted/10 rounded-3xl border border-dashed border-muted-foreground/30">
              <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-6">
                <RefreshCw className="w-10 h-10 text-muted-foreground/50" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">改写结果将在此显示</h3>
              <p className="text-muted-foreground max-w-sm font-medium leading-relaxed">
                输入原句并选择相应的对象、渠道和目标语气，点击「立即改写」即可获得更专业的职场表达方案。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
