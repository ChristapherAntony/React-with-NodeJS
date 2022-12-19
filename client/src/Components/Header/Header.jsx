import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { change } from '../../Redux/usernameReducer';
import { changeImage } from '../../Redux/userImageReducer';
import axios from '../../utils/axios'
import { verifyToken } from '../../utils/Constants'
import Swal from "sweetalert2";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        const Token = localStorage.getItem("token");
        if (Token) {
            axios.post(verifyToken, JSON.stringify({ Token }), { headers: { "Content-Type": "application/json" } }).then((res) => {

                dispatch(change(res.data.user.username))
             
                dispatch(changeImage(res.data.user.image))
               
            }).catch((err) => {
                localStorage.removeItem('adminToken');

            })

        }
    }, [dispatch]);

    const username1 = useSelector((state) => {
        return state.username;
    })
    const userImage = useSelector((state) => {
        return state.userImage;

    })
   
    const logout = () => {
        Swal.fire({
            title: 'Logout?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                dispatch({ type: 'logout' })
                navigate('/')
            }
        })




    };



    const username = useSelector((state) => state.username)
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand
                        <Link className="navbar-brand mt-2 mt-lg-0" to={'/'}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                // src={userImage}
                                height={15}
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </Link> */}
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>
                                     <h4>Home</h4>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/page1'}>
                                     <h4>Page 1</h4>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/page2'}>
                                     <h4>Page 2</h4>
                                </Link>
                            </li>
                            
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Projects
                                </a>
                            </li> */}
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                        {/* Icon */}
                        {username1 ? <button className="text-reset me-3 btn  btn-outline-danger btn-sm" onClick={logout} > Logout</button> : <Link className=" text-reset me-3" to={'/login'}>LogIn</Link>}
                        <div className="dropdown">
                            <Link
                                className="dropdown-toggle d-flex align-items-center hidden-arrow text-decoration-none text-dark"
                                to={'/profile'}
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {username}
                                <img
                                    // src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    src={userImage}
                                    className="rounded-circle"
                                    height={25}
                                    alt="Black and White Portrait of a Man"
                                    // loading="lazy"
                                />
                            </Link>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        My profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </div>

    )
}

export default Header