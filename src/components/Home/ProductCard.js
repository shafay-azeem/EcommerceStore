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
        <View style={styles.ProductCard}>
            <Image source={{ uri: products.images[0].url }} style={styles.image} />
            <Text>{products.name}</Text>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    ProductCard: {
        width: width / 2 - 30,
        height: width / 1.7,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: '#e5e5e5',
        flexWrap: 'wrap',
        margin: 10,
    },
    image: {
        width: '100%',
        height: width / 2 - 60,
        resizeMode: 'contain',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    outOfStock: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 50,
        position: 'absolute',
        top: -10,
        left: -10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})