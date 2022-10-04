import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'

const CartScreen = ({ navigation }) => {
    return (
        <View>

            <Header navigation={navigation}></Header>
            <Text>CartScreen</Text>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})