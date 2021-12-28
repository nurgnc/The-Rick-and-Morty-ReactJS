import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../api'

function Products(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${BASE_URL}/10`)
            .then((response) => response.json())
            .then(results => {
                setLoading(false);
                setProducts(results);
            });
    }, []);

    if (loading) {
        return <h1>Yükleniyor...</h1>;
    }
    return (
        <>
            <h1>Products</h1>
            <div className="row row-cols-3 row-cols-md-2 row-cols-lg-4 g-4">
                {
                    products.map(item => (
                        <div key={item.id} className="col">
                            <div className="card card-min-height">
                                <Link to={`${item.id}`}>
                                    <img src="https://picsum.photos/200/200" className="card-img-top rounded" alt={item.name} />
                                </Link>
                                <div className="card-body">
                                    <Link className="text-decoration-none" to={`${item.id}`}>
                                        <h5 className="card-title text-info">{item.name} ({item.latin_name})</h5>
                                    </Link>
                                    <h6>Animal Type: {item.animal_type}</h6>
                                    <p className="card-text text-muted m-0"><span className="fw-bold">Habitat: </span>{item.habitat}</p>
                                    {/* <p className="card-text text-muted m-0"><span className="fw-bold">Geology Range: </span>{item.geo_range}</p> */}
                                    {/* <p className="card-text text-muted"><span className="fw-bold">Diet : </span>{item.diet}</p> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    );
}

export default Products;
