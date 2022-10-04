import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';

export default function DrawerItems(props) {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 20,
        margin: 0,
      }}>
      <Image
        source={require('../../assets/BottomTab/user.jpg')}
        style={{
          width: 60,
          height: 60,
          borderRadius: 120,
          marginLeft: 10,
        }}
      />
      <Text style={{color: '#333', fontSize: 16, paddingLeft: 10}}>
        Demo user
      </Text>

      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: 10,
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View>
        <Text style={{color: '#333', fontSize: 16, paddingLeft: 10}}>
          Log Out
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
