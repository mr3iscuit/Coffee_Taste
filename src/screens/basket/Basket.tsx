import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';

const Basket = () => {
    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require('../../assets/coffe_background.jpg')}
            resizeMode='cover'
        >
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <View style={styles.overlay} />
            <View style={styles.container}>
                <Text style={styles.emptyBasketText}>Your basket is empty</Text>
            </View>
        </ImageBackground>
    );
};

export default Basket;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(5, 0, 0, 0.7)',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyBasketText: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: '500',
        fontSize: 32,
        color:'white',
    },
});
