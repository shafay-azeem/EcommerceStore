import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {updateProfile} from '../../../Redux/Actions/UserAction';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;

export default function UpdateAccount({navigation, route}) {
  const {user} = useSelector(state => state.user);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const passwordChangeHandler = () => {
    if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
      ToastAndroid.showWithGravity(
        `Please fill all the fields`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      if (oldPassword === newPassword) {
        ToastAndroid.showWithGravity(
          `New Password should be different from Old Password`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      } else {
        if (newPassword === confirmPassword) {
          const config = {headers: {'Content-Type': 'application/json'}};
          axios
            .put(
              `https://ecommercebackend-api.herokuapp.com/api/user/loggedinuser/update`,
              {
                oldPassword,
                newPassword,
                confirmPassword,
              },
              config,
            )
            .then(res => {
              ToastAndroid.showWithGravity(
                `Password Updated Successfully`,

                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                navigation.navigate('Home'),
              );
            });
        } else {
          ToastAndroid.showWithGravity(
            `Password Mismatch`,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
        }
      }
    }
  };

  const updateProfileHandler = () => {
    dispatch(updateProfile(name, email, avatar));
    navigation.navigate('Home');
    ToastAndroid.showWithGravity(
      `Profile Updated Successfully`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  useEffect(() => {
    if (name === '') {
      setName(user.name);
    }
    if (email === '') {
      setEmail(user.email);
    }
    if (avatar === '') {
      setAvatar(user.avatar.url);
    }
  }, []);

  return (
    <View>
      <View style={styles.updateProfileTop}>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <Icon name="arrow-back" color="#333" size={30} />
        </TouchableOpacity>
      </View>
      {route.params?.isProfile !== true ? (
        <UpdatePassword
          oldPassword={oldPassword}
          setOldPassword={setOldPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          passwordChangeHandler={passwordChangeHandler}
        />
      ) : (
        <UpdateProfile
          user={user}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          avatar={avatar}
          updateProfileHandler={updateProfileHandler}
          //   updateImage={updateImage}
        />
      )}
    </View>
  );
}

const UpdatePassword = ({
  oldPassword,
  setOldPassword,
  showPassword,
  setShowPassword,
  confirmPassword,
  setConfirmPassword,
  passwordChangeHandler,
  newPassword,
  setNewPassword,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.LoginHeader}>
        <Image
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: '15%',
            height: 100,
            width: 100,
          }}
          source={require('../../assets/BottomTab/Vector.png')}></Image>
      </View>
      <View style={styles.LoginBox}>
        <View style={styles.relative}>
          <Icon name="lock-closed-outline" size={23} style={styles.icon} />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 22,
              left: width - 80,
              zIndex: 10,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Icon name="eye" size={23} color={'#000000'} />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter your Old Password"
            placeholderTextColor={'#333'}
            style={styles.inputBox}
            textContentType="password"
            secureTextEntry={showPassword ? false : true}
            value={oldPassword}
            onChangeText={text => setOldPassword(text)}
          />
        </View>

        <View style={styles.relative}>
          <Icon name="lock-closed-outline" size={23} style={styles.icon} />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 22,
              left: width - 80,
              zIndex: 10,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Icon name="eye" size={23} color={'#000000'} />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter your new Password"
            style={styles.inputBox}
            textContentType="password"
            placeholderTextColor={'#333'}
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
            secureTextEntry={showPassword ? false : true}
          />
        </View>

        <View style={styles.relative}>
          <Icon name="lock-closed-outline" size={23} style={styles.icon} />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 22,
              left: width - 80,
              zIndex: 10,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Icon name="eye" size={23} color={'#000000'} />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter your Confirm Password"
            style={styles.inputBox}
            placeholderTextColor={'#333'}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry={showPassword ? false : true}
          />
        </View>

        <TouchableOpacity onPress={passwordChangeHandler}>
          <LinearGradient
            colors={['#FFA985', '#FF5035']}
            style={styles.linearGradient}>
            <Text style={{color: '#fff', fontSize: 18}}>Update Password</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const UpdateProfile = ({
  name,
  setName,
  email,
  setEmail,
  updateProfileHandler,
  user,
  updateImage,
  avatar,
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.LoginHeader}>
          <Image
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginBottom: '15%',
            }}
            source={require('../../assets/BottomTab/user.jpg')}></Image>
        </View>
        <View style={styles.LoginBox}>
          <View style={styles.relative}>
            <Icon name="person" size={23} style={styles.icon} />
            <TextInput
              placeholder={`${user.name}`}
              style={styles.inputBox}
              placeholderTextColor={'#333'}
              textContentType="name"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>

          <View style={styles.relative}>
            <Icon name="mail-open-outline" size={23} style={styles.icon} />

            <TextInput
              placeholder={`${user.email}`}
              style={styles.inputBox}
              placeholderTextColor={'#333'}
              textContentType="emailAddress"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <TouchableOpacity onPress={updateProfileHandler}>
            <LinearGradient
              colors={['#FFA985', '#FF5035']}
              style={styles.linearGradient}>
              <Text style={{color: '#fff', fontSize: 18}}>Update</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  updateProfileTop: {
    width: width * 1,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  inputMain: {
    width: width * 0.8,
    marginLeft: width * 0.1,
    marginVertical: 15,
    color: '#333',
    position: 'relative',
  },
  input: {
    borderColor: '#00000036',
    borderWidth: 1,
    height: 50,
    color: '#333',
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    width: width * 0.8,
    marginLeft: width * 0.1,
    marginVertical: 20,
    backgroundColor: '#3BB77E',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  inputBox: {
    borderRadius: 12,
    paddingLeft: 50,
    height: width / 8,
    fontSize: 15,
    color: '#333',
    marginVertical: 10,
    margin: 3,
    backgroundColor: '#F3F3F3',
  },
  container: {
    width: width * 1,
    padding: 20,
    backgroundColor: '#fff',
    height: width * 2,
  },
  LoginHeader: {
    paddingTop: width / 5,
  },
  inputBox: {
    borderRadius: 12,
    paddingLeft: 50,
    height: width / 8,
    fontSize: 15,
    color: '#333',
    marginVertical: 10,
    margin: 3,
    backgroundColor: '#F3F3F3',
  },
  relative: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',

    top: 22,
    left: 15,
    zIndex: 10,
    color: '#4F4F4F',
  },
  linearGradient: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
