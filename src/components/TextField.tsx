import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import TextFieldTel from '../assets/Svgs/TextFieldTel';

const TextField = () => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>PHONE NUMBER</Text>
                <Text style={styles.requiredLabel}>*</Text>
            </View>
            <View style={styles.view}>
                <TextFieldTel style={styles.svg} />
                <TextInput
                    style={styles.textField}
                    placeholderTextColor="#ffffff"
                />
            </View>
        </View>
        //<TextFieldTel />
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    svg: {
        width: 31,
        height: 30,
        marginLeft:14,
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
});

export default TextField;
