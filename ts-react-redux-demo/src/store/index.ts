import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    }
})

//typeof is used to get the type of your variable using these types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;