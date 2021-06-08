import React, { useState } from 'react';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import MainStack from './navigate'

const fonts = () => Font.loadAsync({
  'bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'light': require('./assets/fonts/Montserrat-Light.ttf')
})

export default function App() {
  const [font, setFont] = useState(false)

  if (font) {
    return (
      <MainStack />
    );
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    );
  }
}
