import React, { useState, useEffect } from 'react';
import BASE_URL from '../../api'
import ProductSearch from './ProductSearch'
import { Link } from 'react-router-dom';
import '../../style.css'
import { GiHand } from 'react-icons/gi'

export default function About() {
    return (
        <>
            <div className="container">
                <div className="mb-5 d-flex flex-row align-items-center justify-content-around">
                    <div className="img">
                        <img src={require('../../img/alien.jpg')} alt="alien" />
                    </div>
                    <div className="text ">
                        <h1 className='display-2'>Hello World <GiHand color='brown' /></h1>
                    </div>
                </div>
                <div className="about fs-3">
                    <p>This project includes the characters and features of the Rick and Morty series.</p>
                    <p>This is the API service I use: <a className='text-info' href="https://rickandmortyapi.com/">The Rick and Morty API</a></p>
                    <p>This assignment was built with React JS. My goal was to create a website using data from a public API service. </p>
                    <h6 className="fs-3 text-info text-start">
                        Details :
                    </h6>
                    <ul>
                        <li>Find details about the series and API on the main page, and you can search with the character name you want.</li>
                        <li>View the characters of the series on the characters page</li>
                        <li>Access character information by clicking on each character.</li>
                    </ul>
                    <h6 className="fs-3 text-info text-start">
                    I used these technologies :
                    </h6>
                    <ul>
                        <li>React</li>
                        <li>React Router Dom</li>
                        <li>Bootstrap 5</li>
                        <li>Public API</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
