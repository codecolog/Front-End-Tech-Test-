import { lazy } from 'react';
import { IPageConfig } from '../../../types/pageConfig';

const LoginConfig: IPageConfig = {
  settings: {
    showHeader: false,
  },
  routes: [
    {
      path: '/login',
      component: lazy(() => import('./Login')),
    },
  ],
};

export default LoginConfig;
