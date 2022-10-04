import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var { width } = Dimensions.get('window');

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={35} color="#FF5035" />
        </TouchableOpacity>
        <TextInput
          placeholder="Find Your Products"
          placeholderTextColor="#4F4F4F"
          style={styles.searchBox}
        />
        <TouchableOpacity>
          <Icon
            name="search-outline"
            size={25}
            color="#4F4F4F"
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        <View style={styles.bellIcon}>
          <TouchableOpacity>
            <IconFontAwesome name="bell-o" size={20} color="#FF5035" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,

  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    width: width - 120,
    height: width / 7 - 15,
    backgroundColor: '#F3F3F3',
    marginHorizontal: 10,
    fontSize: 15,
    borderRadius: 3,
    color: '#333',
    paddingHorizontal: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: -15,
    right: 15,
  },
  bellIcon: {
    backgroundColor: '#F3F3F3',
    width: wp(12),
    height: width / 7 - 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
});
