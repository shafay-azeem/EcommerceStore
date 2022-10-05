import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { DrawerActions } from '@react-navigation/native';

export default function DrawerItems(props) {
  return (
    <ImageBackground
      source={require('../../assets/BottomTab/drawerBg.png')}
      style={{ flex: 1 }}>
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

        <Text style={{ color: '#333', fontSize: 16, paddingLeft: 10 }}>
          Demo user
        </Text>



        <DrawerContentScrollView {...props}>
          <View
            style={{
              paddingTop: 10,
            }}>
            <DrawerItemList {...props}
            />
          </View>
        </DrawerContentScrollView>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginBottom: 40 }}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/BottomTab/signout.png")}></Image>
          </TouchableOpacity>
          <Text style={{ color: '#333', fontSize: 16, paddingLeft: 10 }}>
            Sign Out
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
