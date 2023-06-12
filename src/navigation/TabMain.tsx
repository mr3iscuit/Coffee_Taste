import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stacks/HomeStack/HomeStack';
import FavoriteStack from './stacks/FavoriteStack/FavoriteStack';
import BasketStack from './stacks/BasketStack/BasketStack';
import Profile from '../screens/profile/Profile';
import HomeTabIcon from '../assets/Svgs/HomeTabIcon';
import FavoriteTabIcon from '../assets/Svgs/FavoriteTabIcon';
import BasketTabIcon from '../assets/Svgs/BasketTabIcon';
import ProfileTabIcon from '../assets/Svgs/ProfileTabIcon';

const Tab = createBottomTabNavigator();

const TabMain = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: 'rgba(85, 67, 60, 0.4)',
                        borderTopWidth: 0,
                        elevation: 0, // For Android
                        shadowOpacity: 0, // For iOS
                        height: '8%',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                    },
                    tabBarIcon: ({ color, focused }) => {
                        let iconComponent;
                        let iconSize = focused ? 30 : 24;

                        if (route.name === 'HomeStack') {
                            iconComponent = (
                                <View style={styles.tabIconContainer}>
                                    <HomeTabIcon
                                        width={iconSize}
                                        height={iconSize}
                                        fill={focused ? '#A97C37' : 'white'}
                                    />
                                </View>
                            );
                        } else if (route.name === 'FavoriteStack') {
                            iconComponent = (
                                <View style={styles.tabIconContainer}>
                                    <FavoriteTabIcon
                                        width={iconSize}
                                        height={iconSize}
                                        fill={focused ? '#A97C37' : 'white'}
                                    />
                                </View>
                            );
                        } else if (route.name === 'BasketStack') {
                            iconComponent = (
                                <View style={styles.tabIconContainer}>
                                    <BasketTabIcon
                                        width={iconSize}
                                        height={iconSize}
                                        fill={focused ? '#A97C37' : 'white'}
                                    />
                                </View>
                            );
                        } else if (route.name === 'Profile') {
                            iconComponent = (
                                <View style={styles.tabIconContainer}>
                                    <ProfileTabIcon
                                        width={iconSize}
                                        height={iconSize}
                                        fill={focused ? '#A97C37' : 'white'}
                                    />
                                </View>
                            );
                        }

                        return iconComponent;
                    },
                    tabBarActiveTintColor: '#A97C37',
                    tabBarInactiveTintColor: 'white',
                    tabBarShowLabel: false,
                    headerShown: false // Sadece ilk ekranın başlığını göster
                })}
            >
                <Tab.Screen name='HomeStack' component={HomeStack} />
                <Tab.Screen name='FavoriteStack' component={FavoriteStack} />
                <Tab.Screen name='BasketStack' component={BasketStack} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </View>
    );
};

export default TabMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
