import axios from "axios";

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: "allProductRequest",
        });
        const { data } = await axios.get('http://localhost:5000/api/ecommerce/products');
        dispatch({
            type: "allProductSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "allProductFail",
            payload: error.response.data.message,
        });
    }
};
