import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageSquare, 
  RefreshCw, 
  Library, 
  Plus, 
  Target, 
  Lightbulb, 
  AlertCircle, 
  CheckCircle,
  FileText,
  ChevronRight,
  BookOpen,
  Info,
  ExternalLink,
  Flag,
  Zap,
  ClipboardList,
  Mic
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { pathData } from '@/lib/data';
import { unitsContentData } from '@/lib/unitsContent';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VoiceAssessment from '@/components/VoiceAssessment';


const pathBarColors: Record<string, string> = {
  'job-seeker': 'bg-blue-500',
  'newcomer': 'bg-green-500',
  'communicator': 'bg-teal-500',
  'manager': 'bg-orange-500',
};

export default function UnitLearning() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pathId = searchParams.get('path') || 'job-seeker';
  const currentPath = pathData[pathId as keyof typeof pathData] || pathData['job-seeker'];
  const unitContent = unitsContentData[id as keyof typeof unitsContentData] || unitsContentData['u1'];
  
  const [isCompleted, setIsCompleted] = useState(false);
  const [showNextPrompt, setShowNextPrompt] = useState(false);
  const [isFinalUnit, setIsFinalUnit] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showReferences, setShowReferences] = useState<Record<number, boolean>>({});
  const barColor = pathBarColors[pathId] || 'bg-primary';

  const toggleReference = (index: number) => {
    setShowReferences(prev => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    if (!id) return;
    const completedSteps = JSON.parse(localStorage.getItem('studyProgress') || '[]');
    setIsCompleted(completedSteps.includes(id));
    
    const unitIndex = currentPath.units.findIndex((u: any) => u.id === id);
    setIsFinalUnit(unitIndex === currentPath.units.length - 1);

    const pathUnits = currentPath.units.map((u: any) => u.id);
    const completedInPath = pathUnits.filter((uid: string) => completedSteps.includes(uid)).length;
    setProgress(Math.round((completedInPath / currentPath.units.length) * 100));
    
    // Scroll to top on unit change
    window.scrollTo(0, 0);
  }, [id, currentPath]);

  const toggleCompletion = () => {
    if (!id) return;
    const completedSteps = JSON.parse(localStorage.getItem('studyProgress') || '[]');
    let updated;
    if (completedSteps.includes(id)) {
      updated = completedSteps.filter((s: string) => s !== id);
      toast.success('已重置单元进度');
      setIsCompleted(false);
    } else {
      updated = [...completedSteps, id];
      toast.success('恭喜完成本单元学习！');
      setIsCompleted(true);
      setShowNextPrompt(true);
    }
    localStorage.setItem('studyProgress', JSON.stringify(updated));
    
    const pathUnits = currentPath.units.map((u: any) => u.id);
    const completedInPath = pathUnits.filter((uid: string) => updated.includes(uid)).length;
    setProgress(Math.round((completedInPath / currentPath.units.length) * 100));
  };

  const handleNextUnit = () => {
    if (!id) return;
    const unitIndex = currentPath.units.findIndex((u: any) => u.id === id);
    if (unitIndex !== -1 && unitIndex < currentPath.units.length - 1) {
      const nextUnitId = currentPath.units[unitIndex + 1].id;
      navigate(`/units/${nextUnitId}?path=${pathId}`);
    }
    setShowNextPrompt(false);
  };

  const handleBack = () => {
    if (pathId) {
      navigate(`/units?path=${pathId}`);
    } else {
      navigate(-1);
    }
  };

  const handleSaveToPhraseBank = (phrase: string, meaning: string, category: string = '全部') => {
    const savedPhrases = JSON.parse(localStorage.getItem('phraseBank') || '[]');
    const newPhrase = {
      id: Date.now().toString(),
      original: phrase,
      meaning: meaning,
      category: category,
      tags: [unitContent.title],
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('phraseBank', JSON.stringify([...savedPhrases, newPhrase]));
    toast.success('已保存到短语库');
  };

  if (!unitContent) return <div>Loading...</div>;

  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <Button onClick={handleBack} variant="ghost" size="sm" className="rounded-full shrink-0">
          <ArrowLeft className="w-4 h-4 mr-2" /> 返回目录
        </Button>
        
        <div className="flex items-center gap-4 flex-1 max-w-xs sm:max-w-md bg-muted/30 p-2 px-4 rounded-full border">
          <div className="flex-1 space-y-1">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <span>{currentPath.title}进度</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5" indicatorClassName={barColor} />
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
             <BookOpen className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {/* Unit Header Card */}
        <section className="relative overflow-hidden p-8 rounded-3xl bg-primary text-primary-foreground shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-none">Level {unitContent.level}</Badge>
                {isCompleted && (
                  <Badge className="bg-green-500/20 text-white border-none">
                    <CheckCircle className="w-3 h-3 mr-1" /> 已完成
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight">{unitContent.title}</h1>
              <p className="text-2xl font-medium text-primary-foreground/80">{unitContent.englishTitle}</p>
            </div>
            <div className="flex flex-wrap gap-2 max-w-md md:justify-end">
              {unitContent.scenarios.slice(0, 3).map((s: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium whitespace-nowrap">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        </section>

        {/* Learning Goals and Scenarios Row */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-none bg-accent/5 shadow-none p-6">
            <h3 className="text-lg font-bold flex items-center gap-2 text-accent mb-4">
              <Target className="w-5 h-5" /> 单元目标
            </h3>
            <ul className="space-y-3">
              {unitContent.objectives.map((obj: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="rounded-2xl border-none bg-muted/30 shadow-none p-6">
            <h3 className="text-lg font-bold flex items-center gap-2 text-muted-foreground mb-4">
              <Info className="w-5 h-5" /> 适用场景
            </h3>
            <div className="flex flex-wrap gap-2">
              {unitContent.scenarios.map((s: string, i: number) => (
                <Badge key={i} variant="outline" className="bg-background/50 border-muted-foreground/20">
                  {s}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Main Tabs System */}
        <Tabs defaultValue="vocab" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 h-auto p-1 bg-muted/50 rounded-2xl mb-8">
            <TabsTrigger value="vocab" className="rounded-xl font-bold py-3">词汇搭配</TabsTrigger>
            <TabsTrigger value="patterns" className="rounded-xl font-bold py-3">高频句型</TabsTrigger>
            <TabsTrigger value="formal" className="rounded-xl font-bold py-3">正式对话</TabsTrigger>
            <TabsTrigger value="smalltalk" className="rounded-xl font-bold py-3">Small Talk</TabsTrigger>
            <TabsTrigger value="mistakes" className="rounded-xl font-bold py-3">纠错诊所</TabsTrigger>
            <TabsTrigger value="upgrades" className="rounded-xl font-bold py-3">表达升级</TabsTrigger>
            <TabsTrigger value="practice" className="rounded-xl font-bold py-3">场景练习</TabsTrigger>
            <TabsTrigger value="bank" className="rounded-xl font-bold py-3">短语入库</TabsTrigger>
          </TabsList>

          {/* Vocabulary Section */}
          <TabsContent value="vocab" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {unitContent.vocabulary.map((item: any, i: number) => (
                <Card key={i} className="group p-5 bg-card border rounded-2xl shadow-sm hover:border-primary/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-lg font-bold text-primary">{item.expression}</span>
                        <span className="text-sm font-medium text-muted-foreground">{item.meaning}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground hover:text-primary shrink-0"
                        onClick={() => handleSaveToPhraseBank(item.expression, item.meaning)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 font-medium bg-muted/30 p-2 rounded-lg">{item.context}</p>
                  </div>
                  <p className="text-sm italic text-foreground/80 font-medium border-l-2 border-primary/20 pl-3">"{item.example}"</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sentence Patterns Section */}
          <TabsContent value="patterns" className="space-y-4">
            {unitContent.sentencePatterns.map((p: any, i: number) => (
              <Card key={i} className="p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      <span className="text-base font-mono font-bold text-primary">{p.pattern}</span>
                    </div>
                    <p className="text-sm font-bold text-foreground/70">{p.meaning}</p>
                    <p className="text-xs text-muted-foreground">{p.usage}</p>
                  </div>
                  <div className="md:w-1/2 bg-muted/20 p-4 rounded-xl border border-dashed">
                    <p className="text-sm italic font-medium">"{p.example}"</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="shrink-0"
                    onClick={() => handleSaveToPhraseBank(p.pattern, p.meaning)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Formal Dialogue Section */}
          <TabsContent value="formal" className="space-y-8">
            <Card className="rounded-3xl overflow-hidden border-2">
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-xl font-bold">{unitContent.formalDialogue.title}</h3>
                <p className="text-sm opacity-80 mt-1">{unitContent.formalDialogue.context}</p>
              </div>
              <div className="p-6 space-y-6 bg-muted/10">
                {unitContent.formalDialogue.conversation.map((turn: any, i: number) => (
                  <div key={i} className={cn("flex gap-4 items-start", i % 2 !== 0 ? "flex-row-reverse" : "")}>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-sm",
                      i % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                    )}>
                      {turn.speaker[0]}
                    </div>
                    <div className={cn(
                      "px-4 py-3 rounded-2xl max-w-[85%] text-sm font-medium shadow-sm leading-relaxed",
                      i % 2 === 0 ? "bg-card rounded-tl-none" : "bg-primary/10 rounded-tr-none text-primary"
                    )}>
                      <p className="font-bold text-[10px] uppercase opacity-60 mb-1">{turn.speaker}</p>
                      {turn.text}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-bold text-primary flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" /> 对话中可学习表达
                </h4>
                <div className="grid gap-2">
                  {unitContent.formalDialogue.learnableExpressions.map((exp: any, i: number) => (
                    <div key={i} className="p-3 bg-card border rounded-xl text-sm flex justify-between items-center group">
                      <div>
                        <span className="font-bold text-primary">{exp.expression}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{exp.explanation}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleSaveToPhraseBank(exp.expression, exp.explanation)}>
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-accent flex items-center gap-2">
                  <Info className="w-5 h-5" /> 专业度分析
                </h4>
                <div className="p-5 bg-accent/5 border border-accent/20 rounded-2xl text-sm leading-relaxed text-foreground/80 font-medium">
                  {unitContent.formalDialogue.analysis}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Small Talk Section */}
          <TabsContent value="smalltalk" className="space-y-8">
            <Card className="rounded-3xl overflow-hidden border-2 border-accent/30">
              <div className="bg-accent text-accent-foreground p-6">
                <h3 className="text-xl font-bold">{unitContent.smallTalkDialogue.title}</h3>
                <p className="text-sm opacity-80 mt-1">{unitContent.smallTalkDialogue.context}</p>
              </div>
              <div className="p-6 space-y-6 bg-accent/5">
                {unitContent.smallTalkDialogue.conversation.map((turn: any, i: number) => (
                  <div key={i} className={cn("flex gap-4 items-start", i % 2 !== 0 ? "flex-row-reverse" : "")}>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-sm",
                      i % 2 === 0 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    )}>
                      {turn.speaker[0]}
                    </div>
                    <div className={cn(
                      "px-4 py-3 rounded-2xl max-w-[85%] text-sm font-medium shadow-sm leading-relaxed",
                      i % 2 === 0 ? "bg-card rounded-tl-none" : "bg-accent/10 rounded-tr-none text-accent"
                    )}>
                      <p className="font-bold text-[10px] uppercase opacity-60 mb-1">{turn.speaker}</p>
                      {turn.text}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-bold text-accent flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" /> Small Talk 可学习表达
                </h4>
                <div className="grid gap-2">
                  {unitContent.smallTalkDialogue.learnableExpressions.map((exp: any, i: number) => (
                    <div key={i} className="p-3 bg-card border rounded-xl text-sm flex justify-between items-center group">
                      <div>
                        <span className="font-bold text-accent">{exp.expression}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{exp.explanation}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleSaveToPhraseBank(exp.expression, exp.explanation)}>
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-primary flex items-center gap-2">
                  <Info className="w-5 h-5" /> 表达点评
                </h4>
                <div className="p-5 bg-primary/5 border border-primary/20 rounded-2xl text-sm leading-relaxed text-foreground/80 font-medium">
                  {unitContent.smallTalkDialogue.analysis}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Mistakes Clinic Section */}
          <TabsContent value="mistakes" className="space-y-6">
            {unitContent.commonMistakes.map((m: any, i: number) => (
              <Card key={i} className="rounded-2xl border-2 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 bg-destructive/5 space-y-3">
                    <div className="flex items-center gap-2 text-destructive font-bold uppercase text-xs tracking-widest">
                      <AlertCircle className="w-4 h-4" /> Wrong / Chinglish
                    </div>
                    <p className="text-lg font-medium text-destructive/80 line-through italic">{m.wrong}</p>
                  </div>
                  <div className="p-6 bg-green-500/5 space-y-3 border-t md:border-t-0 md:border-l">
                    <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs tracking-widest">
                      <CheckCircle className="w-4 h-4" /> Better / Professional
                    </div>
                    <p className="text-lg font-bold text-green-700">{m.better}</p>
                  </div>
                </div>
                <div className="p-6 border-t bg-muted/10 text-sm leading-relaxed text-foreground/70 font-medium">
                  <span className="font-bold text-primary mr-2">Why it works:</span> {m.explanation}
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Upgrades Section */}
          <TabsContent value="upgrades" className="space-y-6">
            {unitContent.expressionUpgrades.map((u: any, i: number) => (
              <Card key={i} className="rounded-2xl border-2 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid gap-6 md:grid-cols-3 mb-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Basic</span>
                    <p className="font-medium text-foreground/60">{u.basic}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Better</span>
                    <p className="font-bold text-primary">{u.better}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">More Professional</span>
                    <p className="font-extrabold text-accent">{u.professional}</p>
                  </div>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl text-sm italic font-medium text-muted-foreground">
                  {u.explanation}
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Practice Section */}
          <TabsContent value="practice" className="space-y-6">
            {unitContent.practiceTasks.map((task: any, i: number) => (
              <Card key={i} className="rounded-2xl border-2 p-6 overflow-hidden relative">
                <div className="relative z-10 flex flex-col md:flex-row gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 font-bold text-xl">
                     {i + 1}
                   </div>
                   <div className="flex-1 space-y-4">
                     <h3 className="text-xl font-bold text-primary">{task.title}</h3>
                     <p className="text-sm leading-relaxed text-foreground/80 font-medium">{task.instruction}</p>
                     {task.example && showReferences[i] && (
                       <div className="mt-4 p-5 bg-muted/20 rounded-2xl border border-dashed text-sm italic animate-in zoom-in-95 duration-200">
                         <span className="not-italic font-bold text-xs uppercase text-muted-foreground block mb-2">Example / Reference:</span>
                         {task.example}
                       </div>
                     )}
                     <div className="pt-4 space-y-4">
                       <div className="flex gap-3">
                         <Button 
                           variant="outline" 
                           size="sm" 
                           className="rounded-xl" 
                           onClick={() => toggleReference(i)}
                         >
                           {showReferences[i] ? "隐藏参考范文" : "查看参考范文"}
                         </Button>
                       </div>
                       
                       {task.example && (
                         <div className="pt-2 border-t mt-4">
                           <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                             <Mic className="w-3 h-3" /> AI 语音练习 (朗读参考范文)
                           </h4>
                           <VoiceAssessment 
                             referenceText={task.example} 
                             onSuccess={(score) => {
                               if (score >= 80) {
                                 toast.success('语音练习达标！');
                               }
                             }}
                           />
                         </div>
                       )}
                     </div>
                   </div>
                </div>
                <ClipboardList className="absolute top-4 right-4 w-16 h-16 text-primary/5 -rotate-12" />
              </Card>
            ))}
          </TabsContent>

          {/* Phrase Bank Quick Add Section */}
          <TabsContent value="bank" className="space-y-6">
            <div className="grid gap-3 md:grid-cols-2">
              {unitContent.saveablePhrases.map((phrase: any, i: number) => (
                <Card key={i} className="p-4 rounded-xl border flex items-center justify-between group hover:border-primary transition-colors">
                  <div className="space-y-1">
                    <Badge variant="secondary" className="text-[10px]">{phrase.category}</Badge>
                    <p className="text-sm font-bold text-primary">{phrase.phrase}</p>
                    <p className="text-xs text-muted-foreground">{phrase.meaning}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="shrink-0 hover:bg-primary hover:text-white rounded-full transition-all"
                    onClick={() => handleSaveToPhraseBank(phrase.phrase, phrase.meaning, phrase.category)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>
            <div className="text-center py-6">
              <Button asChild variant="link">
                <Link to="/phrase-bank">前往我的短语库查看全部已存内容 <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Resources Section at the very bottom */}
        <section className="pt-10 border-t">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Library className="w-5 h-5" /> 推荐学习资源
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {unitContent.resources.map((res: any, i: number) => (
              <a 
                key={i} 
                href={res.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col p-5 bg-card border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-primary group-hover:underline flex items-center gap-2">
                    {res.name} <ExternalLink className="w-3 h-3" />
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground font-medium mb-3">{res.description}</p>
                <div className="mt-auto flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-widest">
                  Explore Resource <ChevronRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Completion Action */}
        <div className="py-12 flex flex-col items-center border-t mt-12">
          <div className={cn(
            "w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500",
            isCompleted ? "bg-green-500 text-white shadow-lg shadow-green-200" : "bg-muted text-muted-foreground"
          )}>
            <CheckCircle className={cn("w-10 h-10", isCompleted ? "scale-110" : "opacity-40")} />
          </div>
          <h3 className="text-2xl font-bold mb-2">
            {isCompleted ? "本单元已达成！" : "完成本单元学习了吗？"}
          </h3>
          <p className="text-muted-foreground mb-8 text-center max-w-md">
            {isCompleted 
              ? "太棒了！你已经完成了本单元的所有内容。你可以继续巩固或开启下一个挑战。" 
              : "点击下方按钮将本单元标记为「已完成」，我们将同步更新你的学习进度。"}
          </p>
          <Button 
            onClick={toggleCompletion} 
            size="lg"
            variant={isCompleted ? "outline" : "default"}
            className={cn("w-full max-w-sm h-16 rounded-2xl font-bold text-xl shadow-lg transition-all", isCompleted ? "border-green-200 text-green-700 hover:bg-green-50" : "bg-primary hover:bg-primary/90")}
          >
            {isCompleted ? (
              <><RefreshCw className="w-6 h-6 mr-2" /> 重新学习</>
            ) : (
              <><Flag className="w-6 h-6 mr-2" /> 标记为已完成</>
            )}
          </Button>
        </div>
      </div>

      {/* Next Unit Prompt */}
      <AlertDialog open={showNextPrompt} onOpenChange={setShowNextPrompt}>
        <AlertDialogContent className="rounded-3xl max-w-[calc(100%-2rem)] md:max-w-lg p-0 overflow-hidden border-none shadow-2xl">
          <div className="bg-green-600 p-8 text-white flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {isFinalUnit ? "恭喜！通关本路径" : "太棒了！完成挑战"}
            </h2>
            <p className="text-green-50/80 font-medium">
              {isFinalUnit 
                ? "你已经完成了本路径的所有核心课程，职场力大幅提升！" 
                : "你离目标又近了一步。趁热打铁，进入下一关吧？"}
            </p>
          </div>
          <div className="p-6 bg-card flex flex-col gap-3">
            {!isFinalUnit && (
              <AlertDialogAction onClick={handleNextUnit} className="h-14 rounded-2xl font-bold text-lg bg-green-600 hover:bg-green-700 shadow-md">
                进入下一单元 <ChevronRight className="w-5 h-5 ml-1" />
              </AlertDialogAction>
            )}
            <AlertDialogCancel className="h-14 rounded-2xl font-bold text-lg border-2" onClick={() => setShowNextPrompt(false)}>
              {isFinalUnit ? "查看学习成果" : "留在本页回顾"}
            </AlertDialogCancel>
            {isFinalUnit && (
              <AlertDialogAction onClick={() => navigate(`/units?path=${pathId}`)} className="h-14 rounded-2xl font-bold text-lg bg-primary">
                返回路径中心
              </AlertDialogAction>
            )}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
