import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import WishListScreen from '../src/screens/WishListScreen'
import CartScreen from '../src/screens/CartScreen.js'
import ProfileScreen from '../src/screens/ProfileScreen.js'
import React from 'react'

import { Image, View, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false

            }}
            style={styles.bottomTabs}>
            <Tab.Screen
                name="Home2" component={HomeScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={{
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
                                }}>

                            </Image>

                        </View>
                    )
                }} />
            <Tab.Screen name="Products" component={ProductScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
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
                                }}>

                            </Image>

                        </View>
                    )
                }} />
            <Tab.Screen name="wishlist" component={WishListScreen}
                options={{
                    tabBarBadge: 1,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
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
                                }}>

                            </Image>

                        </View>
                    )
                }} />
            <Tab.Screen name="cart" component={CartScreen}
                options={{
                    tabBarBadge: 1,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
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
                                }}>

                            </Image>

                        </View>
                    )
                }} />
            <Tab.Screen name="profile" component={ProfileScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={{
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
                                }}>

                            </Image>

                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
}

export default Tabs


const styles = StyleSheet.create({
    bottomTabs: {

    }
})