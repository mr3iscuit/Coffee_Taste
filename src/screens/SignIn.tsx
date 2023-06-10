import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoffeeTaste from '../components/CoffeeTaste'
import SignText from '../components/SignText'
import TextField from '../components/TextField'
import PasswordField from '../components/PasswordField'
import TextButton from '../components/TextButton'
import Button from '../components/Button'

const SignIn = () => {
    return (
        <ImageBackground style={styles.backgroundImage}
            source={require('../assets/coffe_background.jpg')}
            resizeMode='cover'>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <View style={styles.overlay} />
            <View style={styles.view1} >
                <CoffeeTaste />
                <SignText signText='Sign In' text='We’ve already met!' />
            </View>
            <View style={styles.view2}>
                <TextField />
                <PasswordField />
            </View>
            <View style={styles.view3}>
                <TextButton title="Forgot password?" onPress={() => { }} />
                <Button title="Sign In" onPress={{}} />
                <View style={styles.signUp}>
                    <Text style={styles.text}>Don’t have an account?  </Text>
                    <TextButton title="Sign Up" onPress={() => {}} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignIn

const styles = StyleSheet.create({
    view1: {
        marginTop: 72,
    },
    view2: {
        marginTop: 72,
        marginbottom: 105,
        marginHorizontal: 116,
        gap: 23,
    },
    view3: {
        
        //backgroundColor : 'red'
    },
    signUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    text:{
        fontFamily: 'Quicksand-Medium',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.5,
        color: '#FFFFFFB3',
        textAlign: 'center'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(5, 0, 0, 0.7)',
    },
})
