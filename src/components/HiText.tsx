import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HiText = ({ username }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hi, Amil</Text>
        </View>
    );
};

export default HiText;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
