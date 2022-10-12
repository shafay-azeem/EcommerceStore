import {configureStore} from '@reduxjs/toolkit';
import {
  productsReducer,
  wishListaddReducer,
  wishListDataReducer,
  wishListRemoveReducer,
} from './Reducers/ProductReduer';
import {forgotPasswordReducer, userReducer} from './Reducers/UserReducer';

const Store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    wishListRemove: wishListRemoveReducer,
    wishListAdd: wishListaddReducer,
    wishList: wishListDataReducer,
  },
});
export default Store;
