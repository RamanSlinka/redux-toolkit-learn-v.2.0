import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../features/user/userSlice";
import {todoSlice} from "../features/todo/todoSlice";



export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        todo: todoSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch