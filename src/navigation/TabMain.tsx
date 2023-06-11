import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stacks/HomeStack/HomeStack';
import FavoriteStack from './stacks/FavoriteStack/FavoriteStack';
import BasketStack from './stacks/BasketStack/BasketStack';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

const TabMain = () => {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name='HomeStack' component={HomeStack} />
                <Tab.Screen name='FavoriteStack' component={FavoriteStack} />
                <Tab.Screen name='BasketStack' component={BasketStack} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </>
    )
}

export default TabMain

const styles = StyleSheet.create({})