import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/BottomTab/loader.json')}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
    justifyContent: 'center',
  },
});
