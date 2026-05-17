import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { 
  Library, 
  Search, 
  Copy, 
  Trash2, 
  Star, 
  Share2, 
  MessageSquare,
  Mail,
  Users,
  Presentation,
  ShieldAlert,
  ChevronRight,
  Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: '全部', icon: Library },
  { id: '面试', icon: MessageSquare },
  { id: '邮件', icon: Mail },
  { id: '会议', icon: Users },
  { id: '演示', icon: Presentation },
  { id: '管理', icon: ShieldAlert },
  { id: '我的常见错误', icon: ShieldAlert },
  { id: '词汇收藏', icon: Star },
];

export default function PhraseBank() {
  const [phrases, setPhrases] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('phraseBank') || '[]');
    setPhrases(saved);
  }, []);

  const handleDelete = (id: string) => {
    const updated = phrases.filter(p => p.id !== id);
    setPhrases(updated);
    localStorage.setItem('phraseBank', JSON.stringify(updated));
    toast.success('已从短语库删除');
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('已复制到剪贴板');
  };

  const toggleStar = (id: string) => {
    const updated = phrases.map(p => p.id === id ? { ...p, isStarred: !p.isStarred } : p);
    setPhrases(updated);
    localStorage.setItem('phraseBank', JSON.stringify(updated));
  };

  const filteredPhrases = phrases.filter(p => {
    const matchesCategory = activeCategory === '全部' || p.category === activeCategory;
    const matchesSearch = p.original?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.improved?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.meaning?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">我的短语库</h1>
          <p className="text-muted-foreground font-medium flex items-center gap-2">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">LocalStorage</Badge>
            面试、邮件、会议的好句子随时复习，面试前反复即读。
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="搜索短语、关键词..." 
            className="pl-10 rounded-full bg-muted/50 border-none focus-visible:ring-primary/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-8">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex p-1 bg-muted/50 rounded-2xl border">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant="ghost"
                size="sm"
                className={cn(
                  "rounded-xl px-4 h-9 text-xs font-bold transition-all whitespace-nowrap",
                  activeCategory === cat.id ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:bg-card/50"
                )}
                onClick={() => setActiveCategory(cat.id)}
              >
                <cat.icon className="w-3.5 h-3.5 mr-1.5" />
                {cat.id}
              </Button>
            ))}
          </div>
        </div>

        {/* Phrases List */}
        {filteredPhrases.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPhrases.map((phrase) => (
              <Card key={phrase.id} className="group rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                <CardHeader className="pb-3 border-b bg-muted/20">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-[10px] font-bold px-2 py-0">
                         {phrase.category}
                      </Badge>
                      {phrase.tags?.map((tag: string) => (
                        <span key={tag} className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">#{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => toggleStar(phrase.id)}>
                        <Star className={cn("w-4 h-4", phrase.isStarred ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground")} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-destructive" onClick={() => handleDelete(phrase.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col gap-6">
                  {phrase.original && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Original / Context</span>
                      <p className="text-sm font-medium text-muted-foreground italic">"{phrase.original}"</p>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                       Professional Expression <ChevronRight className="w-3 h-3" />
                    </span>
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 relative group/phrase">
                       <p className="text-base font-bold text-primary leading-relaxed pr-8">
                         {phrase.improved || phrase.original}
                       </p>
                       <Button 
                         variant="ghost" 
                         size="icon" 
                         className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover/phrase:opacity-100 transition-opacity"
                         onClick={() => handleCopy(phrase.improved || phrase.original)}
                       >
                         <Copy className="w-3.5 h-3.5" />
                       </Button>
                    </div>
                  </div>

                  {phrase.meaning && (
                    <div className="space-y-1 mt-auto">
                       <span className="text-[10px] font-bold text-accent uppercase tracking-widest">中文解释 / 备注</span>
                       <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                         {phrase.meaning}
                       </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t mt-2">
                     <span className="text-[10px] text-muted-foreground">{new Date(phrase.createdAt).toLocaleDateString()}</span>
                     <Button variant="ghost" size="sm" className="h-8 text-xs font-bold gap-1 rounded-full px-3" onClick={() => toast.info('分享功能暂未开放')}>
                        <Share2 className="w-3.5 h-3.5" /> 分享
                     </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
             <div className="w-20 h-20 rounded-3xl bg-muted/50 flex items-center justify-center mb-6">
                <Library className="w-10 h-10 text-muted-foreground/30" />
             </div>
             <h3 className="text-xl font-bold text-foreground mb-2">还没有收藏短语</h3>
             <p className="text-muted-foreground max-w-sm font-medium mb-8">
                完成单元学习或情景练习后，点击「保存到短语库」按钮，你的个人职场表达资产将在这里沉淀。
             </p>
             <div className="flex gap-4">
                <Button asChild variant="default" className="rounded-full px-6 font-bold">
                   <Link to="/practice">去情景练习</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6 font-bold">
                   <Link to="/rewriter">去语气改写</Link>
                </Button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
