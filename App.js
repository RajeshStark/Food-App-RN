import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';

//MyImports
import EntryStack from './src/Navigation/Main/EntryStack';

enableScreens();

export default function App() {
  return (
    <NavigationContainer >
      <PaperProvider>
       <EntryStack/>
      </PaperProvider>
    </NavigationContainer>
  );
}