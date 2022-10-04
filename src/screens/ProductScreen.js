import { StyleSheet, Text, View } from 'react-native'
import Header from "../components/Layout/Header"
import React from 'react'

const ProductScreen = ({ navigation }) => {
    return (
        <View>
            <Header navigation={navigation}></Header>
            <Text>ProductScreen</Text>
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({})