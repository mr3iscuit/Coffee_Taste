import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoffeeTasteIcon from '../assets/Svgs/CoffeeTasteIcon'

const CTLogo = () => {
    return (
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <CoffeeTasteIcon style={{ width: 50, height: 50, marginRight: 13 }} />
            <View>
                <Text style={styles.text}>COFFEE</Text>
                <Text style={styles.text}>TASTE!</Text>
            </View>
        </View>
    )
}

export default CTLogo

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Amaranth-Bold',
        fontSize: 13,
        lineHeight: 17,
        letterSpacing: 4,
        color: 'white',
    }
})