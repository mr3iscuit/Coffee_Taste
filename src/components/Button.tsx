import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import ButtonArrow from '../assets/Svgs/ButtonArrow';

const Button = ({ title, onPress , margin }: any) => {
    return (<View>
        <TouchableOpacity style={[styles.button,margin && {margin}]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
            <View style={styles.arrowContainer}>
                <ButtonArrow />
            </View>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 272,
        height: 56,
        backgroundColor: '#55433C',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        fontFamily: 'Quicksand-SemiBold',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 38,
        flex: 1,
        textAlign: 'center',
        color: 'white'
    },
    arrowContainer: {
        width: 19,
        height: 18,
        marginRight: 16,
    },
});

export default Button;
