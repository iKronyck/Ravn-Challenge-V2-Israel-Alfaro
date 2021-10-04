/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {RouterApp} from '@router';
import {client} from '@graphql';

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <RouterApp />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
