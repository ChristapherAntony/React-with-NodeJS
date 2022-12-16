import axios from '../../utils/axios';
import React from 'react'
import { useEffect } from 'react';
import {useNavigate,useParams} from 'react-router-dom'

function UpdateUser() {
    const params = useParams();
    console.log(params,"iddddddddddddd");

    const navigate=useNavigate()
    const setName = () => { }
    const setEmail = () => { }
    const formSubmit = () => { }

    useEffect(()=>{
      axios.get()
      //write api set apt .....................................
    })




    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 outerBoxEdit ">
                        <form >
                            
                            <div className="form-group">
                                <label htmlFor="first_name">Name</label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    className="form-control"
                                    name="Name"
                                    id="name"
                                    placeholder="Enter Name"
                                  
                                    required=""
                                />
                                <span id="name-error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue=""
                                    className="form-control"
                                    name="Email"
                                    id="email"
                                    placeholder="Email Address"
                                   
                                    required=""
                                />
                                <span id="email-error" />
                            </div>
                            <br />
                            <br />
                           
                            <button
                                onclick="return validateForm()"
                                type="submit"
                                className="btn btn-secondary btn-sm mx-1"
                            >
                                Update
                            </button>
                            <button onClick={()=>navigate('/users')} className="btn btn-secondary  btn-sm ">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UpdateUser