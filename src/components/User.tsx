import React, {ChangeEvent} from 'react'
import FirstName from './FirstName'
import LastName from './LastName'
import {setFirstName, setLastName} from "../features/user/userSlice";
import {useAppDispatch} from "../hooks/redux";

const User = () => {

    const dispatch = useAppDispatch()

    return (
        <div className='flex-column'>
            <input
                onChange={(e:ChangeEvent<HTMLInputElement>) =>
                    dispatch(setFirstName(e.currentTarget.value))}
                type='text'
                placeholder='First Name'
                className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    dispatch(setLastName(e.currentTarget.value))}
                type='text'
                placeholder='Second Name'
                className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <div className='flex gap-20 py-5'>
                <div className='flex flex-col'>
                    <div className='flex font-light'>First Name:</div>
                    <div className='flex'>
                        <FirstName />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex font-light'>Last Name:</div>
                    <div className='flex'>
                        <LastName />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
