import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Basket from '../../../screens/basket/Basket';
import CoffeeDetail from '../../../screens/detail/CoffeeDetail';

const BasketS = createNativeStackNavigator();

const BasketStack = () => {
    return (
        <BasketS.Navigator screenOptions={{ headerShown: false }}>
            <BasketS.Screen name='BasketeScreen' component={Basket} />
            <BasketS.Screen name='CoffeeDetail' component={CoffeeDetail} />
        </BasketS.Navigator>
    )
}

export default BasketStack