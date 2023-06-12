import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import HomeLines from '../assets/Svgs/HomeLines';

const HomeBar = () => {
    return (
        <View style={styles.row}>
            <Image
                source={require('../assets/CT_profilp.png')}
                style={styles.image}
            />
            <HomeLines style={styles.svg} />
        </View>
    );
};

export default HomeBar;

const styles = StyleSheet.create({
    svg: {
        width: 25,
        height: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
    },
    image: {
        width: 45,
        height: 45,
    },
});
