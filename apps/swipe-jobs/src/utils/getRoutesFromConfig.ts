import { IPageConfig } from '../types/pageConfig';

export default function getRoutesFromConfig(
  configs: Array<IPageConfig>
): Array<IRoute> {
  const routes: Array<IRoute> = [];

  // Iterate over configs for each page
  configs.forEach((config: IPageConfig) => {
    // If settings are available, map to all available routes of that config
    if (config.settings) {
      config.routes.forEach((route) => {
        routes.push({
          ...route,
          settings: config.settings,
        });
      });
    }
  });

  return routes;
}
