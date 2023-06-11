import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoffeeDetail from '../../../screens/detail/CoffeeDetail';
import Home from '../../../screens/home/Home';

const HomeS = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <HomeS.Navigator screenOptions={{headerShown: false}}>
            <HomeS.Screen name='HomeScreen' component={Home} />
            <HomeS.Screen name='CoffeeDetail' component={CoffeeDetail} />
        </HomeS.Navigator>
    )
}

export default HomeStack