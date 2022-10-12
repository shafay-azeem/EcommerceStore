import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Layout/Header';
import Cart from '../components/Cart/Cart.js';

const CartScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}></Header>
      <Cart navigation={navigation} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
