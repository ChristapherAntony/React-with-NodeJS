import {createSlice} from '@reduxjs/toolkit'


const adminSlice=createSlice({
    name:'admin',
    initialState:'Hai Admin',
    reducers:{
        change:(state,action)=>{
            return action.payload

        }
    }
})

export const {change}=adminSlice.actions

export default adminSlice.reducer;