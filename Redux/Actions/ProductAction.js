import axios from "axios";

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: "allProductRequest",
        });
        const { data } = await axios.get('https://ecommercebackend-api.herokuapp.com/api/ecommerce/products');

        dispatch({

            type: "allProductSuccess",
            payload: data,

        });

    } catch (error) {
        console.log(error, 'eee')
        dispatch({
            type: "allProductFail",
            payload: error
        });
    }

};
