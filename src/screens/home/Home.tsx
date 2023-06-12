import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, FlatList, ImageBackground, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { setLoggedIn } from '../../redux/login/LoginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { getAllcoffee } from '../../redux/coffee/CoffeeSlice';
import CTLogo from '../../components/CTLogo';
import HomeBar from '../../components/HomeBar';
import HiText from '../../components/HiText';

const Home = () => {

    const dispatch = useDispatch<AppDispatch>();

    const getCoffee = () => {
        dispatch(getAllcoffee());
    };

    useEffect(() => {
        getCoffee();
    }, []);

    const coffeeData = useSelector((state: RootState) => state.coffee.datas);

    const handleLogOut = () => {
        dispatch(setLoggedIn({ loggedIn: 'false', token: 'null' }));
    };


    return (
        <ImageBackground style={styles.backgroundImage}
            source={require('../../assets/coffe_background.jpg')}
            resizeMode='cover'>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <View style={styles.overlay} />

            <View style={{ alignItems: 'center' }}>
                <CTLogo />
                <HomeBar />
            </View>
            <HiText />

        </ImageBackground>
    );
};

export default Home;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(5, 0, 0, 0.7)',
    },
});
