import { ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  User,
  BookOpen,
  MessageSquare,
  RefreshCw,
  Library,
  Menu,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { name: '首页', path: '/', icon: Home },
  { name: '个人中心', path: '/profile', icon: User },
  { name: '情景练习', path: '/practice', icon: MessageSquare },
  { name: '语气改写', path: '/rewriter', icon: RefreshCw },
  { name: '我的短语库', path: '/phrase-bank', icon: Library },
];

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="rounded-lg bg-primary p-1.5 text-primary-foreground">
              <BookOpen className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">
              WorkTalk <span className="text-accent">Coach</span>
            </span>
            <span className="hidden text-sm font-medium text-muted-foreground md:inline-block ml-2 border-l pl-2">
              职场沟通教练
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted",
                    isActive
                      ? "text-primary bg-muted/50"
                      : "text-muted-foreground hover:text-foreground"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 px-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold text-primary">WorkTalk Coach</span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-all",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )
                        }
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for Chinese-speaking professionals. Turn business English into real workplace communication skills.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2026 WorkTalk Coach.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
