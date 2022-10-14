import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Layout/Header';
import Cart from '../components/Cart/Cart.js';

const CartScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}></Header>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 100}}>
        <Cart navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
