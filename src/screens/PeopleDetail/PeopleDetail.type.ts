import {StackScreenProps} from '@react-navigation/stack';
import {EAppRoutes, TRouterApp} from '../../router/RouterApp/RouterApp.type';

export type TPeopleDetailScreen = StackScreenProps<
  TRouterApp,
  EAppRoutes.PEOPLE_INFORMATION
>;
