import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './login/LoginSlice';
import { coffeeSlice } from './coffee/CoffeeSlice';


export const store = configureStore({
    reducer: {
        login: loginReducer,
        coffee: coffeeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;