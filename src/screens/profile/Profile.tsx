import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';
import { setLoggedIn } from '../../redux/login/LoginSlice';

const Profile = () => {

    const dispatch = useDispatch<AppDispatch>()

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
            <Image
                source={require('../../assets/CT_profilp.png')}
                style={styles.profileImage}
            />
            <Text style={styles.username}>Amil</Text>
            <TouchableOpacity style={styles.logOutButton} onPress={handleLogOut}>
                <Text style={styles.logOutButtonText}>Log Out</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default Profile;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(5, 0, 0, 0.7)',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 5,
    },
    username: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: '500',
        fontSize: 32,
        color:'white',
    },
    logOutButton: {
        backgroundColor: '#A97C37',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    logOutButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
