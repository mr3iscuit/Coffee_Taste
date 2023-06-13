import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import CoffeeTaste from '../../components/CoffeeTaste'
import SignText from '../../components/SignText'
import TextField from '../../components/TextField'
import PasswordField from '../../components/PasswordField'
import TextButton from '../../components/TextButton'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Controller, set } from 'react-hook-form';
import ProfileIcon from '../../assets/Svgs/ProfileIcon'
import Visible from '../../assets/Svgs/Visible'
import PasswordFieldIcon from '../../assets/Svgs/PasswordFieldIcon'


const SignUp = () => {

    const navigation = useNavigation<any>();
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const handleSecure = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = handleSubmit(data => {
        if (data.password !== data.confirmPassword) {
            setError('Passwords do not match');
        } else {
            axios
                .post('http://169.254.159.183:8080/api/register', {
                    username: data.username,
                    password: data.password,
                })
                .then(res => {
                    console.log(res.data);
                    if (!res.data.success) {
                        if (res.data.errors && res.data.errors.length > 0) {
                            const errorMsgs = res.data.errors.map((error: any) => error.msg);
                            setError(errorMsgs.join(', '));
                        } else {
                            setError(res.data.errors.msg);
                        }
                    }
                    console.log('sucess');
                    setError('');
                    navigation.navigate('SignIn');
                    // reset();
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });

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
                                    onChangeText={value => onChange(value)}
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
                                    onChangeText={value => onChange(value)}
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


                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.container5}>
                            <View style={styles.labelContainer5}>
                                <Text style={styles.labelText5}>RE-PASSWORD</Text>
                                <Text style={styles.requiredLabel5}>*</Text>
                            </View>
                            <View style={styles.view5}>
                                <PasswordFieldIcon style={styles.svg5} />
                                <TextInput
                                    style={styles.textField5}
                                    placeholderTextColor="#ffffff"
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    secureTextEntry={secureTextEntry}
                                />
                                <TouchableOpacity style={styles.button5} onPress={() => handleSecure()}>
                                    <Visible />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    name="confirmPassword"
                />


            </View>
            <View style={{ marginTop: 14 }}>
                <TextButton title="Forgot password?" onPress={() => { }} />
            </View>
            <View style={styles.view3}>
                <Button title="Sign Up" onPress={() => onSubmit()} margin={18} />
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
