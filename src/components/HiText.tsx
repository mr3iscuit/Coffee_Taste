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
        justifyContent: 'center',
        marginVertical: 18,
        marginLeft: 30,
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
