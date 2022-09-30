import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    Button,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { useState } from 'react';
import { useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

var { width } = Dimensions.get('window');

export default function Banner() {
    const [BannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([
            'https://img.freepik.com/free-psd/online-shopping-with-laptop-mockup-template-shopping-elements_1150-38886.jpg?w=740&t=st=1649620293~exp=1649620893~hmac=5c9107ea2ea3ce12882a18e099701bde00f1786252d93ed6bfd1f73eb1404733',
            'https://img.freepik.com/free-psd/online-shopping-with-mobile-shopping-elements-mockup-template_1150-38858.jpg?w=740&t=st=1649620328~exp=1649620928~hmac=94235b42c77689d7b61f983bdb82f5dd9d16fb91c9e08dbda78b56ff443f08a4',
            'https://img.freepik.com/free-psd/blank-screen-smart-phone-computer-mockup-online-shop-concept_1150-39228.jpg?t=st=1649620352~exp=1649620952~hmac=cca3bd0f238edf83c96307a86ed0bff0b17d78cfa082ff215a6304b228a9e7cd&w=740',
        ]);
        return () => {
            setBannerData([]);
        };
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>

                    <Swiper
                        showButtons={false}
                        // autoplay={true}
                        // autoplayTimeout={4}
                        style={{
                            height: width / 2,
                        }}>
                        {BannerData.map(item => {


                            return (

                                <ImageBackground
                                    key={item}
                                    resizeMode="cover"
                                    // source={{ uri: item }}
                                    style={styles.banner}>
                                    <Text style={styles.text}>New Arrival</Text>
                                    <Text style={styles.saletext}>SUMMER SALE</Text>


                                </ImageBackground>




                            );
                        })}

                    </Swiper>
                    <View style={{ height: 20 }}></View>
                    {/* 
                    <TouchableOpacity>
                        <LinearGradient color={['#FFA985 ', '#FF5035',]}>
                            <Text>
                                SHOP NOW
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <Button
                        // style={{ backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`, }}
                        // onPress={onPressLearnMore}
                        title="Learn More"

                        accessibilityLabel="Learn more about this purple button"
                    /> */}

                </View>


            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    swiper: {
        width: width,
        marginTop: '5%',
        alignItems: 'center',
    },
    banner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 3,
        marginHorizontal: 20,
    },
    text: {
        color: "#2B2B2B",
        position: "absolute",
        left: wp(10),
        top: hp(5),
        fontWeight: "600",
        fontSize: 13,
        lineHeight: 14
    },
    saletext: {
        color: "#FF5035",
        fontWeight: "600",
        position: "absolute",
        left: wp(10),
        top: hp(7),
        fontSize: 18,
    }
});