import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SignUp from '../components/Authentication/SignUp.js';

const SignUpScreen = ({navigation}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <SignUp navigation={navigation}></SignUp>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
