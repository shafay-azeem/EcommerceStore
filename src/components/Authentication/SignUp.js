import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
var {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../../Redux/Actions/UserAction';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const {error, loading, isAuthenticated} = useSelector(state => state.user);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(
    'https://mern-nest-ecommerce.herokuapp.com/profile.png',
  );

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setAvatar(image.path);
    });
  };

  const registerUser = () => {
    dispatch(register(name, email, password, avatar));
    ToastAndroid.showWithGravity(
      'Register Successfully',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  // useEffect(() => {
  //   if (error) {
  //     ToastAndroid.showWithGravity(
  //       error,
  //       ToastAndroid.SHORT,
  //       ToastAndroid.BOTTOM,
  //     );
  //     dispatch({type: 'clearErrors'});
  //   }
  // }, [dispatch, error, isAuthenticated]);

  return (
    <View style={styles.container}>
      <View style={styles.LoginHeader}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            color: '#FF5035',
            textAlign: 'center',
          }}>
          Lets Get Started
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#4F4F4F',
            textAlign: 'center',
          }}>
          Sign up and we will continue
        </Text>
      </View>
      <View style={styles.LoginBox}>
        <View style={styles.relative}>
          <Icon name="person-circle-outline" size={25} style={styles.icon} />
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#4F4F4F"
            style={styles.inputBox}
            textContentType="name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.relative}>
          <Icon name="mail-open-outline" size={23} style={styles.icon} />
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#4F4F4F"
            style={styles.inputBox}
            textContentType="emailAddress"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
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
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon name="eye" size={23} color={'#000000'} />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#4F4F4F"
            style={styles.inputBox}
            textContentType="password"
            secureTextEntry={passwordVisible}
            value={password}
            onChangeText={setPassword}
          />

          <View style={styles.relative}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: avatar}}
                style={{
                  width: 40,
                  height: hp('5%'),
                  borderRadius: 60,
                  resizeMode: 'contain',
                  borderWidth: 1,
                  borderColor: '#4F4F4F',
                }}></Image>
              <TouchableOpacity onPress={uploadImage}>
                <View
                  style={{
                    marginLeft: 10,
                    height: hp('6%'),
                    width: width * 1 - 95,
                    backgroundColor: '#F3F3F3',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 9,
                  }}>
                  <Text style={{color: '#4F4F4F', fontSize: 15}}>
                    Upload Your Image
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              color: '#4F4F4F',
              fontSize: 14,
              marginTop: 60,
            }}
            // onPress={() => navigation.navigate("Forgot")}
          >
            ─────────── OR ───────────
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: width / hp('2%'),
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/BottomTab/Facebook.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={{margin: 10}}
                source={require('../../assets/BottomTab/Apple.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../../assets/BottomTab/Twitter.png')}></Image>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={registerUser}>
            <LinearGradient
              colors={['#FFA985', '#FF5035']}
              style={styles.linearGradient}>
              <Text style={{color: '#fff', fontSize: 18}}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: width / 9 - 30,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#4F4F4F',
              fontSize: 14,
            }}>
            Already Have any acount ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 14,
                color: '#FF5035',
                paddingRight: 15,
              }}>
              {' '}
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    padding: 20,
    backgroundColor: '#fff',
    height: width * 2,
  },
  LoginHeader: {
    paddingTop: width / hp('1%'),
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
  LoginBox: {
    marginTop: width / 6,
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    width: '100%',
    height: hp('6%'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('4%'),
  },
});
