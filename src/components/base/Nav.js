import React from 'react'
import routes from '../../routes';
import { Link } from 'react-router-dom';
import "../../style.css";

export default function Nav() {
    return (
        <div className='bg-yellow py-2'>
            <nav className="navbar px-5 navbar-expand-lg navbar-light ">
                    <Link to="/">
                        <img src={require('../../img/logo.png')} alt="logo" />
                    </Link>
                    <button className="navbar-toggler btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex justify-content-between">
                            {routes
                                .filter((item) => item.isNav)
                                .map((item, index) => (
                                    <div key={index} className="nav-item px-3 ">
                                        <Link to={item.path} className="text-info fw-bold fs-5 text-decoration-none">
                                            {item.title}
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
            </nav>
        </div>
    )
}
