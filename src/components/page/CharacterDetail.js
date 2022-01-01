import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BASE_URL from '../../api.js';
//icons
import { BsFillRecordFill, BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { GiPerson } from 'react-icons/gi';
import { RiAliensFill } from 'react-icons/ri'
import {HiLocationMarker} from 'react-icons/hi'


export default function CharacterDetail() {
    const params = useParams();

    const [products, setProducts] = useState([]);
    const episodes = products.episode;
    const episodeArr = [];
    episodes?.forEach(item => {
        episodeArr.push(
            {
                episodeURL: item,
                episodeNum: item.split('api/')[1].split('/')[1]
            }
        )
    })

    const setStatus = () => {
        if (products.status === "Alive") {
            return ' text-success border rounded border-success'
        } else if (products.status === "unknown") {
            return ' text-warning border rounded border-warning'
        } else {
            return ' text-danger border rounded border-danger'
        }
    }

    const setSpecies = () => {
        if(products.species === "Alien") {
            return <RiAliensFill size={25}/>
        } else {
            return <GiPerson size={25}/>
        }
    }

    const setGender = () => {
        if(products.gender === "Female") {
            return <BsGenderFemale className='me-2'/>
        } else {
            return <BsGenderMale className='me-2'/>
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
        <div className="container">
            <div className="row my-5">
                <div className="character-image col-md-12 col-lg-6 mb-5">
                    <img src={products.image} className='rounded shadow h-575 w-100' alt={products.name} />
                </div>
                <div className="character-info col-md-12 col-lg-5 ms-5">
                    <h1 className='text-orange fw-bold mb-5 display-4'>{products.name}</h1>
                    <div className='d-flex flex-row'>
                        <div className={'d-flex flex-row align-items-center px-2 py-1 rounded fs-5' + setStatus()}>
                            <BsFillRecordFill /> 
                            {products.status}                        
                        </div>
                        <div className="species d-flex flex-row align-items-center ms-4 px-2 py-1 rounded fs-5 bg-success text-light">
                        {setSpecies()}
                        {products.species}
                        </div>
                    </div>
                    <p className="fs-4 d-flex flex-row align-items-center my-4">
                        {setGender()}
                        {products.gender}
                    </p>
                    <p className="fs-4 mb-5 d-flex flex-row align-items-center">
                        <HiLocationMarker className='me-2'/>
                            {products?.location?.name}
                    </p>
                    <div className="dropdown">
                        <button className="btn btn-dark text-light w-50 fs-5 d-flex flex-row justify-content-between align-items-center dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Episodes
                        </button>
                        <ul className="dropdown-menu w-50 bg-dark" aria-labelledby="dropdownMenuButton1">
                        {
                            episodeArr?.map((item, index)=> (
                                <li className="dropdown-item" key={index}>
                                    <a className='text-decoration-none text-light ' target="_blank" href={item.episodeURL}>
                                        Episode {item.episodeNum}
                                    </a>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
