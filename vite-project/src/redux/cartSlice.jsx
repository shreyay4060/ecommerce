import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers :{
        addToCart(state,action){
            state.push(action.payload);
        },
        deleteFromCart(state,action){
            return state.filter((item)=>item.id !== action.payload.id)
        },
        incrementItem(state,action){
            state = state.map((item)=>{
                if(item.id === action.payload){
                    item.quantity++;
                }
                return item;
            })
        },
        decrementItem(state,action){
            state = state.map((item)=>{
                if(item.id !== 1){
                    if(item.id === action.payload){
                        state.quantity--
                    }
                }
                return item;
            })
        }

    }
})

export const {addToCart , deleteFromCart , incrementItem , decrementItem} = cartSlice.actions;

export default cartSlice.reducer;