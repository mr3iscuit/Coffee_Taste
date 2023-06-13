import { ImageBackground, StatusBar, StyleSheet, Text, TextInput , TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CoffeeTaste from '../../components/CoffeeTaste'
import SignText from '../../components/SignText'
import TextField from '../../components/TextField'
import PasswordField from '../../components/PasswordField'
import TextButton from '../../components/TextButton'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux'
import { getLoggedIn, setLoggedIn } from '../../redux/login/LoginSlice'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import ProfileIcon from '../../assets/Svgs/ProfileIcon'
import { Controller } from 'react-hook-form';
import Visible from '../../assets/Svgs/Visible'
import PasswordFieldIcon from '../../assets/Svgs/PasswordFieldIcon'
import { useNavigation } from '@react-navigation/native'

const SignIn = () => {
    const navigation = useNavigation<any>();
    const [error, setError] = useState<string>('');
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

    const dispatch = useDispatch<AppDispatch>();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    useEffect(() => {
        dispatch(getLoggedIn());
    }, []);

    const handleSecure = () => {
        setSecureTextEntry(!secureTextEntry);
    };



    const onSubmit = handleSubmit(data => {
        axios
            .post('http://169.254.159.183:8080/api/login', {
                username: data.username,
                password: data.password,
            })
            .then(res => {
                if (res.data.success) {
                    dispatch(setLoggedIn({ loggedIn: 'true', token: res.data.token }));
                    reset();
                    setError('');
                
                } else {
                    setError(res.data.errors.msg);
                }
            })
            .catch(err => {
                console.log(err);
            });
    });





    // const startApp = () => {
    //     navigation.navigate('TabMain');
    // }

    const signUpScreen = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ImageBackground style={styles.backgroundImage}
            source={require('../../assets/coffe_background.jpg')}
            resizeMode='cover'>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <View style={styles.overlay} />
            <View style={styles.view1} >
                <CoffeeTaste />
                <SignText signText='Sign In' text='We’ve already met!' />
            </View>
            <View style={styles.view2}>


                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.container0}>
                            <View style={styles.labelContainer0}>
                                <Text style={styles.labelText0}>USER NAME</Text>
                                <Text style={styles.requiredLabel0}>*</Text>
                            </View>
                            <View style={styles.view0}>
                                <ProfileIcon style={styles.svg0} />
                                <TextInput
                                    style={styles.textField0}
                                    placeholderTextColor="#ffffff"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            </View>
                        </View>
                    )}
                    name="username"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.container5}>
                            <View style={styles.labelContainer5}>
                                <Text style={styles.labelText5}>'PASSWORD'</Text>
                                <Text style={styles.requiredLabel5}>*</Text>
                            </View>
                            <View style={styles.view5}>
                                <PasswordFieldIcon style={styles.svg5} />
                                <TextInput
                                    style={styles.textField5}
                                    placeholderTextColor="#ffffff"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry={secureTextEntry}
                                />
                                <TouchableOpacity style={styles.button5} onPress={() => handleSecure()}>
                                    <Visible />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    name="password"
                />

            </View>
            <View style={{ marginTop: 14 }}>
                <TextButton title="Forgot password?" onPress={() => { }} />
            </View>
            <View style={styles.view3}>
                <Button title="Sign In" onPress={onSubmit} margin={22} />
                <View style={styles.signUp}>
                    <Text style={styles.text}>Don’t have an account?  </Text>
                    <TextButton title="Sign Up" onPress={signUpScreen} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignIn

const styles = StyleSheet.create({
    view5: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    svg5: {
        width: 31,
        height: 30,
        marginLeft: 14,
    },
    container5: {
        justifyContent: 'center',
        position: 'relative',
        width: 330,
        height: 75,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#38312E',
    },
    textField5: {
        flex: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#ffffff',
    },
    labelContainer5: {
        position: 'absolute',
        flexDirection: 'row',
        top: -12,
        left: 8,
        paddingHorizontal: 4,
        zIndex: 1,
    },
    labelText5: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 24,
        color: '#ffffff',
    },
    requiredLabel5: {
        marginLeft: 4,
        fontSize: 12,
        lineHeight: 24,
        color: 'red',
    },
    button5: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    view0: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    svg0: {
        width: 17,
        height: 18,
        marginLeft: 18,
        color: 'white',
        // backgroundColor: 'red'
    },
    container0: {
        justifyContent: 'center',
        position: 'relative',
        width: 330,
        height: 75,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#38312E',
    },
    textField0: {
        flex: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#ffffff',
    },
    labelContainer0: {
        position: 'absolute',
        flexDirection: 'row',
        top: -12,
        left: 8,
        paddingHorizontal: 4,
        zIndex: 1,
    },
    labelText0: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 24,
        color: '#ffffff',
    },
    requiredLabel0: {
        marginLeft: 4,
        fontSize: 12,
        lineHeight: 24,
        color: 'red',
    },
    view1: {
        marginTop: 72,
    },
    view2: {
        marginTop: 72,
        marginHorizontal: 116,
        gap: 23,
    },
    view3: {
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 43
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
