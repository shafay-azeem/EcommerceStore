import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Layout/Header';

import Order from '../../components/Order/Order';

export default function OrderScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <Order navigation={navigation}></Order>
    </View>
  );
}

const styles = StyleSheet.create({});
