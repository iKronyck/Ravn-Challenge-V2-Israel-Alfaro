import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EAppRoutes, TRouterApp} from './RouterApp.type';
import {Home, PeopleDetail} from '@screens';

const Stack = createNativeStackNavigator<TRouterApp>();

export const RouterApp = () => (
  <Stack.Navigator
    initialRouteName={EAppRoutes.HOME_PEOPLES}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={EAppRoutes.HOME_PEOPLES} component={Home} />
    <Stack.Screen
      name={EAppRoutes.PEOPLE_INFORMATION}
      component={PeopleDetail}
    />
  </Stack.Navigator>
);
