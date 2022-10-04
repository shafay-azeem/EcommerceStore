import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AuthScreen = ({ navigation }) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate("Home2")}>AuthScreen</Text>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({})