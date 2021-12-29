import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BASE_URL from '../../api.js';
//icons
import { BsFillRecordFill } from 'react-icons/bs'


export default function ProductDetail() {
    const params = useParams();

    const [products, setProducts] = useState([]);



    const setStatus = () => {
        if (products.status === "Alive") {
            return 'text-success mx-1'
        } else if (products.status === "unknown") {
            return 'text-warning mx-1'
        } else {
            return 'text-danger mx-1'
        }
    }

    useEffect(() => {
        const { productId } = params;
        fetch(`${BASE_URL}/${productId}`)
            .then((response) => response.json())
            .then(results => {
                setProducts(results);
            });
    }, []);

    const episodes = products.episode;
    console.log(episodes)
    return (
        <div className='container-fluid'>
            <div className="d-flex flex-row card p-2">
                <div className="character-image">
                    <img src={products.image} alt={products.name} />
                </div>
                <div className="character-info">
                    <h5>{products.name}</h5>
                    <p className='m-0'>
                        <BsFillRecordFill className={setStatus()} /> {products.status}
                        - {products.species}
                    </p>
                    <p className="text-muted m-0">
                        <span className="fw-bold">Gender: </span>
                        {products.gender}
                    </p>
                    <p className="m-0">
                        Location: 
                        {products?.location?.name}
                    </p>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Episodes
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
        </div>
    )
}
