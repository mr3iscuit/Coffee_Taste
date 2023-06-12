import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import HomeSearchIcon from '../assets/Svgs/HomeSearchIcon';
import HomeTFIcon from '../assets/Svgs/HomeTFIcon';


const SearchBar = () => {
    return (
        <View style = {{alignItems: 'center'}}>
            <View style={styles.container}>
                <View style={styles.view}>
                    <HomeSearchIcon style={styles.svg} />
                    <TextInput
                        style={styles.textField}
                        placeholder="Coffee shop, beer & wine..."
                        placeholderTextColor="#38312E"
                    />
                    <HomeTFIcon style={styles.svg} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // İki taraf arasındaki boşluğu sağlar
        paddingHorizontal: 10, // Sol ve sağ boşluk miktarını ayarlar
    },
    svg: {
        width: 22,
        height: 22,
        color: 'white',
    },
    container: {
        justifyContent: 'center',
        position: 'relative',
        width: 335,   // Güncellenen width
        height: 50,   // Güncellenen height
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#38312E',
    },
    textField: {
        fontFamily: 'Quicksand-Medium',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        color: '#55433CCC',
        textAlign: 'center'
    },
});

export default SearchBar;
