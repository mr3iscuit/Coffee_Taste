import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignText = ({ signText, text }: any) => {
    return (
        <View style = {styles.view}>
            <Text style={styles.t1}>{signText}</Text>
            <Text style={styles.t2}>{text}</Text>
        </View>
    )
}

export default SignText

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        alignItems: 'center',
        gap:7,
        width:310, 
        marginTop:43,
        marginBottom:31,
    },
    t1: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: '800',
        fontSize: 40,
        lineHeight: 49,
        letterSpacing: 1,
        color: 'white',
    },
    t2: {
        fontFamily: 'Quicksand-Medium',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.5,
        color: '#FFFFFFB3',
        textAlign: 'center'

    },
})