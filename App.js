import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import { NavigationContainer } from '@react-navigation/native'
import Main from "./Navigations/Main"
import Auth from "./Navigations/Auth"



export default function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false)
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {isAuthenticated ? (<Main />) : (
          <Auth></Auth>
        )
        }
      </NavigationContainer>
    </Provider>

  )
}

const styles = StyleSheet.create({})
