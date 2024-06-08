import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProductThunk=createAsyncThunk('product/fetchProductThunk',async()=>{
    const resp= await axios.get('https://dummyjson.com/products')
    localStorage.setItem("products",JSON.stringify(resp.data.products))
    return resp.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        loading:false,
        product:[],
        error:"",
        productContainer:[],
        productPerPage:10,
        currentpage:1
    },
    reducers:{
        searchProduct:(state,action)=>{
            const products=state.productContainer.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
            state.product=products
        },
        onNavigateNext:(state)=>{
            state.currentpage++
        },
        onNavigatePrev:(state)=>{
            state.currentpage--
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductThunk.pending,(state,action)=>{
            state.loading=true
        }),
        builder.addCase(fetchProductThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.productContainer=action.payload
        }),
        builder.addCase(fetchProductThunk.rejected,(state,action)=>{
            state.loading=false
            state.product=[]
            state.error="api call failed!"
        })
    }
})
export const {searchProduct,onNavigateNext,onNavigatePrev}=productSlice.actions
export default productSlice.reducer