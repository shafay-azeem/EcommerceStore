import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ForgotPassword from '../components/Authentication/ForgotPassword';

export default function ForgotPasswordScreen({navigation}) {
  return (
    <View>
      <ForgotPassword navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
