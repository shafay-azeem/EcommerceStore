import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from './Tabs';
import ProductScreen from '../src/screens/ProductScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import CartScreen from '../src/screens/CartScreen';
import OrderScreen from '../src/screens/OrderScreen';
import WishListScreen from '../src/screens/WishListScreen';
import DrawerItems from '../src/components/Layout/DrawerItems';
import Icon from 'react-native-vector-icons/Ionicons';
import {max} from 'react-native-reanimated';

const Main = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'none',
        drawerActiveTintColor: '#FF5035',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
        drawerStyle: {
          width: '100%',
        },
      }}
      ///...props pass as object to DrawerItems Component
      drawerContent={props => <DrawerItems {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home-outline" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Products"
        component={ProductScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="grid-outline" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={WishListScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="heart-outline" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="cart-outline" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Orders"
        component={OrderScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="reader-outline" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="people-outline" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
