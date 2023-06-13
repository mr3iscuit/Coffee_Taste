import React from 'react';
import { View, Text } from 'react-native';

const CoffeeCat = () => {
    return (
        <View style = {{marginLeft: 12 , marginVertical: 15}}>
            <View
            style={{
                width: 94,
                height: 32,
                backgroundColor: '#A97C37',
                borderRadius: 200,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 14,
                    color: 'white',
                }}
            >
                ☕️ Coffee
            </Text>
        </View>
        </View>
    );
};

export default CoffeeCat;
