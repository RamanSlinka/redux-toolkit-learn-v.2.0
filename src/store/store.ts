import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../features/user/userSlice";
import {todoSlice} from "../features/todo/todoSlice";
import {postSlice} from "../features/post/postSlice";



export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        todo: todoSlice.reducer,
        post: postSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch