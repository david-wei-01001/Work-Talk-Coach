import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Map, Library, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const featureCards = [
  {
    title: '情景练习',
    description: '面试、邮件、会议、即时消息——按对象与语气练习，获得专业反馈。',
    icon: MessageSquare,
    link: '/practice',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: '四条职业路径',
    description: '求职、新人、进阶沟通、管理者——按职业阶段系统学习，掌握核心能力。',
    icon: Map,
    link: '/paths',
    color: 'bg-green-50 text-green-600',
  },
  {
    title: '个人短语库',
    description: '一键收藏改写句，积累个人商务表达资产，面试前反复即读，随时复习。',
    icon: Library,
    link: '/phrase-bank',
    color: 'bg-teal-50 text-teal-600',
  },
];

const steps = [
  { title: '学习路径', desc: '选择职业阶段' },
  { title: '路径目录', desc: '查看 6 个核心单元' },
  { title: '单元学习', desc: '核心词汇、例句、常见错误' },
  { title: '情景练习', desc: '多角色 mock 反馈' },
  { title: '短语库', desc: '收藏并保存改写表达' },
  { title: '学习计划', desc: '选择 7/14/30/90 天节奏' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-muted/30 py-20 lg:py-32 overflow-hidden">
        <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              为面试与职场打造<br />
              <span className="text-primary">专业商务英语</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-[600px]">
              面向中文母语学习者：求职面试、职场邮件、会议沟通、跨国团队协作——不是背单词，而是练“说得像职场人”。
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
                <Link to="/study-plan">开始学习</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                <Link to="/units?path=job-seeker">进入求职路径目录</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2 italic max-w-prose">
              训练内容整合剑桥商务英语、Market Leader、商务英语写作经典及主流职场沟通教材要点，聚焦可立即使用的表达。
            </p>
          </div>
          <div className="hidden lg:block relative">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
             <Card className="relative overflow-hidden border-none shadow-2xl rounded-2xl">
               <div className="aspect-[4/3] w-full bg-muted overflow-hidden relative">
                 <img 
                   src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f648ce90-d1a7-4d9d-ba45-443f252e4cf0.jpg" 
                   alt="Professional workplace communication collaboration" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                   <p className="text-lg font-medium">"Could we prioritize finishing this today?"</p>
                   <p className="text-sm opacity-80 mt-1">— More professional than "Finish this today."</p>
                 </div>
               </div>
             </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {featureCards.map((feature, i) => (
              <Link key={i} to={feature.link} className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-border/50">
                  <CardHeader>
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", feature.color)}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                    <CardDescription className="text-base text-pretty leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm font-semibold text-primary">
                      立即开始 <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Flow */}
      <section className="py-20 bg-muted/30 border-y">
        <div className="container">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">推荐学习流程</h2>
            <p className="text-muted-foreground max-w-2xl">
              系统化的学习闭环，帮助你完成从“认识表达”到“能在真实场景中使用表达”的转化。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-card rounded-2xl border shadow-sm">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-4 bg-accent/10 rounded-xl border border-accent/20 flex items-center justify-center gap-2 text-sm font-medium text-accent">
            <CheckCircle2 className="w-4 h-4" />
            <span>当前为演示版，进度保存在浏览器本地，无真实 AI / 登录。</span>
          </div>
        </div>
      </section>
    </div>
  );
}
