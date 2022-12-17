import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Header() {
    const username =useSelector((state)=> state.username)
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
                        {/* Navbar brand */}
                        <Link className="navbar-brand mt-2 mt-lg-0" to={'/'}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height={15}
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </Link>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>
                                    Home
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
                        <Link className="text-reset me-3" to={'/login'}>
                            LogIn
                        </Link>
                        <Link className="text-reset me-3" to={'/signup'}>
                            Signup
                        </Link>
                        {/* Notifications */}
                        {/* <div className="dropdown">
                            <Link
                                className="text-reset me-3 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-bell" />
                                <span className="badge rounded-pill badge-notification bg-danger">
                                    1
                                </span>
                            </Link>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Some news
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another news
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        {/* Avatar */}
                        <div className="dropdown">
                            <Link
                                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                to={'/profile'}
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {username}
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="rounded-circle"
                                    height={25}
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
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