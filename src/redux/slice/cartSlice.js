import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state.find(item => item.id == action.payload.id)
            if(existingProduct){
                state=state.filter(item=>item.id!=action.payload.id)
                existingProduct.quantity+=1
                state.push(existingProduct)
                state=state
                alert("Quantity incresed!!")
                
            }else{
                state.push({...action.payload,quantity:1})
                alert("Successfully Added!!")
            }
        },
        removeFromCart:(state,action)=>{
            state=state.filter(item=>item.id!=action.payload)
            return state
        },
        emptyCart:(state,action)=>{
            state=[]
            return state
        },
        incQuantity: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload)
            state = state.filter(item => item.id != action.payload)
            existingProduct.quantity+=1
            state.push(existingProduct)
            state=state
        },
        decQuantity:(state,action)=>{
            const existingProduct = state.find(item => item.id == action.payload)
            if(existingProduct.quantity==1){
                state=state.filter(item=>item.id!=action.payload)
                return state
            }
            else{
                state = state.filter(item => item.id != action.payload)
                existingProduct.quantity-=1
                state.push(existingProduct)
                state=state
            }

        }
    }
})

export const {addToCart,removeFromCart,emptyCart,incQuantity,decQuantity}=cartSlice.actions
export default cartSlice.reducer