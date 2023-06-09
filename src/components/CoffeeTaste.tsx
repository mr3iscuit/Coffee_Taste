import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoffeeTasteIcon from '../assets/Svgs/CoffeeTasteIcon'

const CoffeeTaste = () => {
    return (
        <View style = {{ alignItems: 'center' , }}>
            <CoffeeTasteIcon style={{ width: 52, height: 52 }} />
            <Text style={{ fontFamily: 'Amaranth-Bold', fontSize: 14, lineHeight: 17, letterSpacing: 4 }}>COFFEE TASTE!</Text>
        </View>
    )
}

export default CoffeeTaste

const styles = StyleSheet.create({})