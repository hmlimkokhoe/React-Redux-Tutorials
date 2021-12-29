import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import {AppThunk} from '../../store/index'

export interface User {
    name: string,
    email: string,
    adress: string
}

export interface UsersState {
    loading: boolean,
    users: User[],
    error?: any
}

const initialState: UsersState = {
    loading: false,
    users: [],
    error: ""
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsersFetchRequest: (state, {payload}: PayloadAction<boolean>) => {
            state.loading = payload
        },
        setUsersFetchSuccessful: (state, {payload}: PayloadAction<User[]>) => {
            state.users = payload
        },
        setUsersFetchFailure: (state, {payload}: PayloadAction<string>) => {
            state.error = payload
        }
    }
});

export const { setUsersFetchRequest, setUsersFetchSuccessful, setUsersFetchFailure } = usersSlice.actions;

export default usersSlice.reducer;

export const usersSelector = (state: {usersStore: UsersState}) => state.usersStore;

//Async actions with thunk 'AppThunk' middleware

export const getUsers = (): AppThunk => {
    return async dispatch => {
        dispatch(setUsersFetchRequest(true))
        try {
            const url: string = "https://jsonplaceholder.typicode.com/users";
            const res = await axios.get(url);
        
            dispatch(setUsersFetchRequest(false));
            dispatch(setUsersFetchSuccessful(res.data));
        } catch (error: any) {
            dispatch(setUsersFetchFailure(error));
            dispatch(setUsersFetchRequest(false));
        }
    }
}