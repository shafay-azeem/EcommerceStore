import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import ProductCard from '../Home/ProductCard';
import {getWishList} from '../../../Redux/Actions/ProductAction';
import LinearGradient from 'react-native-linear-gradient';
var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;
const categories = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Personal',
  },
  {
    id: 3,
    name: 'cloth',
  },
  {
    id: 4,
    name: 'Ladies Cloth',
  },
  {
    id: 5,
    name: 'Gift',
  },
  {
    id: 6,
    name: 'Food',
  },
  {
    id: 7,
    name: 'Electronics',
  },
  {
    id: 8,
    name: 'Sports',
  },
];

const FilterProducts = ({navigation}) => {
  const {products} = useSelector(state => state.products);
  const {wishlistData} = useSelector(state => state.wishList);
  const [active, setActive] = useState('All');
  const [data, setData] = useState(products);

  const productsFilter = active => {
    if (active !== 'All') {
      setData([...products.filter(item => item.category === active)]);
    } else {
      setData(products);
    }
    setActive(active);
  };
  return (
    <View>
      <ScrollView
        style={{
          flexDirection: 'row',
          marginVertical: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {categories.map((i, index) => (
          <TouchableOpacity
            onPress={() => productsFilter(i.name)}
            style={[
              styles.name,
              active === i.name && styles.nameActive,
              {color: '#fff'},
            ]}
            key={index}>
            <Text style={{color: '#2B2B2B'}}>{i.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.productCard}>
        {data.length === 0 ? (
          <Text style={{color: '#000', marginTop: 100, fontSize: 16}}>
            No Products Found!
          </Text>
        ) : (
          <>
            {data &&
              data.map(product => (
                <ProductCard
                  key={product._id}
                  products={product}
                  navigation={navigation}
                  wishlistData={wishlistData}
                />
              ))}
          </>
        )}
      </View>
    </View>
  );
};

export default FilterProducts;
const styles = StyleSheet.create({
  name: {
    borderRadius: 3,
    backgroundColor: '#F3F3F3',
    marginHorizontal: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  nameActive: {
    backgroundColor: '#FF5035',
    color: 'white',
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
