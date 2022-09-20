import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export interface PostItemType {
    userId: number
    id: number
    title:string
    body: string
}
export interface Post {
    posts: Array<PostItemType>
}

const initialState: Post = {
    posts: []
}


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_, {rejectWithValue, dispatch}) => {

    const res = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(res.data))
})

export const removePostById = createAsyncThunk(
    'posts/removePostById',
    async (id: number, {rejectWithValue, dispatch}) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePost(id))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled.type]: () => console.log('getPosts: fulfilled'),
        [getPosts.pending.type]: () => console.log('getPosts: pending'),
        [getPosts.rejected.type]: () => console.log('getPosts: rejected') ,

        [removePostById.fulfilled.type]: () => console.log('removePostById: fulfilled'),
        [removePostById.pending.type]: () => console.log('removePostById: pending'),
        [removePostById.rejected.type]: () => console.log('removePostById: rejected')
    }
})

export const {setPosts, deletePost} = postSlice.actions
export default postSlice.reducer
