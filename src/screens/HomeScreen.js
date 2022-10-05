import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Banner from '../components/Home/Banner'
import HomeProduct from '../components/Home/HomeProduct'
import Header from "../components/Layout/Header"
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Redux/Actions/ProductAction'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var { width } = Dimensions.get('window');
const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const { products, error, loading } = useSelector(state =>
        state.products
    )

    useEffect(() => {

        if (error) {
            alert(error)
        }
        dispatch(getProduct())
    }, [dispatch])
    return (
        <>
            {loading ? (<Text>Loading</Text>)
                : (<View>

                    <Header navigation={navigation}></Header>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>


                        <Banner></Banner>
                        <HomeProduct products={products}></HomeProduct>

                    </ScrollView>

                </View>)}
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})