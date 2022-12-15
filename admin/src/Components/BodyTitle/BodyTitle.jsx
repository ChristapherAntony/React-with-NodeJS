import React from 'react'
import './BodyTitle.css'

function BodyTitle() {
    return (
        <div>
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default BodyTitle