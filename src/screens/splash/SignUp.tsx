import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoffeeTaste from '../../components/CoffeeTaste'
import SignText from '../../components/SignText'
import TextField from '../../components/TextField'
import PasswordField from '../../components/PasswordField'
import TextButton from '../../components/TextButton'
import Button from '../../components/Button'

const SignUp = ({ navigation }: any) => {

    const signInScreen = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ImageBackground style={styles.backgroundImage}
            source={require('../../assets/coffe_background.jpg')}
            resizeMode='cover'>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <View style={styles.overlay} />
            <View style={styles.view1} >
                <CoffeeTaste />
                <SignText signText='Sign Up' text='Let’s create you an account.' />
            </View>
            <View style={styles.view2}>
                <TextField />
                <PasswordField label ={'PASSWORD'}/>
                <PasswordField label ={'RE-PASSWORD'}/>
            </View>
            <View style={{ marginTop: 14 }}>
                <TextButton title="Forgot password?" onPress={() => { }} />
            </View>
            <View style={styles.view3}>
                <Button title="Sign Up" onPress={{}} margin={18} />
                <View style={styles.signUp}>
                    <Text style={styles.text}>Do you have an account?  </Text>
                    <TextButton title="Sign In" onPress={signInScreen} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignUp

const styles = StyleSheet.create({
    view1: {
        marginTop: 62,
    },
    view2: {
        marginTop: 42,
        marginHorizontal: 116,
        gap: 20,
    },
    view3: {
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 33
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
    text: {
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
