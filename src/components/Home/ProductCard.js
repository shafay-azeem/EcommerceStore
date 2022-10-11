import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

var {width} = Dimensions.get('window');
const ProductCard = ({products, navigation}) => {
  const [click, setClick] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('ProductDetails', {item: products})}>
      <View style={styles.ProductCard}>
        <Image source={{uri: products.images[0].url}} style={styles.image} />

        <Text
          style={{
            color: '#333',
            paddingVertical: 5,
            textAlign: 'center',
          }}>
          {products.name}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingBottom: 5,
            }}>
            <Text
              style={{
                color: '#333',
                paddingHorizontal: 10,
                fontSize: 16,
              }}>
              ${products.price - 10}
            </Text>
            <Text
              style={{
                color: '#555',
                textDecorationLine: 'line-through',
                marginLeft: -10,
                marginTop: -5,
                fontSize: 14,
              }}>
              {products.price.length > 0 ? '$' + products.price : null}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" color="#C68600" size={20}></Icon>
              <Text style={{color: '#333', paddingHorizontal: 5, fontSize: 16}}>
                ({products.numberOfReviews})
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          {click ? (
            <TouchableOpacity onPress={() => setClick(!click)}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="heart" color="#FF5035" size={18} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setClick(!click)}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="heart-outline" color="#FF5035" size={18} />
              </View>
            </TouchableOpacity>
          )}
          {products.Stock !== 0 ? (
            <TouchableOpacity>
              <Icon
                name="cart-outline"
                color="#4F4F4F"
                size={25}
                style={{
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {products.Stock === 0 ? (
          <View style={styles.outOfStock}>
            <Text style={{color: '#fff', fontSize: 11, textAlign: 'center'}}>
              Stock Limited
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ProductCard: {
    width: width / 2 - 30,
    height: width / 1.7,
    borderRadius: 3,
    // elevation: 8,
    backgroundColor: '#F3F3F3',
    flexWrap: 'wrap',
    margin: 10,
  },
  image: {
    width: '100%',
    height: width / 2 - 60,
    resizeMode: 'contain',
    borderTopRightRadius: 1,
    borderTopLeftRadius: 1,
  },
  outOfStock: {
    width: 50,
    height: 50,
    backgroundColor: 'crimson',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    left: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
