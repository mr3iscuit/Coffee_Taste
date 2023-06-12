import { StyleSheet, Text, View, Image , TouchableOpacity } from 'react-native'
import React from 'react'
import { setLoggedIn } from '../../redux/login/LoginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';


const Home = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleLogOut = () => {
        dispatch(setLoggedIn({ loggedIn: 'false', token: 'null' }));
    };

    return (
        <View style={{ width: 50, height: 50 }}>
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/93cf/abfb/b05020081bf0b502ef47e2928e160cec?Expires=1687132800&Signature=HtZ2MYHU1NI-texfJEGQIXzt5FdMeb2n0pH~u9SKOmla6pSy62bjtzdf6wklnXpNygcMrTziymBFETmO15S93yqhNA622agVEmYs6vkomBgCTAsBgmdkkjrcKYzEn3xV1YT4Wo7GkjceVTgL6WWe3juFuKOF-5mUVhORBlMB5V-0s1LJwq5joldJkjy3Sc6VGnTgPnael-XwNGI268Qk5sqOKddJ1juHv8p0Tki96UgcmOi~zWVGxASyakldjOFl~KoP36VPkHllMNYfIH7xrkLVOgfCzzDpx5Tg5jDSsjpaXGhonFKviUsEI~jnBwIEYjkilmCsjgdPBfTWSazWIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                style={{ flex: 1, resizeMode: 'contain' }}
            />

            <TouchableOpacity
                onPress={() => handleLogOut()}>
                <Text> Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})