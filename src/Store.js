import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice';
import useReducer from './userSlice';

export const store=configureStore({
    reducer:{
        user:useReducer
    },
});