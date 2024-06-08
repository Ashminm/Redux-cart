import { createSlice } from "@reduxjs/toolkit";

const wishSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWish:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                alert("product Alrady existing in wishlist!!")
            }
            else{
                state.push(action.payload)
                alert("Successfully Added!!")
            }
        },
        removeFromWishlist:(state,action)=>{
            const products=state.filter(item=>item.id!=action.payload)
            return products
        }
    }
})

export const {addToWish,removeFromWishlist}=wishSlice.actions
export default wishSlice.reducer