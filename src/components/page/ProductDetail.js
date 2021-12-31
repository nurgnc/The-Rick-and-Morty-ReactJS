import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BASE_URL from '../../api.js';
//icons
import { BsFillRecordFill } from 'react-icons/bs'
import { GiPerson } from 'react-icons/gi';
import { RiAliensFill } from 'react-icons/ri'
import {HiLocationMarker} from 'react-icons/hi'


export default function ProductDetail() {
    const params = useParams();

    const [products, setProducts] = useState([]);
    const episodes = products.episode;

    const setStatus = () => {
        if (products.status === "Alive") {
            return 'text-success me-1'
        } else if (products.status === "unknown") {
            return 'text-warning me-1'
        } else {
            return 'text-danger me-1'
        }
    }

    const setSpecies = () => {
        if(products.species === "Alien") {
            return <RiAliensFill size={25}/>
        } else {
            return <GiPerson size={25}/>
        }
    }

    useEffect(() => {
        const { characterId } = params;
        fetch(`${BASE_URL}/${characterId}`)
            .then((response) => response.json())
            .then(results => {
                setProducts(results);
            });
    }, []);

    
    return (
        <>
            <div className="col-12 row row-cols-3 row-cols-md-2 row-cols-lg-4 g-5">
                <div className="character-image col-sm-12 col-md-6 col-lg-4">
                    <img src={products.image} className='rounded shadow w-100 img-fluid' alt={products.name} />
                </div>
                <div className="character-info col-sm-12 col-md-6 col-lg-8">
                    <h3 className='text-orange fw-bold mb-3'>{products.name}</h3>
                    <div className='d-flex flex-row'>
                        <div className='species bg-secondary p-1 rounded '>
                            <BsFillRecordFill className={setStatus()} /> 
                            {products.status}                        
                        </div>
                        <div className="species ms-4 p-1 rounded bg-danger text-light">
                        {setSpecies()}
                        {products.species}
                        </div>
                    </div>
                    <p className=" my-3">
                        <span className="fw-bold">Gender: </span>
                        {products.gender}
                    </p>
                    <p className="mb-3">
                        <HiLocationMarker />
                        Location: 
                        <span className='ms-2'>
                            {products?.location?.name}
                        </span>
                    </p>
                    <div class="dropdown">
                        <button class="btn btn-info text-light w-50 d-flex flex-row justify-content-between align-items-center dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Episodes
                        </button>
                        <ul class="dropdown-menu w-50" aria-labelledby="dropdownMenuButton1">
                        {
                            episodes?.map((item, index) => (
                                <li className="dropdown-item" key={index}>
                                    <a target="_blank" href={item}>
                                        {item}
                                    </a>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
