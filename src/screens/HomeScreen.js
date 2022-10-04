import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Banner from '../components/Home/Banner'
import HomeProduct from '../components/Home/HomeProduct'
import Header from "../components/Layout/Header"


const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>

            <Header navigation={navigation}></Header>

            <Banner></Banner>
            <HomeProduct></HomeProduct>

        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})