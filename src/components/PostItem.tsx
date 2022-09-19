import React, {FC} from 'react'
import {useAppDispatch} from "../hooks/redux";

const PostItem:FC<any> = ({post, deletePost}) => {

    const dispatch = useAppDispatch()
    return (
        <div
            onClick={() => dispatch(deletePost(post.id))}
            className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'>
            {post.title}
        </div>
    )
}

export default PostItem
