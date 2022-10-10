import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
var {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {userLogin} from '../../../Redux/Actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const {error, loading, isAuthenticated} = useSelector(state => state.user);

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = () => {
    dispatch(userLogin(email, password));
  };
  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (isAuthenticated) {
      alert('Welcome To Ecommerce!');
    }
  }, [dispatch, error, alert, isAuthenticated]);

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
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#4F4F4F',
            textAlign: 'center',
          }}>
          Enter your data to continue
        </Text>
      </View>
      <View style={styles.LoginBox}>
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

          <Text
            style={{
              textAlign: 'right',
              color: '#4F4F4F',
              fontSize: 14,
            }}
            onPress={() => navigation.navigate('Forgot')}>
            Forgot Password ?
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#4F4F4F',
              fontSize: 14,
              marginTop: 60,
            }}
            //onPress={() => navigation.navigate("Forgot")}
          >
            ─────────── OR ───────────
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: width / 5 - 30,
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

          <TouchableOpacity onPress={loginSubmit}>
            <LinearGradient
              colors={['#FFA985', '#FF5035']}
              style={styles.linearGradient}>
              <Text style={{color: '#fff', fontSize: 18}}>Sign In</Text>
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
            Don't have any account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: 14,
                color: '#FF5035',
                paddingRight: 15,
              }}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
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
  LoginBox: {
    marginTop: width / 4,
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
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
