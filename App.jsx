import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootLayout from './app/_layout';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootLayout />
      </NavigationContainer>
    </PaperProvider>
  );
}
