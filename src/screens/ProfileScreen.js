import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Layout/Header';
import Profile from '../components/Profile/Profile.js';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}></Header>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Profile navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
