import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../src/screens/HomeScreen';
import AuthScreen from '../src/screens/AuthScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './Tabs';
import ProductScreen from '../src/screens/ProductScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import CartScreen from '../src/screens/CartScreen';
import WishListScreen from '../src/screens/WishListScreen';




const Main = () => {
    // const Stack = createNativeStackNavigator()
    const Drawer = createDrawerNavigator();
    return (

        <Drawer.Navigator initialRouteName="Auth" screenOptions={{
            headerShown: false
        }}>
            <Drawer.Screen name="Home" component={Tabs} />
            <Drawer.Screen name="Products" component={ProductScreen} />
            <Drawer.Screen name="wishlist" component={WishListScreen} />
            <Drawer.Screen name="cart" component={CartScreen} />
            <Drawer.Screen name="profile" component={ProfileScreen} />

        </Drawer.Navigator>

    )
}

export default Main

const styles = StyleSheet.create({})