import { lazy } from 'react';
import { IPageConfig } from '../../../types/pageConfig';

const JobDetailsConfig: IPageConfig = {
  settings: {
    showHeader: true,
  },
  routes: [
    {
      path: '/job-details',
      component: lazy(() => import('./JobDetails')),
      showInNavbar: true,
      name: 'Job Details',
    },
  ],
};

export default JobDetailsConfig;
