import axios from 'axios';

// create Order
export const createOrder = order => async dispatch => {
  try {
    dispatch({
      type: 'newOrderRequest',
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {data} = await axios.post(
      `https://ecommercebackend-api.herokuapp.com/api/order/createorder`,
      order,
      config,
    );
    dispatch({
      type: 'newOrderSuccess',
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: 'newOrderFail',
      payload: error.response.data.message,
    });
    console.log(error.response.data.message);
  }
};

// get Order
export const getOrder = () => async dispatch => {
  try {
    dispatch({
      type: 'orderDataRequest',
    });
    const {data} = await axios.get(
      `https://ecommercebackend-api.herokuapp.com/api/order/getallorder`,
    );
    dispatch({
      type: 'orderDataSuccess',
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: 'orderDataFail',
      payload: error.response.data.error,
    });
  }
};
