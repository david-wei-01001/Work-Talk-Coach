import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Map, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Target,
  Zap,
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const pathOptions = [
  { id: 'job-seeker', name: '求职路径' },
  { id: 'newcomer', name: '职场新人路径' },
  { id: 'communicator', name: '职场沟通进阶' },
  { id: 'manager', name: '管理者路径' },
];

const periodOptions = [
  { id: 7, name: '7 天冲刺', icon: Zap },
  { id: 14, name: '14 天巩固', icon: TrendingUp },
  { id: 30, name: '30 天系统', icon: Calendar },
  { id: 90, name: '90 天进阶', icon: Target },
];

const defaultPlan = [
  { id: 1, day: 'Day 1', title: '工作与职位', desc: '学习岗位描述与雇佣关系词汇。', link: '/units/u1' },
  { id: 2, day: 'Day 2', title: '招聘与选拔', desc: '招聘流程、候选人、offer 与常见搭配。', link: '/units/u2' },
  { id: 3, day: 'Day 3', title: '技能与资质', desc: '用证据描述技能，避免空泛形容词。', link: '/units/u3' },
  { id: 4, day: 'Day 4', title: '简历与求职信', desc: '动词 + 数据；求职信连接公司需求。', link: '/units/u4' },
  { id: 5, day: 'Day 5', title: '面试语言', desc: '自我介绍、行为面试、STAR 回答。', link: '/units/u5' },
  { id: 6, day: 'Day 6', title: '录用与跟进', desc: '感谢邮件、follow-up、offer 沟通。', link: '/units/u6' },
  { id: 7, day: 'Day 7', title: '复习与短语库', desc: '整理个人可复用表达，模拟一次完整面试。', link: '/phrase-bank' },
];

export default function StudyPlan() {
  const [activePath, setActivePath] = useState('job-seeker');
  const [activePeriod, setActivePeriod] = useState(7);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('studyProgress') || '[]');
    setCompletedSteps(saved);
  }, []);

  const toggleStep = (id: number) => {
    const updated = completedSteps.includes(id) 
      ? completedSteps.filter(s => s !== id) 
      : [...completedSteps, id];
    setCompletedSteps(updated);
    localStorage.setItem('studyProgress', JSON.stringify(updated));
    if (!completedSteps.includes(id)) {
      toast.success('恭喜完成今日学习节点！');
    }
  };

  const progress = Math.round((completedSteps.length / defaultPlan.length) * 100);

  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold tracking-tight">学习计划</h1>
            <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10">B1-B2</Badge>
          </div>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl">
            共 {defaultPlan.length} 个学习节点，均可点击进入真实页面。适合求职沟通冲刺。
          </p>
        </div>
        <Card className="p-6 bg-card border shadow-sm rounded-2xl min-w-[240px]">
           <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">总进度</span>
              <span className="text-lg font-black text-primary">{progress}%</span>
           </div>
           <Progress value={progress} className="h-2 bg-muted" />
        </Card>
      </div>

      <div className="space-y-12">
        {/* Filters */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-sm font-bold flex items-center gap-2">
               <Map className="w-4 h-4 text-primary" /> 路径选择
            </h3>
            <div className="flex flex-wrap gap-2">
              {pathOptions.map((path) => (
                <Button
                  key={path.id}
                  variant={activePath === path.id ? 'default' : 'outline'}
                  size="sm"
                  className="rounded-full text-xs font-bold px-4"
                  onClick={() => setActivePath(path.id)}
                >
                  {path.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold flex items-center gap-2">
               <Clock className="w-4 h-4 text-primary" /> 学习周期
            </h3>
            <div className="flex flex-wrap gap-2">
              {periodOptions.map((period) => (
                <Button
                  key={period.id}
                  variant={activePeriod === period.id ? 'secondary' : 'outline'}
                  size="sm"
                  className={cn(
                    "rounded-full text-xs font-bold px-4 gap-2",
                    activePeriod === period.id ? "bg-accent/10 text-accent border-accent/20" : ""
                  )}
                  onClick={() => setActivePeriod(period.id)}
                >
                  <period.icon className="w-3.5 h-3.5" />
                  {period.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
           <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border lg:left-1/2 lg:-ml-px hidden sm:block" />
           
           <div className="space-y-8">
              {defaultPlan.map((node, i) => (
                <div key={node.id} className="relative flex flex-col sm:flex-row items-start sm:items-center group">
                   <div className="flex items-center w-full">
                      {/* Desktop Left Space */}
                      <div className="hidden lg:block lg:w-1/2 lg:pr-12 text-right">
                         {i % 2 === 0 && (
                            <div className="space-y-1">
                               <span className="text-xs font-bold text-accent uppercase tracking-widest">{node.day}</span>
                               <h4 className="text-lg font-bold">{node.title}</h4>
                            </div>
                         )}
                      </div>

                      {/* Dot */}
                      <div className={cn(
                        "relative z-10 w-12 h-12 rounded-full border-4 border-background flex items-center justify-center shrink-0 transition-all duration-300",
                        completedSteps.includes(node.id) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-muted-foreground/20"
                      )}>
                         {completedSteps.includes(node.id) ? (
                           <CheckCircle2 className="w-6 h-6" />
                         ) : (
                           <span className="font-bold text-sm">{i + 1}</span>
                         )}
                      </div>

                      {/* Card Area */}
                      <div className="ml-6 lg:ml-0 lg:w-1/2 lg:pl-12 flex-1">
                         <Card className={cn(
                           "transition-all duration-300 border-2 rounded-2xl overflow-hidden hover:shadow-md",
                           completedSteps.includes(node.id) ? "border-primary/20 bg-primary/5" : "border-border/50 bg-card hover:border-primary/30"
                         )}>
                            <div className="p-5 flex items-center justify-between gap-4">
                               <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1 lg:hidden">
                                     <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{node.day}</span>
                                  </div>
                                  <h4 className="text-lg font-bold truncate mb-1">{node.title}</h4>
                                  <p className="text-sm text-muted-foreground line-clamp-1">{node.desc}</p>
                               </div>
                               <div className="flex items-center gap-2 shrink-0">
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className={cn("rounded-full h-10 w-10", completedSteps.includes(node.id) ? "text-primary" : "text-muted-foreground")}
                                    onClick={() => toggleStep(node.id)}
                                  >
                                    {completedSteps.includes(node.id) ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                                  </Button>
                                  <Button asChild variant="outline" size="sm" className="rounded-full font-bold px-4 h-9">
                                     <Link to={node.link}>
                                        进入 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                     </Link>
                                  </Button>
                               </div>
                            </div>
                         </Card>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Call to Action */}
        <div className="pt-8">
           <Card className="rounded-3xl bg-primary text-primary-foreground border-none overflow-hidden p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                 <div className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-extrabold">坚持就是胜利！</h2>
                    <p className="text-lg text-white/70 max-w-xl">
                       每天只需 50-70 分钟，系统化练习真实的职场表达。完成 7 天计划，你将在面试和职场沟通中表现得更加专业和自信。
                    </p>
                 </div>
                 <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base font-bold shadow-xl">
                    <Link to="/units">继续学习</Link>
                 </Button>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
}
