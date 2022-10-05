import axios from "axios";

export const userLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "userLoginRequest",
        });
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.post(`https://ecommercebackend-api.herokuapp.com/api/user/login`, { email, password }, config);

        dispatch({

            type: "userLoginSuccess",
            payload: data.user,

        });

    } catch (error) {
        dispatch({
            type: "userLoginFalse",
            payload: error.response.data.message
        });
    }

};

// Load User
export const loadUser = () => async dispatch => {
    try {
        dispatch({ type: 'userLoadRequest' });

        const { data } = await axios.get(
            `https://ecommercebackend-api.herokuapp.com/api/user/loggedinuser`,
        );

        dispatch({ type: 'userLoadSuccess', payload: data.user });
    } catch (error) {
        dispatch({ type: 'userLoadFailed', payload: error.response.data.message });
    }
};

