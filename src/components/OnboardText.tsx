import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnboardText = () => {
    return (
        <View style = {styles.view}>
            <Text style={styles.t1}>Find your favorite</Text>
            <Text style={styles.t2}>Coffee Taste!</Text>
            <Text style={styles.t3}>We’re coffee shop, beer and wine bar,
                & event space for performing arts</Text>
        </View>
    )
}

export default OnboardText

const styles = StyleSheet.create({
    view:{
    display: 'flex',
    alignItems: 'center',
    gap:14,
    width:310, 
    marginTop:63,
    marginBottom:51,
    },
    t1: {
        fontFamily: 'Quicksand-Medium',
        fontWeight: '500',
        fontSize: 32,
        lineHeight: 38,
        color:'white',
    },
    t2: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: '800',
        fontSize: 40,
        lineHeight: 49,
        letterSpacing: 1,
        color:'white',
    },
    t3: {
        fontFamily: 'Quicksand-Medium',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.5,
        color: '#FFFFFFB3',
        textAlign: 'center'
    },
})