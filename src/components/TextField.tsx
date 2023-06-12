import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import TextFieldTel from '../assets/Svgs/TextFieldTel';
import ProfileIcon from '../assets/Svgs/ProfileIcon';

const TextField = () => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>USER NAME</Text>
                <Text style={styles.requiredLabel}>*</Text>
            </View>
            <View style={styles.view}>
                <ProfileIcon style={styles.svg} />
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
        width: 17,
        height: 18,
        marginLeft:18,
        color: 'white',
       // backgroundColor: 'red'
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
