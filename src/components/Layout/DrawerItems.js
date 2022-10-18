import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DrawerActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logOutUser} from '../../../Redux/Actions/UserAction';

export default function DrawerItems(props) {
  const dispatch = useDispatch();
  const {user, error} = useSelector(state => state.user);
  const [name, setName] = useState('');

  useEffect(() => {
    getdetails();
  }, [getdetails]);

  function getdetails() {
    fetch(
      'https://ecommercebackend-api.herokuapp.com/api/user/loggedinuser',
    ).then(result => {
      result.json().then(resp => {
        setName(resp.user);
      });
    });
  }

  const logOut = () => {
    dispatch(logOutUser());
    if (error) {
      alert(error);
    }
    alert('Log Out Successfully');
  };
  return (
    <ImageBackground
      source={require('../../assets/BottomTab/drawerBg.png')}
      style={{flex: 1}}>
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
          {name.name}
        </Text>

        <DrawerContentScrollView {...props}>
          <View
            style={{
              paddingTop: 10,
            }}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>

        <TouchableOpacity onPress={logOut}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 25,
              marginBottom: 40,
            }}>
            <Image
              source={require('../../assets/BottomTab/signout.png')}></Image>

            <Text style={{color: '#333', fontSize: 16, paddingLeft: 10}}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
