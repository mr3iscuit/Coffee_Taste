import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Visible from '../assets/Svgs/Visible';
import PasswordFieldIcon from '../assets/Svgs/PasswordFieldIcon';

const PasswordField = ({ label }: any) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{label}</Text>
                <Text style={styles.requiredLabel}>*</Text>
            </View>
            <View style={styles.view}>
                <PasswordFieldIcon style={styles.svg} />
                <TextInput
                    style={styles.textField}
                    placeholderTextColor="#ffffff"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={togglePasswordVisibility}>
                    <Visible />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    svg: {
        width: 31,
        height: 30,
        marginLeft: 14,
    },
    container: {
        justifyContent: 'center',
        position: 'relative',
        width: 330,
        height: 75,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#38312E',
    },
    textField: {
        flex: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#ffffff',
    },
    labelContainer: {
        position: 'absolute',
        flexDirection: 'row',
        top: -12,
        left: 8,
        paddingHorizontal: 4,
        zIndex: 1,
    },
    labelText: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 24,
        color: '#ffffff',
    },
    requiredLabel: {
        marginLeft: 4,
        fontSize: 12,
        lineHeight: 24,
        color: 'red',
    },
    button: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
});

export default PasswordField;
