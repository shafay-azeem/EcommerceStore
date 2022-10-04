import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

var { width } = Dimensions.get('window');

export default function Banner() {
  const [BannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      { uri: require('./images/3.jpg') },
      { uri: require('./images/2.jpg') },
      { uri: require('./images/1.jpg') },
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
            dotColor="#F8F0E3"
            activeDotColor="#FF5035"
            style={{
              height: width / 2,
            }}>
            {BannerData.map(item => {
              return (
                <ImageBackground
                  key={item}
                  resizeMode="cover"
                  source={item.uri}
                  style={styles.banner}>
                  <Text style={styles.text}>New Arrival</Text>
                  <Text style={styles.saletext}>SUMMER SALE</Text>

                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#FFA985', '#FF5035']}
                      style={styles.linearGradient}>
                      <Text style={styles.buttonText}>Shop Now</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </ImageBackground>
              );
            })}
          </Swiper>
        </View>
      </View>
    </ScrollView>
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
    color: '#2B2B2B',
    position: 'absolute',
    left: wp(10),
    top: hp(5),
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 14,
  },
  saletext: {
    color: '#FF5035',
    fontWeight: '600',
    position: 'absolute',
    left: wp(10),
    top: hp(7),
    fontSize: 18,
  },
  linearGradient: {
    //   flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5,
    width: wp(20),
    left: wp(10),
    top: hp(10),
    marginTop: hp(1),
    borderRadius: 3,
    // height: hp(4),
  },
  buttonText: {
    fontSize: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
    margin: 5,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  },
});
