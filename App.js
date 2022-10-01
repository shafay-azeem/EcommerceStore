import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Layout/Header'
import Banner from './src/components/Home/Banner'
import HomeScreen from './src/screens/HomeScreen'
import { Provider } from 'react-redux'
import Store from './Redux/Store'


export default function App() {
  return (
    <Provider store={Store}>
      <Header></Header>
      <HomeScreen></HomeScreen>
    </Provider>

  )
}

const styles = StyleSheet.create({})
