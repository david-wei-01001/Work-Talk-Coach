import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, User as UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { pathData } from '@/lib/data';
import { toast } from 'sonner';


const pathStyles: Record<string, any> = {
  'job-seeker': {
    color: 'border-blue-200 hover:border-blue-400',
    iconBg: 'bg-blue-50 text-blue-600',
    barColor: 'bg-blue-500',
  },
  'newcomer': {
    color: 'border-green-200 hover:border-green-400',
    iconBg: 'bg-green-50 text-green-600',
    barColor: 'bg-green-500',
  },
  'communicator': {
    color: 'border-teal-200 hover:border-teal-400',
    iconBg: 'bg-teal-50 text-teal-600',
    barColor: 'bg-teal-500',
  },
  'manager': {
    color: 'border-orange-200 hover:border-orange-400',
    iconBg: 'bg-orange-50 text-orange-600',
    barColor: 'bg-orange-500',
  },
};

export default function Profile() {
  const location = useLocation();
  const paths = Object.values(pathData);
  const [userProgress, setUserProgress] = useState<Record<string, number>>({
    'job-seeker': 0,
    'newcomer': 0,
    'communicator': 0,
    'manager': 0,
  });

  const refreshProgress = () => {
    const completedSteps = JSON.parse(localStorage.getItem('studyProgress') || '[]');
    
    const calculateProgress = (pathId: string) => {
      const units = pathData[pathId].units.map((u: any) => u.id);
      const completedInPath = units.filter((id: string) => completedSteps.includes(id)).length;
      return Math.min(Math.round((completedInPath / units.length) * 100), 100);
    };

    setUserProgress({
      'job-seeker': calculateProgress('job-seeker'),
      'newcomer': calculateProgress('newcomer'),
      'communicator': calculateProgress('communicator'),
      'manager': calculateProgress('manager'),
    });
  };

  useEffect(() => {
    refreshProgress();
    window.addEventListener('storage', refreshProgress);
    return () => window.removeEventListener('storage', refreshProgress);
  }, [location.key]);

  const handleResetPath = (pathId: string) => {
    const unitsToReset = pathData[pathId].units.map((u: any) => u.id);
    const completedSteps = JSON.parse(localStorage.getItem('studyProgress') || '[]');
    const updated = completedSteps.filter((id: string) => !unitsToReset.includes(id));
    localStorage.setItem('studyProgress', JSON.stringify(updated));
    refreshProgress();
    toast.success(`已重置 ${pathData[pathId].title} 路径进度`);
  };

  return (
    <div className="container py-12 lg:py-20">
      {/* User Info Section */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background shadow-xl flex items-center justify-center mb-4">
          <UserIcon className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-primary">学习者</h2>
        <p className="text-muted-foreground">职场沟通能力提升中</p>
      </div>

      <div className="flex flex-col items-start gap-4 mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-primary">选择你当前的职业阶段</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          四条路径对应不同职场场景与语言难度（B1 → B2 → C1），每条路径含 6 个系统单元，助你达成职业目标。
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {paths.map((path: any) => {
          const style = pathStyles[path.id];
          return (
            <Card key={path.id} className={cn("flex flex-col h-full transition-all duration-300 border-2 shadow-sm rounded-2xl bg-card hover:shadow-md", style.color)}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", style.iconBg)}>
                    <path.icon className="w-7 h-7" />
                  </div>
                  <Badge variant="outline" className="font-semibold text-sm px-3 py-1 border-accent text-accent">
                    Level {path.level}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-2xl mb-1 text-primary">{path.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-accent uppercase tracking-wide">
                    {path.englishTitle}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-6">
                <p className="text-muted-foreground leading-relaxed">
                  {path.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">包含模块</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {path.focus}
                    </li>
                  </ul>
                </div>

                {/* Progress Bar Section */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    <span>学习进度</span>
                    <span>{userProgress[path.id]}%</span>
                  </div>
                  <Progress value={userProgress[path.id]} className="h-2 bg-muted" indicatorClassName={style.barColor} />
                </div>

                <div className="mt-auto pt-6 flex flex-col gap-3">
                  <Button asChild className="w-full h-12 rounded-xl text-base font-semibold shadow-sm" variant={userProgress[path.id] === 100 ? "outline" : "default"}>
                    <Link to={`/units?path=${path.id}`} className="flex items-center justify-center gap-2">
                      {userProgress[path.id] === 100 ? "回顾路径目录" : "进入路径目录"} <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  
                  {userProgress[path.id] === 100 && (
                    <Button 
                      variant="ghost" 
                      className="w-full h-10 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive transition-colors"
                      onClick={() => handleResetPath(path.id)}
                    >
                      重新学习该路径
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
