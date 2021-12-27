import React from 'react'
import routes from '../../routes';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {routes
                                .filter((item) => item.isNav)
                                .map((item, index) => (
                                    <li key={index} className="text-light ">
                                        <Link to={item.path} className="text-light text-decoration-none">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
