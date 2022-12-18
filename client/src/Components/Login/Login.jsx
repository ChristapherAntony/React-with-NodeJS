import React from 'react';
import { useState } from 'react';
import './Login.css';
import axios from '../../utils/axios'
import { loginPost } from '../../utils/Constants';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { change } from '../../Redux/usernameReducer';


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    const body = JSON.stringify({
      email,
      password,
    })
    axios.post(loginPost, body, { headers: { "Content-Type": "application/json" } }).then((res) => {
      localStorage.setItem('token', res.data.token)
      window.alert("Login success")
      dispatch(change(res.data.user))
      navigate('/')
    }).catch((err) => {
      console.log(err);
      window.alert(err.response.data.message)

    })

  }


  return (
    <div  >


      {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
            height: 300
          }}
        />
        {/* Background image */}
        <div className='outer'>
          <div
            className="card mx-5 mx-md-5 shadow-5-strong w-50 outer "
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",



            }}
          >
            <div className="card-body py-5 px-md-5 ">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-5">Login </h2>
                  <form onSubmit={handleLogin}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    {/* <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example1">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example2">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div> */}
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>


                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Login
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                      <h6 style={{cursor:'pointer'}} onClick={()=>navigate('/signup')}>or sign up with email</h6>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>


      </section>
      {/* Section: Design Block */}




    </div>
  )
}

export default Login