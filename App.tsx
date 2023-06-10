import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginStack from './src/navigation/stacks/LoginStack'


const App = () => {
  return (
    <NavigationContainer>
        <LoginStack />
        {/* <TabMain/> */}

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})