import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../components/Layout/Header';
import React from 'react';
import FilterProducts from '../components/Products/FilterProducts';

const ProductScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}></Header>
      <ScrollView
        style={{marginBottom: 60}}
        showsVerticalScrollIndicator={false}>
        <FilterProducts navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
