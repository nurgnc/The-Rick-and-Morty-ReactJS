import React, { useState, useEffect } from 'react';
import BASE_URL from '../../api'
import ProductSearch from './ProductSearch'
import { Link } from 'react-router-dom';
import '../../style.css'
import CharacterCard from '../base/CharacterCard';


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
            <div className="container">
                <h1 className='text-center display-4 text-orange fw-bolder mb-5'>Rick and Morty</h1>
                <ProductSearch />
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 my-5 ">
                    <img className='rounded img-fluid' src={require('../../img/banner.webp')} alt="Ricky-and-Martin" />
                    <div className="mt-5 fs-4">
                        <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block, Adult Swim.</p>
                        <p>
                            The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted, but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
                        </p>
                    </div>
                </div>

                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 mt-4 mb-5">
                    {
                        characters
                            .slice(0, size)
                            .map(item => (
                                <CharacterCard
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                />
                            ))
                    }
                </div>
                <h3 className='text-orange fw-bolder mb-4 display-5'>
                    Rick and Morty API
                </h3>
                <p className='fs-4'>
                    The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.
                </p>
            </div>
        </div>
    )
}
