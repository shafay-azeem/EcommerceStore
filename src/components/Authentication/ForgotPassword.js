import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {forgotPassword} from '../../../Redux/Actions/UserAction';
var {width} = Dimensions.get('window');

export default function ForgotPassword({navigation}) {
  const {loading, error, message} = useSelector(state => state.forgotPassword);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const forGotPassword = () => {
    dispatch(forgotPassword(email));
  };
  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (message) {
      alert(message);
    }
  }, [alert, error, message]);

  return (
    <View style={styles.container}>
      <View style={styles.LoginHeader}>
        <Image
          source={require('../../assets/BottomTab/logo.png')}
          style={styles.img}
        />
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>

          <TouchableOpacity onPress={forGotPassword}>
            <LinearGradient
              colors={['#FFA985', '#FF5035']}
              style={styles.linearGradient}>
              <Text style={{color: '#fff', fontSize: 18}}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
    marginTop: width / 5,
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
    marginTop: 20,
  },
  img: {
    // width: width * 1 - 150,
    height: hp('20%'),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
