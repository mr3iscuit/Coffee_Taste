import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStack from '../LoginStack';
import TabMain from '../../TabMain';

const Start = createNativeStackNavigator();

const StartStack = () => {
    return (
        <Start.Navigator screenOptions={{ headerShown: false }}>
            <Start.Screen name='Login' component={LoginStack} />
            <Start.Screen name='TabMain' component={TabMain} />
        </Start.Navigator>
    )
}

export default StartStack