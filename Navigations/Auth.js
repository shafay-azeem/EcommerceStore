import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../src/screens/LoginScreen'
import SignUpScreen from '../src/screens/SignUpScreen'
const Auth = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='Signup' component={SignUpScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Auth

const styles = StyleSheet.create({})