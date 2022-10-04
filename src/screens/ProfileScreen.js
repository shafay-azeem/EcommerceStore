import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'

const ProfileScreen = ({ navigation }) => {
    return (
        <View>

            <Header navigation={navigation}></Header>
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})