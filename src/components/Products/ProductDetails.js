import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetails = ({route, navigation}) => {
  return (
    <View>
      <Text>{route.params?.item.name}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
