import React from 'react'
import {useAppSelector} from "../hooks/redux";

const LastName = () => {
    const lastName = useAppSelector(state => state.user.lastName)
    return <div className='font-bold'>{lastName}</div>
}

export default LastName
