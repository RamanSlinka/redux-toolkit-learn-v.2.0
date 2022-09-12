import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface UserState {
    firstName: string
    lastName: string
}

const initialState: UserState = {
    firstName: '',
    lastName: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action:PayloadAction<string>) => {
            state.firstName = action.payload
        } ,
        setLastName: (state, action:PayloadAction<string>) => {
            state.lastName = action.payload
        }
    }
})

export const {setFirstName, setLastName} = userSlice.actions
export default userSlice.reducer