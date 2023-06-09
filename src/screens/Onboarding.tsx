import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoffeeTaste from '../components/CoffeeTaste'
import OnboardText from '../components/OnboardText'
import Button from '../components/Button'


const Onboarding = ({ navigation }: any) => {

    const nextScreen = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ImageBackground style={styles.backgroundImage}
            source={require('../assets/coffe_background.jpg')}
            resizeMode='cover'>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <CoffeeTaste />
            <OnboardText />
            <Button title="Get Started" onPress={nextScreen} />
        </ImageBackground>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})