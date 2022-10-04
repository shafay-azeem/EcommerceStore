import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../src/screens/HomeScreen';
import AuthScreen from '../src/screens/AuthScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';




const Main = () => {
    const Stack = createNativeStackNavigator()
    return (

        <Stack.Navigator initialRouteName="Auth" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home2" component={Tabs} />
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>

    )
}

export default Main

const styles = StyleSheet.create({})