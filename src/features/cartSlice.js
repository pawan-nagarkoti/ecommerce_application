import { createSlice } from '@reduxjs/toolkit';
import product from '../ProductList';

const initialState = {
    product: product,
    cartItem: [],
    totalQuantity: 0,
    totalPrice: 0,
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartOption: (state, action) => {
            const find = state.cartItem.findIndex(item => item.id === action.payload);
            if (find >= 0) {
                state.cartItem[find].quality += 1;
            } else {
                const oneCartItemStored = product.filter(item => item.id === action.payload)
                state.cartItem.push(...oneCartItemStored)
            }
        },
        removeCartItem: (state, action) => {
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload)
        },

        getCartTotal: (state) => {
            // let { totalQuantity, totalPrice } = state.cart.reduce((cartTotal, cartItem) => {
            //     const { quantity, price } = cartItem;
            //     const itemTotal = price * quantity;
            //     cartTotal.totalPrice += itemTotal;
            //     cartTotal.totalQuantity += quantity;
            //     return cartTotal;
            // },
            //     {
            //         totalPrice: 0,
            //         totalQuantity: 0,
            //     }
            // )
            // state.totalPrice = parseInt(totalPrice.toFixed(2));
            // state.totalQuantity = totalQuantity;
        },

        increment: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
        },
        decrement: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
        }
    }
})

export const { addToCartOption, removeCartItem, totalCartData,getCartTotal, increment, decrement } = counterSlice.actions

export default counterSlice.reducer