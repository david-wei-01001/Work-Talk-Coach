import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Rocket, TrendingUp, Users } from 'lucide-react';

const paths = [
  {
    id: 'job-seeker',
    title: '求职路径',
    englishTitle: 'Prepare for a Job',
    level: 'B1-B2',
    icon: Rocket,
    description: '适合在校生、应届生、转行求职者，重点训练求职申请、职位描述、面试回答和录用跟进。',
    focus: ['职位描述与招聘流程', '简历与求职信', '面试问答与跟进邮件', '录用与入职前沟通'],
    color: 'border-blue-200 hover:border-blue-400',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'newcomer',
    title: '职场新人路径',
    englishTitle: 'Start Your First Workplace Role',
    level: 'B1',
    icon: GraduationCap,
    description: '适合刚进入实习、第一份工作或外企环境的用户，训练入职、请教、周报、基础会议与邮件礼仪。',
    focus: ['入职与团队融入', '礼貌请求与确认', '工作汇报与邮件格式', '旁听会议与简短发言'],
    color: 'border-green-200 hover:border-green-400',
    iconBg: 'bg-green-50 text-green-600',
  },
  {
    id: 'communicator',
    title: '职场沟通进阶',
    englishTitle: 'Communicate Better at Work',
    level: 'B2',
    icon: TrendingUp,
    description: '适合已经可以基本沟通，希望表达更清楚、更专业、更有结构的人，包括跨部门协作、演示与棘手对话。',
    focus: ['会议主导与回应', '跨团队项目沟通', '客户邮件与电话', '演示与异议处理'],
    color: 'border-teal-200 hover:border-teal-400',
    iconBg: 'bg-teal-50 text-teal-600',
  },
  {
    id: 'manager',
    title: '管理者路径',
    englishTitle: 'Grow into a Manager',
    level: 'B2-C1',
    icon: Users,
    description: '适合 team lead、manager 或准备进入管理岗位的人，学习反馈、授权、绩效沟通与高层汇报。',
    focus: ['建设性反馈与批评', '授权与期望管理', '利益相关方更新', '战略/决策汇报'],
    color: 'border-orange-200 hover:border-orange-400',
    iconBg: 'bg-orange-50 text-orange-600',
  },
];

export default function LearningPaths() {
  return (
    <div className="container py-12 lg:py-20">
      <div className="flex flex-col items-start gap-4 mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">选择你当前的职业阶段</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          四条路径对应不同职场场景与语言难度（B1 → B2 → C1），每条路径含 6 个系统单元，助你达成职业目标。
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {paths.map((path) => (
          <Card key={path.id} className={cn("flex flex-col h-full transition-all duration-300 border-2 shadow-sm rounded-2xl", path.color)}>
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-4">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", path.iconBg)}>
                  <path.icon className="w-7 h-7" />
                </div>
                <Badge variant="secondary" className="font-semibold text-sm px-3 py-1">
                  Level {path.level}
                </Badge>
              </div>
              <div>
                <CardTitle className="text-2xl mb-1">{path.title}</CardTitle>
                <CardDescription className="text-lg font-medium text-primary/80 uppercase tracking-wide">
                  {path.englishTitle}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-6">
              <p className="text-muted-foreground leading-relaxed">
                {path.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-foreground/80 uppercase tracking-widest">包含模块</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {path.focus.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <Button asChild className="w-full h-12 rounded-xl text-base font-semibold" variant="default">
                  <Link to={`/units?path=${path.id}`} className="flex items-center justify-center gap-2">
                    进入路径目录 <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
