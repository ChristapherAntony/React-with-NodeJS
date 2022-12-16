import React from 'react'
import './HomeBanner.css';
import { useSelector,useDispatch } from 'react-redux';
import { change } from '../../Redux/usernameReducer';

function HomeBanner() {
    const username =useSelector((state)=> state.username)
    const dispatch =useDispatch()




    return (
        <header className="masthead d-flex align-items-center">
            <div className="container px-4 px-lg-5 text-center">
                <h1 className="mb-1">Home Screen </h1>
                <h3 className="mb-5">
                    <em>Welcome  {username}</em>
                </h3>
                <button onClick={()=>{
                    dispatch(change("Christapher Antony"))
                }} className="btn btn-primary btn-xl" >
                    Find Out More
                </button>
            </div>
        </header>
    )
}

export default HomeBanner