import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import Store from './Redux/Store';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Main from './Navigations/Main';
import Auth from './Navigations/Auth';
import {loadUser} from './Redux/Actions/UserAction';
import Splash from './src/components/Layout/Splash';

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  return (
    <Provider store={Store}>
      <AppStack></AppStack>
    </Provider>
  );
};

const AppStack = () => {
  const {isAuthenticated, user, loading} = useSelector(state => state.user);
  const navTheme = DefaultTheme;
  navTheme.colors.background = 'white';

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <NavigationContainer theme={navTheme}>
      <>
        {loading ? (
          <Splash />
        ) : (
          <>{isAuthenticated ? <Main></Main> : <Auth></Auth>}</>
        )}
      </>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({});
