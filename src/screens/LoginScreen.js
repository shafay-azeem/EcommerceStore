import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Login from "../components/Authentication/Login.js"


const LoginScreen = ({ navigation }) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <Login navigation={navigation}></Login>

        </ScrollView>
    )
}

export default LoginScreen