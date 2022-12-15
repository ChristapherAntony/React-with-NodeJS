import React from 'react'
import './HomeBanner.css';
function HomeBanner() {
    return (
        <header className="masthead d-flex align-items-center">
            <div className="container px-4 px-lg-5 text-center">
                <h1 className="mb-1">Home Screen </h1>
                <h3 className="mb-5">
                    <em>Welcome </em>
                </h3>
                <a className="btn btn-primary btn-xl" href="#about">
                    Find Out More
                </a>
            </div>
        </header>
    )
}

export default HomeBanner