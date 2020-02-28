import * as React from 'react';
// import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeStack from './src/Navigation/HomeStack';
import { NavigationContainer } from '@react-navigation/native';

import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
    <PaperProvider>
      <HomeStack />
    </PaperProvider>
    </NavigationContainer>
  );
}

// AppRegistry.registerComponent('app', () => App);