import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { setLoggedIn } from '../../redux/login/LoginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { getAllcoffee } from '../../redux/coffee/CoffeeSlice';
import CTLogo from '../../components/CTLogo';

const Home = () => {

    const dispatch = useDispatch<AppDispatch>();

    const getCoffee = () => {
        dispatch(getAllcoffee());
    };

    useEffect(() => {
        getCoffee();
    }, []);

    const coffeeData = useSelector((state: RootState) => state.coffee.datas);

    const handleLogOut = () => {
        dispatch(setLoggedIn({ loggedIn: 'false', token: 'null' }));
    };

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View>
                <Image source={{ uri: item.imageURL }} style={{ width: 500, height: 500, backgroundColor: 'red' }} />
                <Text>{item.coffeeName}</Text>
            </View>
        );
    };

    return (
        <View>
            <CTLogo />

            {/* <FlatList
                data={coffeeData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            /> */}
            {/* <TouchableOpacity onPress={() => handleLogOut()}>
                <Text>Çıkış Yap</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
