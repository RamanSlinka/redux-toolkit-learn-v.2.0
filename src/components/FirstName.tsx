import React from 'react'
import {useAppSelector} from "../hooks/redux";

const FirstName = () => {

    const name = useAppSelector((state) => state.user.firstName)

    return <div className='font-bold'>{name}</div>
}

export default FirstName
