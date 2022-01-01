import React from 'react'
import routes from '../../routes';
import { Link } from 'react-router-dom';
import '../../style.css'



export default function Footer() {
    return (
        <footer className="py-3 my-4 container-fluid bg-yellow">
            <p className="text-center text-muted">© 2021 Copyright <a className='text-info' href="https://github.com/nurgnc">Nur Genç</a></p>
        </footer>
    )
}
