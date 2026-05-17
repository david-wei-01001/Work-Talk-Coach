import Home from './pages/Home';
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Lazy load other pages
const LearningPaths = lazy(() => import('./pages/LearningPaths'));
const UnitCatalog = lazy(() => import('./pages/UnitCatalog'));
const UnitLearning = lazy(() => import('./pages/UnitLearning'));
const ScenarioPractice = lazy(() => import('./pages/ScenarioPractice'));
const ToneRewriter = lazy(() => import('./pages/ToneRewriter'));
const PhraseBank = lazy(() => import('./pages/PhraseBank'));
const StudyPlan = lazy(() => import('./pages/StudyPlan'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/paths',
    element: <LearningPaths />,
  },
  {
    path: '/units',
    element: <UnitCatalog />,
  },
  {
    path: '/units/:id',
    element: <UnitLearning />,
  },
  {
    path: '/practice',
    element: <ScenarioPractice />,
  },
  {
    path: '/rewriter',
    element: <ToneRewriter />,
  },
  {
    path: '/phrase-bank',
    element: <PhraseBank />,
  },
  {
    path: '/study-plan',
    element: <StudyPlan />,
  },
];
