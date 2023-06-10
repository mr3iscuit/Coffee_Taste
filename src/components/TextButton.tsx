import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextButton = ({ title, onPress }: any) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderBottomWidth: 0.5,
        borderColor: '#A97C37',
    },
    buttonText: {
        fontFamily: 'Quicksand-Medium',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.03,
        textAlign: 'center',
        color: '#A97C37',
    },
});

export default TextButton;
