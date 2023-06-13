import React from 'react';
import { View, Text } from 'react-native';

const BeerCat = () => {
    return (
        <View style={{ marginLeft: 12, marginVertical: 15 }}>
            <View
                style={{
                    width: 86,
                    height: 32,
                    borderWidth: 2,
                    borderColor: '#55433C',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Quicksand-Bold',
                        fontSize: 14,
                        color: 'white'
                    }}
                >
                    🍺 Beer
                </Text>
            </View>
        </View>
    );
};

export default BeerCat;
