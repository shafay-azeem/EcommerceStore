import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;
import Swiper from 'react-native-swiper';
import {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const ProductDetails = ({route, navigation}) => {
  const [click, setClick] = useState(false);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.productDetailsTop}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="#2B2B2B" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.swiper}>
        <Swiper showButtons={true}>
          {route.params?.item.images.map(image => (
            <Image
              source={{uri: image.url}}
              style={styles.banner}
              key={image._id}
            />
          ))}
        </Swiper>
        {click ? (
          <Icon
            name="heart"
            size={30}
            style={{
              marginRight: 10,
              color: 'crimson',
              position: 'absolute',

              bottom: width / 1.9 - 5,
              right: 0,
            }}
            onPress={() => setClick(!click)}
          />
        ) : (
          <Icon
            name="heart-outline"
            size={30}
            style={{
              marginRight: 10,
              color: '#333',
              position: 'absolute',
              bottom: width / 1.9 - 5,
              right: 0,
            }}
            onPress={() => setClick(!click)}
          />
        )}
      </View>
      <View style={styles.details_box}>
        <View style={styles.details}>
          <View>
            <Text
              style={{
                color: '#2B2B2B',
                fontSize: 17,
                fontWeight: '600',
              }}>
              {route.params?.item.name}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: '#4F4F4F',
                fontSize: 15,
                fontWeight: '400',
                textDecorationLine: 'line-through',
                marginRight: 10,
                marginBottom: 10,
              }}>
              ${route.params?.item.price}
            </Text>

            <Text
              style={{
                color: '#4F4F4F',
                fontSize: 17,
                fontWeight: '600',
              }}>
              ${route.params?.item.price - 10}
            </Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text
            style={{
              color: '#2B2B2B',
              fontSize: 17,
              fontWeight: '600',
            }}>
            Description
          </Text>
          <Text
            style={{
              color: '#4F4F4F',
              fontSize: 14.5,
              fontWeight: '500',
              lineHeight: 20,
              paddingTop: 10,
            }}>
            {route.params?.item.description}
          </Text>
        </View>
        <View style={styles.quantity}>
          <LinearGradient
            colors={['#FFA985', '#FF5035']}
            style={styles.quantityBox}>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                fontWeight: '800',
              }}>
              -
            </Text>
          </LinearGradient>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#333',
                fontSize: 16,
              }}>
              1
            </Text>
          </View>
          <LinearGradient
            colors={['#FFA985', '#FF5035']}
            style={styles.quantityBox}>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                fontWeight: '800',
              }}>
              +
            </Text>
          </LinearGradient>
        </View>
        <View
          style={{
            width: width * 1 - 30,
            alignItems: 'center',
          }}>
          <LinearGradient
            colors={['#FFA985', '#FF5035']}
            style={styles.linearGradient}>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: '600',
                }}>
                Add to Cart
              </Text>
            </View>
          </LinearGradient>
          <View style={styles.reviews}>
            <Text
              style={{
                fontSize: 17,
                color: '#2B2B2B',
                fontWeight: '600',
              }}>
              Reviews
            </Text>
            {route.params?.item.reviews.length === 0 ? (
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  color: '#4F4F4F',
                }}>
                No reviews have yet...
              </Text>
            ) : (
              <View>
                {route.params?.item.reviews.map(i => (
                  <View
                    key={i._id}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      paddingVertical: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#333',
                        fontWeight: '700',
                        paddingLeft: 5,
                      }}>
                      {i.name}
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#555',
                          fontWeight: '600',
                          paddingLeft: 5,
                        }}>
                        {i.comment}
                      </Text>
                    </Text>
                    <Icon name="star" color="#C68600" size={18} />
                    <Text style={{color: '#333'}}>({i.rating})</Text>
                  </View>
                ))}
              </View>
            )}
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#2B2B2B',
                  fontWeight: '600',
                  paddingRight: 10,
                }}>
                Your Ratings*
              </Text>
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                height: 100,
              }}>
              <TextInput
                keyboardType="default"
                placeholder="Add your comment..."
                placeholderTextColor="#333"
                textAlignVertical="top"
                style={{
                  borderWidth: 1,
                  paddingLeft: 10,
                  color: '#333',
                  borderRadius: 5,
                  borderColor: '#0000002b',
                  height: '100%',
                }}
              />
            </View>
            <LinearGradient
              colors={['#FFA985', '#FF5035']}
              style={[styles.linearGradient, {alignSelf: 'center'}]}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: '600',
                  }}>
                  Submit
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: '#fff',
  },
  productDetailsTop: {
    width: width * 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: width / 6 - 20,
    paddingHorizontal: 10,
    elevation: 8,
    backgroundColor: '#fff',
  },
  banner: {
    width: width * 1,
    height: width / 2 - 20,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  swiper: {
    width: width * 1,
    height: width / 2,
    backgroundColor: '#fff',
    position: 'relative',
  },
  details_box: {
    // backgroundColor: '#e5e5e5',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    marginTop: 20,
    marginBottom: height / 8 - 60,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    flexDirection: 'column',
    paddingVertical: 10,
  },
  quantity: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  quantityBox: {
    width: 35,
    height: 35,
    backgroundColor: '#3BB77E',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  button: {
    width: '70%',
    backgroundColor: '#3BB77E',
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  // submitButton: {
  //   width: '70%',
  //   // backgroundColor: '#3BB77E',
  //   marginTop: 20,
  //   borderRadius: 10,
  //   paddingVertical: 15,
  //   textAlign: 'center',
  //   color: '#fff',
  //   fontSize: 18,
  //   fontWeight: '600',
  // },
  reviews: {
    marginTop: 10,
    width: width * 1,
    padding: 20,
  },
  linearGradient: {
    width: '70%',
    backgroundColor: '#3BB77E',
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
