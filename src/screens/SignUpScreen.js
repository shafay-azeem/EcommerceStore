import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from "../components/Authentication/SignUp.js"

const SignUpScreen = ({ navigation }) => {
    return (
        <View>

            <SignUp navigation={navigation}></SignUp>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})