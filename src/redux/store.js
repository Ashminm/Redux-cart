import  {configureStore}  from "@reduxjs/toolkit";
import productReducer from './slice/productSlice'
import wishListReducer from './slice/wishlistSlice'
import cartReducer from './slice/cartSlice'

const store=configureStore({
    reducer:{
        productReducer,
        wishListReducer,
        cartReducer
    }

})
export default store