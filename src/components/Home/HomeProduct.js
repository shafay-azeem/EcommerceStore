import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ProductCard from '../Home/ProductCard';
var {width} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeProduct = ({products, navigation, wishlistData, cartData}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.productCard}>
          {products &&
            products.map(product => (
              <ProductCard
                key={product._id}
                products={product}
                navigation={navigation}
                wishlistData={wishlistData}
                cartData={cartData}
              />
            ))}
        </View>
      </View>
    </>
  );
};

export default HomeProduct;

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    marginBottom: width / 6 - 5,
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
