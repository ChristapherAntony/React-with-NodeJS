import {createSlice} from '@reduxjs/toolkit'

const usernameSlice=createSlice({
    name:'username',
    initialState:'',
    reducers:{
        change:(state,action)=>{
            return action.payload

        }
    }
})

export const {change}=usernameSlice.actions

export default usernameSlice.reducer;