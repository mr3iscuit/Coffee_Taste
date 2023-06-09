import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoffeeTaste from '../components/CoffeeTaste'
import OnboardText from '../components/OnboardText'
import Button from '../components/Button'


const Onboarding = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <ImageBackground style={styles.backgroundImage}
                source={require('../assets/coffe_background.png')}
                resizeMode='cover'
            >
                <CoffeeTaste />
                <OnboardText />
                <Button title="Get Started" onPress={() => { }} />
            </ImageBackground>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})