import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import WishListScreen from '../src/screens/WishListScreen';
import CartScreen from '../src/screens/CartScreen.js';
import ProfileScreen from '../src/screens/ProfileScreen.js';
import React from 'react';

import {Image, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../src/components/Layout/Loader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../src/components/Products/ProductDetails';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {getWishList} from '../Redux/Actions/ProductAction';

const Tab = createBottomTabNavigator();

function Tabs() {
  const {user, loading} = useSelector(state => state.user);
  const {wishlistData, error} = useSelector(state => state.wishList);
  const {cartData} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getWishList());
    // dispatch(getCart());
  }, [dispatch, error, wishlistData, cartData]);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <Tab.Navigator
            initialRouteName="Home2"
            screenOptions={{
              headerShown: false,
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: false,
            }}
            style={styles.bottomTabs}>
            <Tab.Screen
              name="Home2"
              component={SimpleScreen}
              options={({route}) => ({
                tabBarStyle: {display: Visibility(route)},
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/assets/BottomTab/home.png')}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? 'crimson' : 'black',
                      }}></Image>
                  </View>
                ),
              })}
            />
            <Tab.Screen
              name="Products"
              component={ProductScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/assets/BottomTab/categoris.png')}
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? 'crimson' : 'black',
                      }}></Image>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="wishlist"
              component={WishListScreen}
              options={{
                tabBarBadge: wishlistData?.length,
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/assets/BottomTab/whislist.png')}
                      style={{
                        width: 40,
                        height: 40,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? 'crimson' : 'black',
                      }}></Image>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="cart"
              component={CartScreen}
              options={{
                tabBarBadge: cartData?.length,
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/assets/BottomTab/Cart.png')}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? 'crimson' : 'black',
                      }}></Image>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/assets/BottomTab/profile.png')}
                      style={{
                        width: 40,
                        height: 40,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? 'crimson' : 'black',
                      }}></Image>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </>
      )}
    </>
  );
}

export default Tabs;

const SimpleScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const Visibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (routeName === 'ProductDetails') {
    return 'none';
  }
  if (routeName === 'Home') {
    return 'flex';
  }
};

const styles = StyleSheet.create({
  bottomTabs: {},
});
