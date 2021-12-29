import React, { useState, useEffect } from 'react';
import BASE_URL from '../../api'
import ProductSearch from './ProductSearch'
import { Link } from 'react-router-dom';
import '../../style.css'


export default function Home() {
    const [characters, setCharacters] = useState([]);
    const size = 4;

    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then(results => {
                const data = results.results;
                setCharacters(data);
            });
    }, []);
    return (
        <div>
            <ProductSearch />
            <div className="container">
                <h2 className='text-center text-orange fw-bolder'>Rick and Morty</h2>
                <div className="d-flex my-5 flex-row justify-content-center align-items-center">
                    <img className='rounded' src={require('../../img/banner.webp')} alt="Ricky-and-Martin" />
                </div>
                <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block, Adult Swim.</p>
                <p>
                    The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted, but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
                </p>
                <div className="row row-cols-3 row-cols-md-2 row-cols-lg-4 g-5 mt-4 mb-5">
                    {
                        characters
                            .slice(0, size)
                            .map(item => (
                                <div key={item.id} className="col">
                                    <div className="card card-min-height shadow">
                                        <Link to={`${item.id}`}>
                                            <img src={item.image} className="card-img-top rounded" alt={item.name} />
                                        </Link>
                                        <div className="card-body">
                                            <Link className="text-decoration-none" to={`${item.id}`}>
                                                <h5 className="card-title text-center text-info">{item.name}</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
                <h3 className='text-orange fw-bolder mb-4'>
                    Rick and Morty API
                </h3>
                <p>
                    The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.
                </p>
            </div>
        </div>
    )
}
