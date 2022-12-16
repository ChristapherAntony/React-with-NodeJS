
import {configureStore} from '@reduxjs/toolkit'
import usernameReducer from './usernameReducer'


const store=configureStore({
    reducer:{
        username:usernameReducer

    }    
})

export default store;