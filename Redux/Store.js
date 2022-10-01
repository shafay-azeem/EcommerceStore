import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./Reducers/ProductReduer";

const Store = configureStore({
    reducer: {
        products: productsReducer
    }
})
export default Store