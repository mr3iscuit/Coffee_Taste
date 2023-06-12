import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StartStack from './src/navigation/stacks/start/StartStack'
import {Provider} from 'react-redux';
import { store } from './src/redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {

 //AsyncStorage.clear();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <StartStack />
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})