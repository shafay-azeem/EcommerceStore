import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Layout/Header';

export default function OrderScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
