import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import JobDetailsConfig from '../app/pages/job-details/JobDetailsConfig';
import LoginConfig from '../app/pages/login/LoginConfig';
import { IPageConfig } from '../types/pageConfig';
import getRoutesFromConfig from '../utils/getRoutesFromConfig';

const routeConfigs: Array<IPageConfig> = [JobDetailsConfig, LoginConfig];

const routes: Array<IRoute> = [
  ...getRoutesFromConfig(routeConfigs),
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/job-details" />,
  },
];

export default routes;
