import React from 'react'
import PostItem from './PostItem'
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getPosts,  PostItemType} from "../features/post/postSlice";




const Posts = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.post.posts)

    return (
        <div>
            <button
                onClick = {() => dispatch(getPosts())}
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>
            {posts?.map((post: PostItemType) => (
                <PostItem
                key={post.title}
                post={post}
                />
            ))}

        </div>
    )
}

export default Posts
