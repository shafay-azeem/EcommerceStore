import axios from 'axios';

// create Order
export const createOrder = order => async dispatch => {
  const paymentInfo = {
    id: '3132',
    status: 'succeeded',
  };
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
      paymentInfo,
      config,
    );
    dispatch({
      type: 'newOrderSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'newOrderFail',
      payload: error.response.data.message,
    });
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
