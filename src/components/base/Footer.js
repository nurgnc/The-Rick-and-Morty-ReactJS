import React from 'react'
import routes from '../../routes';
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <div className="container-fluid">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    {
                        routes
                            .filter((item) => item.isNav)
                            .map((item, index) => (
                                <li key={index} className="nav-item">
                                    <Link to={item.path} className="nav-link px-2 text-muted">
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                    }
                </ul>
                <p className="text-center text-muted">© 2021 Company, Inc</p>
            </footer>
        </div>
    )
}
