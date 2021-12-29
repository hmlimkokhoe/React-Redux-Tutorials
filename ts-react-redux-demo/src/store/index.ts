import {configureStore, Action} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { UsersState } from '../features/users/UsersSlice';
import usersSliceReducers from '../features/users/UsersSlice';

export const store = configureStore({
  reducer: {
    usersStore: usersSliceReducers,
  }
});

//typeof is used to get the type of your variable using these types
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, UsersState, unknown, Action>;

export default store;