import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const foundItem = state.items.find(item => item.id === action.payload.id);
            if (foundItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
                    ),
                    totalCost: state.totalCost + action.payload.cost
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, {...action.payload, quantity: 1}],
                    totalCost: state.totalCost + action.payload.cost
                };
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                totalCost: state.totalCost - (action.payload.cost * action.payload.quantity)
            };
        case 'INCREMENT':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
                ),
                totalCost: state.totalCost + action.payload.cost
            };
        case 'DECREMENT':
            const updatedItem = state.items.find(item => item.id === action.payload.id);
            if (updatedItem.quantity > 1) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item
                    ),
                    totalCost: state.totalCost - action.payload.cost
                };
            }
            // Если кол-во == 1, можно оставить как есть или удалить товар
            return state;
        default:
            return state;
    }
};



export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, { items: [], totalCost: 0 });

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
