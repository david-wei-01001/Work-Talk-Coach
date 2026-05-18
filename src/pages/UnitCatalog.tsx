import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen, ChevronRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';
import { pathData } from '@/lib/data';

const pathColors: Record<string, string> = {
  'job-seeker': 'bg-blue-600',
  'newcomer': 'bg-green-600',
  'communicator': 'bg-teal-600',
  'manager': 'bg-orange-600',
};

const pathBarColors: Record<string, string> = {
  'job-seeker': 'bg-blue-500',
  'newcomer': 'bg-green-500',
  'communicator': 'bg-teal-500',
  'manager': 'bg-orange-500',
};

export default function UnitCatalog() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const pathId = searchParams.get('path') || 'job-seeker';
  const path = pathData[pathId] || pathData['job-seeker'];
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const barColor = pathBarColors[pathId] || 'bg-primary';

  useEffect(() => {
    const refreshProgress = () => {
      const saved = JSON.parse(localStorage.getItem('studyProgress') || '[]');
      setCompletedSteps(saved);
    };

    refreshProgress();
    
    // Also listen for storage events in case of multiple tabs
    window.addEventListener('storage', refreshProgress);
    return () => window.removeEventListener('storage', refreshProgress);
  }, [location.key]); // Refresh when location changes (e.g., navigating back)

  const pathUnits = path.units.map((u: any) => u.id);
  const completedInPath = pathUnits.filter((id: string) => completedSteps.includes(id)).length;
  const progress = Math.round((completedInPath / path.units.length) * 100);

  return (
    <div className="container py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/profile" className="hover:text-primary transition-colors">个人中心</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{path.title}</span>
        </div>
        
        <Card className="bg-primary text-primary-foreground border-none rounded-2xl overflow-hidden shadow-xl">
          <CardHeader className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4 flex-1">
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
                
                {/* Path Progress Bar */}
                <div className="mt-6 space-y-2 max-w-md">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/60">
                    <span>路径总进度</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-white/20" indicatorClassName={barColor} />
                </div>
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
          <span className="text-sm text-muted-foreground font-medium">已完成 {completedInPath} / {path.units.length}</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {path.units.map((unit: any, index: number) => {
            const isCompleted = completedSteps.includes(unit.id);
            const isFirstUnit = index === 0;
            const previousUnitCompleted = index > 0 && completedSteps.includes(path.units[index - 1].id);
            const isLocked = !isFirstUnit && !previousUnitCompleted && !isCompleted;

            const cardContent = (
              <Card className={cn(
                "h-full transition-all duration-200 group overflow-hidden flex flex-col border-2",
                isCompleted ? "border-green-100 bg-green-50/10" : "border-border/50",
                isLocked ? "opacity-60 grayscale-[0.5] cursor-not-allowed bg-muted/20" : "hover:shadow-md"
              )}>
                <CardHeader className="p-6 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                      isCompleted ? "bg-green-500 text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
                      isLocked ? "bg-muted text-muted-foreground" : ""
                    )}>
                      {isCompleted ? <CheckCircle className="w-6 h-6" /> : index + 1}
                    </div>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider py-0.5">
                      <Clock className="w-3 h-3 mr-1" /> {unit.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                    {unit.title}
                    {isCompleted && <span className="text-xs text-green-600 font-medium">(已完成)</span>}
                    {isLocked && <span className="text-xs text-muted-foreground font-medium">(未解锁)</span>}
                  </CardTitle>
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
                  <div className={cn(
                    "flex items-center justify-end font-bold text-sm",
                    isCompleted ? "text-green-600" : isLocked ? "text-muted-foreground" : "text-primary"
                  )}>
                    {isLocked ? "请先完成上一单元" : isCompleted ? "回顾单元" : "进入学习"} <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            );

            if (isLocked) {
              return <div key={unit.id}>{cardContent}</div>;
            }

            return (
              <Link key={unit.id} to={`/units/${unit.id}?path=${pathId}`}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
