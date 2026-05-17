import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useParams } from 'react-router-dom';
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
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const unitContent = {
  title: '工作与职位',
  englishTitle: 'Work and Jobs',
  description: '学习岗位描述与雇佣形式。内容整合自主流商务英语教材与职场实战表达，可直接用于口头自我介绍和职位理解。',
  objectives: '掌握如何专业地介绍自己的职位、职责以及所属团队。',
  vocabulary: [
    { word: 'role', meaning: '角色/岗位', usage: 'What is your role in the new project?' },
    { word: 'position', meaning: '职位', usage: 'She currently holds a senior position in HR.' },
    { word: 'responsibility', meaning: '职责', usage: 'My main responsibility is managing the budget.' },
    { word: 'internship', meaning: '实习', usage: 'I completed a six-month internship at a tech company.' },
    { word: 'supervisor', meaning: '主管', usage: 'I report directly to my supervisor.' },
  ],
  collocations: [
    {
      phrase: 'be responsible for + noun / -ing',
      explanation: '负责某件事。',
      error: 'I am responsible of contact customers.',
      correct: 'I am responsible for contacting customers.',
      professional: 'I am responsible for communicating with clients and following up on their requests.'
    },
    {
      phrase: 'be in charge of',
      explanation: '主管，掌管某项事务。',
      usage: 'He is in charge of the sales department.'
    }
  ],
  examples: [
    "I'm responsible for coordinating between different departments.",
    "My role involves analyzing market trends and preparing reports.",
    "I've been in this position for three years now."
  ],
  dialogue: [
    { speaker: 'A', text: 'So, tell me about your current role.' },
    { speaker: 'B', text: "Currently, I'm responsible for overseeing the digital marketing campaign for our new product launch." },
    { speaker: 'A', text: 'And who do you report to?' },
    { speaker: 'B', text: 'I report directly to the Marketing Director.' }
  ],
  writing: [
    "In my current role, I am responsible for...",
    "My primary task involves...",
    "I have extensive experience in...",
    "I report to [Job Title] and manage a team of [Number]."
  ]
};

export default function UnitLearning() {
  const { id } = useParams();

  const handleSaveToPhraseBank = (phrase: string, meaning: string) => {
    const savedPhrases = JSON.parse(localStorage.getItem('phraseBank') || '[]');
    const newPhrase = {
      id: Date.now().toString(),
      original: phrase,
      meaning: meaning,
      category: '全部',
      tags: ['Work and Jobs'],
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('phraseBank', JSON.stringify([...savedPhrases, newPhrase]));
    toast.success('已保存到短语库');
  };

  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="ghost" size="sm" className="rounded-full">
          <Link to="/units"><ArrowLeft className="w-4 h-4 mr-2" /> 返回目录</Link>
        </Button>
      </div>

      <div className="space-y-8">
        {/* Header */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold">{unitContent.title}</h1>
            <Badge variant="secondary" className="bg-primary/5 text-primary">Unit 1</Badge>
          </div>
          <p className="text-xl font-medium text-muted-foreground">{unitContent.englishTitle}</p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl italic">
            {unitContent.description}
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Objectives */}
            <Card className="border-none bg-accent/5 shadow-none rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-accent">
                  <Target className="w-5 h-5" /> 单元目标
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 font-medium">{unitContent.objectives}</p>
              </CardContent>
            </Card>

            {/* Content Sections */}
            <Tabs defaultValue="vocabulary" className="w-full">
              <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-muted/50 rounded-xl">
                <TabsTrigger value="vocabulary" className="rounded-lg font-bold">核心词汇</TabsTrigger>
                <TabsTrigger value="collocations" className="rounded-lg font-bold">常用搭配</TabsTrigger>
                <TabsTrigger value="dialogue" className="rounded-lg font-bold">场景对话</TabsTrigger>
                <TabsTrigger value="writing" className="rounded-lg font-bold">写作句型</TabsTrigger>
              </TabsList>
              
              <TabsContent value="vocabulary" className="mt-8 space-y-4">
                <div className="grid gap-4">
                  {unitContent.vocabulary.map((item, i) => (
                    <div key={i} className="group p-5 bg-card border rounded-2xl shadow-sm hover:border-primary/50 transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-primary">{item.word}</span>
                          <span className="text-sm text-muted-foreground">{item.meaning}</span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-muted-foreground hover:text-primary"
                          onClick={() => handleSaveToPhraseBank(item.word, item.meaning)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-sm italic text-muted-foreground font-medium">"{item.usage}"</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="collocations" className="mt-8 space-y-8">
                {unitContent.collocations.map((item, i) => (
                  <Card key={i} className="border-2 rounded-2xl overflow-hidden shadow-sm">
                    <CardHeader className="bg-muted/30 border-b">
                      <CardTitle className="text-lg font-bold flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" /> {item.phrase}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">{item.explanation}</p>
                      </div>
                      {item.error && (
                        <div className="grid gap-4 p-4 bg-muted/20 rounded-xl border border-dashed">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-destructive uppercase tracking-widest mb-1">错误示例</p>
                              <p className="text-sm line-through opacity-70">{item.error}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 border-t pt-4">
                            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">正确表达</p>
                              <p className="text-sm font-medium">{item.correct}</p>
                            </div>
                          </div>
                          {item.professional && (
                            <div className="flex items-start gap-3 border-t pt-4">
                              <Badge variant="outline" className="text-primary border-primary bg-primary/5 shrink-0 mt-0.5">Professional</Badge>
                              <div>
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">更专业版本</p>
                                <p className="text-sm font-bold text-primary">{item.professional}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {!item.error && item.usage && (
                         <div className="p-4 bg-muted/20 rounded-xl border">
                           <p className="text-sm font-medium italic text-muted-foreground">"{item.usage}"</p>
                         </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="dialogue" className="mt-8">
                <Card className="rounded-2xl border-none bg-muted/20 p-6">
                   <div className="space-y-6">
                      {unitContent.dialogue.map((line, i) => (
                        <div key={i} className={cn("flex gap-4 items-start", line.speaker === 'B' ? "flex-row-reverse" : "")}>
                           <div className={cn(
                             "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-sm",
                             line.speaker === 'A' ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                           )}>
                             {line.speaker}
                           </div>
                           <div className={cn(
                             "px-4 py-3 rounded-2xl max-w-[80%] text-sm font-medium shadow-sm",
                             line.speaker === 'A' ? "bg-card rounded-tl-none" : "bg-primary/10 rounded-tr-none text-primary"
                           )}>
                             {line.text}
                           </div>
                        </div>
                      ))}
                   </div>
                </Card>
              </TabsContent>

              <TabsContent value="writing" className="mt-8">
                <div className="grid gap-3">
                  {unitContent.writing.map((pattern, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-card border rounded-xl hover:border-primary transition-colors">
                      <span className="text-sm font-mono text-primary font-bold">{pattern}</span>
                      <Button variant="ghost" size="icon" onClick={() => handleSaveToPhraseBank(pattern, '常用写作句型')}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            <Card className="rounded-2xl border shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-bold flex items-center gap-2">
                   <MessageSquare className="w-4 h-4" /> 推荐练习
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-start rounded-xl" variant="outline">
                  <Link to="/practice?scenario=interview">去情景练习：面试间</Link>
                </Button>
                <Button asChild className="w-full justify-start rounded-xl" variant="outline">
                  <Link to="/rewriter">去语气改写</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-sm bg-primary/5">
              <CardHeader>
                <CardTitle className="text-base font-bold flex items-center gap-2">
                   <Library className="w-4 h-4" /> 我的沉淀
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-start rounded-xl" variant="default">
                  <Link to="/phrase-bank">查看我的短语库</Link>
                </Button>
                <Button variant="secondary" className="w-full justify-start rounded-xl" onClick={() => toast.success('已加入 7 天学习计划')}>
                   加入 7 天计划
                </Button>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20">
               <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Learning Tip</h4>
               <p className="text-xs text-accent/80 leading-relaxed font-medium">
                 不要只背单词的中文意思，要通过「常用搭配」和「商务例句」理解它在真实职场场景中的用法。尝试把句型代入你自己的真实工作经历中进行练习。
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
