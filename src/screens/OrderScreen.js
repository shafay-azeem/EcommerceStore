import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Layout/Header';

const OrderScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}></Header>
      <Text>OrderScreen</Text>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
