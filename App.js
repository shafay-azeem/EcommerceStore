import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Layout/Header'
import Banner from './src/components/Home/Banner'


export default function App() {
  return (
    <View>
      <Header></Header>
      <Banner></Banner>
    </View>
  )
}

const styles = StyleSheet.create({})
