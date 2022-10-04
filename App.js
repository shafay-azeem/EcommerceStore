import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import { NavigationContainer } from '@react-navigation/native'
import Main from "./Navigations/Main"



export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
      {/* <Header></Header>
      <HomeScreen></HomeScreen> */}
    </Provider>

  )
}

const styles = StyleSheet.create({})
