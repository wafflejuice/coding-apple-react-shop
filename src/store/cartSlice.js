import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name: 'stock',
    initialState: [
        { id: 1, name: 'White and Black', count: 2 },
        { id: 3, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        increase(state, action) {
            state.find((e) => { return e.id === action.payload }).count++
        },
        addItem(state, action) {
            state.unshift(action.payload)
        }
    }
})

export let { increase, addItem } = cart.actions

export default cart