import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import withLazy from '@/helper/WithLazy';
const Dashboard = lazy(() => import('@/pages/Dashboard'));

const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: withLazy(Dashboard),
  },
];

export default rootRouter;
