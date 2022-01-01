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
            return <BsGenderFemale />
        } else {
            return <BsGenderMale />
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
                    <img src={products.image} className='rounded shadow img-fluid' alt={products.name} />
                </div>
                <div className="character-info col-sm-12 col-md-6 col-lg-8">
                    <h3 className='text-orange fw-bold mb-3'>{products.name}</h3>
                    <div className='d-flex flex-row'>
                        <div className={'species px-2 py-1 rounded' + setStatus()}>
                            <BsFillRecordFill /> 
                            {products.status}                        
                        </div>
                        <div className="species ms-4 px-2 py-1 rounded bg-success text-light">
                        {setSpecies()}
                        {products.species}
                        </div>
                    </div>
                    <p className=" my-3">
                        {setGender()}
                        {products.gender}
                    </p>
                    <p className="mb-3">
                        <HiLocationMarker />
                            {products?.location?.name}
                    </p>
                    <div className="dropdown">
                        <button className="btn btn-dark text-light w-25 d-flex flex-row justify-content-between align-items-center dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Episodes
                        </button>
                        <ul className="dropdown-menu w-25 bg-dark" aria-labelledby="dropdownMenuButton1">
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
        </>
    )
}
