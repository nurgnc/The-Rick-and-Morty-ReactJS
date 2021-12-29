import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../api'
//icons
import { GiPerson } from 'react-icons/gi';
import { BsFillRecordFill } from 'react-icons/bs'
import { RiAliensFill } from 'react-icons/ri'

function Products(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const setStatus = (item) => {
        if (item.status === "Alive") {
            return 'text-success mx-1'
        } else if (item.status === "unknown") {
            return 'text-warning mx-1'
        } else {
            return 'text-danger mx-1'
        }
    }

    const setSpecies = (item) => {
        if(item.species === "Alien") {
            return <RiAliensFill size={25}/>
        } else {
            return <GiPerson size={25}/>
        }
    }

    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then(results => {
                const data = results.results;
                setLoading(false);
                setProducts(data);
            });
    }, []);

    if (loading) {
        return <h1>Yükleniyor...</h1>;
    }
    return (
        <div className="container-fluid">
            <table class="table text-center">
                <thead>
                    <tr >
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Species</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => (
                            <tr key={item.id}>
                                <td className="w-25">
                                    <img src={item.image} className="avatar rounded" alt={item.name} />
                                </td>
                                <td><Link className="text-decoration-none fw-bold text-info" to={`${item.id}`}>{item.name}</Link></td>
                                <td className={setStatus(item)}>
                                    <BsFillRecordFill className={setStatus(item)} />
                                    {item.status}</td>
                                <td className='text-center'>{setSpecies(item)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Products;
