import {StyleSheet, Image, View, Dimensions} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;

export default function Splash() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/BottomTab/logo.png')}
          style={styles.img}
        />
      </View>
      <LottieView
        source={require('../../assets/BottomTab/loader.json')}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width * 1 - 150,
    height: hp('20%'),
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loader: {
    position: 'absolute',
    bottom: hp('-18%'),
    justifyContent: 'center',
  },
});
