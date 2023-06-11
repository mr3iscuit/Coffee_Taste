import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from '../../../screens/favorite/Favorite';
import CoffeeDetail from '../../../screens/detail/CoffeeDetail';

const Fav = createNativeStackNavigator();

const FavoriteStack = () => {
    return (
        <Fav.Navigator screenOptions={{ headerShown: false }}>
            <Fav.Screen name='FavoriteScreen' component={Favorite} />
            <Fav.Screen name='CoffeeDetail' component={CoffeeDetail} />
        </Fav.Navigator>
    )
}

export default FavoriteStack