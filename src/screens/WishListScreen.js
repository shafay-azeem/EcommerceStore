import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Layout/Header';
import Wishlist from '../components/Wishlist/Wishlist.js';

const WishListScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}></Header>
      <Wishlist navigation={navigation}></Wishlist>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({});
