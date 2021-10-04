export enum EAppRoutes {
  HOME_PEOPLES = 'HOME_PEOPLES',
  PEOPLE_INFORMATION = 'PEOPLE_INFORMATION',
}

export type TRouterApp = {
  [EAppRoutes.HOME_PEOPLES]: undefined;
  [EAppRoutes.PEOPLE_INFORMATION]: {personId: string};
};
