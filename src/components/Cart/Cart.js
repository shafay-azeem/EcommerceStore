import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default function Cart({navigation}) {
  const {cartData} = useSelector(state => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
    color: '#333',
    paddingHorizontal: width * 0.05,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 22,
    color: '#333',
    fontWeight: '700',
  },
  quantityBox: {
    width: 35,
    height: 35,
    backgroundColor: '#3BB77E',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
