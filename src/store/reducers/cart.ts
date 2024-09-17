import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
    items: Cardapio[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Cardapio>) => {
            //state.items.push(action.payload)
            const cardapio = state.items.find(item => item.id === action.payload.id)
                if(!cardapio){
                        state.items.push(action.payload)
                    }else {
                        alert('Este item já esta no carrinho')
                }
        },
        remover: (state, action: PayloadAction<number>) => {
           state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, open, close, remover } = cartSlice.actions
export default cartSlice.reducer