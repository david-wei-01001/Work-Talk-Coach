import { BrowserRouter, useRoutes, useLocation } from 'react-router-dom';
import { routes } from './routes';
import { Layout } from './components/layouts/Layout';
import { Suspense, useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        }>
          <AppRoutes />
        </Suspense>
      </Layout>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
