import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Layout/Header';
import React from 'react';
import FilterProducts from '../components/Products/FilterProducts';

const ProductScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}></Header>
      <Text>ProductScreen</Text>
      <FilterProducts navigation={navigation} />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
