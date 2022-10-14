import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ToastAndroid,
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
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addCart,
  addWishList,
  getCart,
  removeWishList,
} from '../../../Redux/Actions/ProductAction';

const ProductDetails = ({route, navigation}) => {
  const [click, setClick] = useState(false);
  const {user} = useSelector(state => state.user);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(false);
  const [cartdata, setCartData] = useState();
  const [data, setData] = useState('');
  const {cartData} = useSelector(state => state.cart);

  const dispatch = useDispatch();
  // Add to WishList
  const wishListHandler = () => {
    setClick(true);
    dispatch(
      addWishList(
        route.params?.item.name,
        1,
        route.params?.item.images[0].url,
        route.params?.item.price,
        user._id,
        route.params?.item._id,
        route.params?.item.stock,
      ),
    );
    ToastAndroid.showWithGravity(
      `${route.params?.item.name} Added to wishlist`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  // addToCartHandler
  const addToCartHandler = async () => {
    await dispatch(
      addCart(
        route.params?.item.name,
        quantity,
        route.params?.item.images[0].url,
        route.params?.item.price,
        user._id,
        route.params?.item._id,
        route.params?.item.stock,
      ),
    );
    ToastAndroid.showWithGravity(
      `${route.params?.item.name} added to cart successfully`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  const cartAlreadyAdded = () => {
    ToastAndroid.showWithGravity(
      route.params?.item.stock === 0
        ? `${route.params?.item.name} out of stock`
        : `${route.params?.item.name} already have in cart`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  // Remove from wishlist
  const removeWishListData = data => {
    setClick(false);
    let id = data;
    dispatch(removeWishList(id));
    ToastAndroid.showWithGravity(
      `${route.params?.item.name} removed from wishlist`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  // decreaseQuantity handler
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // increaseQuantity handler
  const increaseQuantity = () => {
    if (route.params?.item.Stock - 1 < quantity) {
      ToastAndroid.showWithGravity(
        `${route.params?.item.name} out of stock`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      setQuantity(quantity + 1);
    }
  };

  // wishListDataProvider && CartDataProvider
  useEffect(() => {
    if (route.params?.wishlistData && route.params?.wishlistData.length > 0) {
      route.params?.wishlistData.map(data => {
        setData(data);
        if (data.productId === route.params?.item._id) {
          setClick(true);
        }
      });
    }
    if (cartData && cartData.length > 0) {
      cartData.map(data => {
        setCartData(data);
        if (data.productId === route.params?.item._id) {
          setCart(true);
        }
      });
    }
    dispatch(getCart());
  }, [route.params?.wishlistData, getCart, cartData]);
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
            onPress={() => removeWishListData(data._id)}
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
            onPress={wishListHandler}
          />
        )}
      </View>
      <View style={styles.details_box}>
        <View style={styles.details}>
          <View>
            <Text
              style={{
                color: '#2B2B2B',
                fontSize: 19,
                fontWeight: '600',
              }}>
              {route.params?.item.name}
            </Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text
              style={{
                color: '#4F4F4F',
                fontSize: 19,
                fontWeight: '600',
              }}>
              ${route.params?.item.price - 10}
            </Text>
            <Text
              style={{
                color: '#C00',
                fontSize: 13,
                fontWeight: '400',
                textDecorationLine: 'line-through',
                // marginRight: 10,
                // marginBottom: 10,
              }}>
              ${route.params?.item.price}
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
          <TouchableOpacity onPress={decreaseQuantity}>
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
          </TouchableOpacity>

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
              {quantity.toString()}
            </Text>
          </View>
          <TouchableOpacity onPress={increaseQuantity}>
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
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: width * 1 - 30,
            alignItems: 'center',
          }}>
          {cart === true || route.params?.item.stock === 0 ? (
            <TouchableOpacity
              onPress={cartAlreadyAdded}
              style={[
                styles.button,
                {
                  backgroundColor: '#000',
                },
              ]}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#fff',
                    fontWeight: '600',
                  }}>
                  Add to Cart
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={addToCartHandler}
              style={[
                styles.button,
                {
                  backgroundColor: '#3BB77E',
                },
              ]}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#fff',
                    fontWeight: '600',
                  }}>
                  Add to Cart
                </Text>
              </View>
            </TouchableOpacity>
          )}
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
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginBottom: 30,
              }}>
              <Text style={styles.submitButton}>Submit</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
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
            </TouchableOpacity> */}
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
  submitButton: {
    width: '70%',
    backgroundColor: '#3BB77E',
    marginTop: 20,
    borderRadius: 5,
    paddingVertical: 15,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
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
