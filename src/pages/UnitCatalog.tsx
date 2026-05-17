import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const pathData: Record<string, any> = {
  'job-seeker': {
    title: '求职路径',
    englishTitle: 'Prepare for a Job',
    level: 'B1-B2',
    description: '聚焦招聘广告、投递、面试与录用沟通。适合准备实习、校招、跳槽的用户。',
    target: '在校生、应届生、转行求职者',
    focus: '职位描述与招聘流程、简历与求职信、面试问答与跟进邮件、录用与入职前沟通',
    units: [
      { id: 'u1', title: '工作与职位', english: 'Work and Jobs', duration: '50-70 分钟', focus: ['job title', 'role', 'responsibility', 'internship'] },
      { id: 'u2', title: '招聘与选拔', english: 'Recruitment and Selection', duration: '50-70 分钟', focus: ['apply for a job', 'job posting', 'interview process', 'offer'] },
      { id: 'u3', title: '技能与资质', english: 'Skills and Qualifications', duration: '50-70 分钟', focus: ['transferable skills', 'qualification', 'relevant experience'] },
      { id: 'u4', title: '简历与求职信', english: 'CVs and Cover Letters', duration: '50-70 分钟', focus: ['action verbs', 'professional summary', 'cover letter tone'] },
      { id: 'u5', title: '面试语言', english: 'Interview Language', duration: '50-70 分钟', focus: ['tell me about yourself', 'strengths and weaknesses', 'STAR method'] },
      { id: 'u6', title: '录用与跟进', english: 'Job Offer and Follow-Up', duration: '50-70 分钟', focus: ['thank-you email', 'follow-up email', 'negotiation basics'] },
    ]
  },
  'newcomer': {
    title: '职场新人路径',
    englishTitle: 'Start Your First Workplace Role',
    level: 'B1',
    description: '入职、请教、日程周报、基础会议与邮件礼仪。',
    target: '入职 0-1 年新人',
    focus: '入职融入、礼貌请求、工作汇报、会议发言',
    units: Array(6).fill(null).map((_, i) => ({ id: `n${i+1}`, title: `新人单元 ${i+1}`, english: `Newcomer Unit ${i+1}`, duration: '50-70 分钟', focus: ['Common expressions', 'Workplace etiquette'] }))
  },
  'communicator': {
    title: '职场沟通进阶',
    englishTitle: 'Communicate Better at Work',
    level: 'B2',
    description: '跨部门协作、客户沟通、演示与棘手对话。',
    target: '有基础、希望提升专业度的职场人',
    focus: '会议主导、跨团队沟通、客户维护、演示技巧',
    units: Array(6).fill(null).map((_, i) => ({ id: `c${i+1}`, title: `沟通单元 ${i+1}`, english: `Communication Unit ${i+1}`, duration: '50-70 分钟', focus: ['Advanced expressions', 'Strategic communication'] }))
  },
  'manager': {
    title: '管理者路径',
    englishTitle: 'Grow into a Manager',
    level: 'B2-C1',
    description: '反馈、授权、绩效沟通与高层汇报。',
    target: 'Team Lead / 经理',
    focus: '建设性反馈、授权管理、Stakeholder 更新、战略汇报',
    units: Array(6).fill(null).map((_, i) => ({ id: `m${i+1}`, title: `管理单元 ${i+1}`, english: `Management Unit ${i+1}`, duration: '50-70 分钟', focus: ['Leadership language', 'Managing people'] }))
  }
};

export default function UnitCatalog() {
  const [searchParams] = useSearchParams();
  const pathId = searchParams.get('path') || 'job-seeker';
  const path = pathData[pathId] || pathData['job-seeker'];

  return (
    <div className="container py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/paths" className="hover:text-primary transition-colors">学习路径</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{path.title}</span>
        </div>
        
        <Card className="bg-primary text-primary-foreground border-none rounded-2xl overflow-hidden shadow-xl">
          <CardHeader className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 border-none px-3 py-1">
                    Level {path.level}
                  </Badge>
                  <h1 className="text-3xl lg:text-4xl font-extrabold">{path.title}</h1>
                </div>
                <p className="text-xl font-medium text-white/80 uppercase tracking-widest">{path.englishTitle}</p>
                <p className="max-w-2xl text-white/70 leading-relaxed text-lg italic">
                  “{path.description}”
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm lg:min-w-[300px]">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-white/50 tracking-widest">适合人群</span>
                  <p className="font-semibold text-white/90">{path.target}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-white/50 tracking-widest">学习重点</span>
                  <p className="text-sm text-white/80">{path.focus}</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">单元列表</h2>
          <span className="text-sm text-muted-foreground font-medium">共 {path.units.length} 个单元</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {path.units.map((unit: any, index: number) => (
            <Link key={unit.id} to={`/units/${unit.id}`}>
              <Card className="h-full hover:shadow-md transition-all duration-200 border-border/50 group overflow-hidden flex flex-col">
                <CardHeader className="p-6 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {index + 1}
                    </div>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider py-0.5">
                      <Clock className="w-3 h-3 mr-1" /> {unit.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">{unit.title}</CardTitle>
                  <CardDescription className="font-medium text-primary/70">{unit.english}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {unit.focus.map((tag: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 bg-muted rounded text-[11px] font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-end text-primary font-bold text-sm">
                    进入学习 <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
