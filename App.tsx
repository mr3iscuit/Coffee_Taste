import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginStack from './src/navigation/stacks/LoginStack'
import TabMain from './src/navigation/TabMain'
import StartStack from './src/navigation/stacks/start/StartStack'


const App = () => {
  return (
    <NavigationContainer>

      <StartStack />

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})