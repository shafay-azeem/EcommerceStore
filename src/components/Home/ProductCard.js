import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

var { width } = Dimensions.get('window')
const ProductCard = ({ products }) => {
    return (
        <View>
            <Text style={{ color: 'red' }}>{products.name}           </Text>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({})