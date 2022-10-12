import axios from 'axios';

export const getProduct = () => async dispatch => {
  try {
    dispatch({
      type: 'allProductRequest',
    });
    const {data} = await axios.get(
      'https://ecommercebackend-api.herokuapp.com/api/ecommerce/products',
    );

    dispatch({
      type: 'allProductSuccess',
      payload: data,
    });
  } catch (error) {
    console.log(error, 'eee');
    dispatch({
      type: 'allProductFail',
      payload: error,
    });
  }
};

// add to wishlist
export const addWishList =
  (
    productName,
    quantity,
    productImage,
    productPrice,
    userId,
    productId,
    stock,
  ) =>
  async dispatch => {
    try {
      dispatch({
        type: 'addWishListRequest',
      });
      console.log(
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        stock,
      );
      const {data} = await axios.post(
        'https://ecommercebackend-api.herokuapp.com/api/v2/addToWishlist',
        {
          productName,
          quantity,
          productImage,
          productPrice,
          userId,
          productId,
          stock,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch({
        type: 'addWishListSuccess',
        payload: data,
      });
    } catch (error) {
      console.log(error, 'error');
      dispatch({
        type: 'addWishListFail',
        payload: error.response.data.message,
      });
    }
  };

// remove from wishlist
export const removeWishList = id => async dispatch => {
  try {
    dispatch({
      type: 'removeWishListRequest',
    });
    const {data} = await axios.delete(
      `https://ecommercebackend-api.herokuapp.com/api/v2/removeWishlist/${id}`,
    );
    dispatch({
      type: 'removeWishListSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'removeWishListFail',
      payload: error.response.data.message,
    });
  }
};

// get wishlist data
export const getWishList = () => async dispatch => {
  try {
    dispatch({
      type: 'getWishListRequest',
    });
    const {data} = await axios.get(
      `https://ecommercebackend-api.herokuapp.com/api/v2/wishlist`,
    );
    dispatch({
      type: 'getWishListSuccess',
      payload: data.wishlistData,
    });
  } catch (error) {
    dispatch({
      type: 'getWishListFail',
      payload: error.response.data.message,
    });
  }
};
