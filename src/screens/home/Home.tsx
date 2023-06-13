import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, FlatList, ImageBackground, StatusBar, ScrollView } from 'react-native';
import { setLoggedIn } from '../../redux/login/LoginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { getAllcoffee } from '../../redux/coffee/CoffeeSlice';
import CTLogo from '../../components/CTLogo';
import HomeBar from '../../components/HomeBar';
import HiText from '../../components/HiText';
import SearchBar from '../../components/SearchBar'
import CoffeeCat from '../../components/CoffeeCat';
import BeerCat from '../../components/BeerCat';
import WineCat from '../../components/WineCat';
import WhiskeyCat from '../../components/WhiskeyCat';
import TextButton from '../../components/TextButton';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()

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

    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require('../../assets/coffe_background.jpg')}
            resizeMode='cover'
        >
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <View style={styles.overlay} />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ alignItems: 'center', marginBottom: 24 }}>
                    <CTLogo />
                    <HomeBar />
                </View>
                <HiText />
                <SearchBar />
                <View style={styles.categoryContainer}>
                    <CoffeeCat />
                    <BeerCat />
                    <WineCat />
                    <WhiskeyCat />
                </View>
                <FlatList
                    data={coffeeData}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.cardContainer}>
                            <Image style={styles.cardImage} source={{ uri: item.imageURL }} />
                            <Text style={styles.cardName}>{item.coffeeName}</Text>
                            <Text style={styles.cardPrice}>{item.price}</Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.rows}>
                    <Text style={styles.cardName}>Frozen Beverages</Text>
                    <TextButton title="See All" onPress={{}} />
                </View>
                <FlatList
                    data={coffeeData}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.cardContainerLarge}>
                            <View style={styles.cardContent}>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.cardName}>{item.coffeeName}</Text>
                                    <Text style={styles.cardPrice}>{item.price}</Text>
                                </View>
                                <Image style={styles.cardImageLarge} source={{ uri: item.imageURL }} />
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.rows}>
                    <Text style={styles.cardName}>Kava and Bottled Beverages</Text>
                    <TextButton title="See All" onPress={{}} />
                </View>
                <FlatList
                    data={coffeeData}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.cardContainerLarge}>
                            <View style={styles.cardContent}>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.cardName}>{item.coffeeName}</Text>
                                    <Text style={styles.cardPrice}>{item.price}</Text>
                                </View>
                                <Image style={styles.cardImageLarge} source={{ uri: item.imageURL }} />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </ImageBackground>
    );
};

export default Home;

const styles = StyleSheet.create({
    cardContainerLarge: {
        width: 190,
        height: 100,
        marginRight: 10,
        backgroundColor: '#272220',
        borderRadius: 12,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    cardInfo: {
        flex: 1,
    },
    cardImageLarge: {
        width: 45,
        height: 70,
        borderRadius: 10,
        marginLeft: 10,
    },
    rows: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical:12,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(5, 0, 0, 0.7)',
    },
    container: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15,
    },
    cardContainer: {
        width: 140,
        height: 170,
        marginRight: 10,
        backgroundColor: '#272220',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: 48,
        height: 70,
        borderRadius: 10,
    },
    cardName: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: '400',
        marginTop: 10,
        fontSize: 14,
        color: '#FFFFFF',
    },
    cardPrice: {
        marginTop: 5,
        fontSize: 12,
        color: '#A97C37',
    },
});
