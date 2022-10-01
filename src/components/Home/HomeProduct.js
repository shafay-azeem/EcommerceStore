import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../Redux/Actions/ProductAction';
import ProductCard from "../Home/ProductCard"
var { width } = Dimensions.get('window');

const HomeProduct = () => {
    const dispatch = useDispatch();


    const { products, error, loading } = useSelector(state =>
        state.products
    )

    useEffect(() => {

        if (error) {
            alert(error)
        }
        dispatch(getProduct())
    }, [dispatch, error])

    console.log(products, 'kkkk')
    return (
        <>

            {loading ? <Text>Loading</Text> : (
                <View style={styles.container}>
                    <View style={styles.productCard}>
                        {products &&
                            products.map(product => (
                                <ProductCard
                                    key={product._id}
                                    products={product}
                                // navigation={navigation}
                                />
                            ))}
                    </View>
                </View>
            )}
        </>




    )
}

export default HomeProduct

const styles = StyleSheet.create({
    container: {
        width: width,
        padding: 10,
        marginVertical: 10,
        marginBottom: width / 6 - 5,
    },
    productCard: {
        width: width * 1 - 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
})