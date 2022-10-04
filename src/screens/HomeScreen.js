import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Banner from '../components/Home/Banner'
import HomeProduct from '../components/Home/HomeProduct'


const HomeScreen = () => {
    return (
        <ScrollView>
            <View>
                <Banner></Banner>
                <HomeProduct></HomeProduct>
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})