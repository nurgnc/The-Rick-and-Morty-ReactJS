import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../api'

function Products(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    function findProductById(id){
        return products.find(p => p.id === id);
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
        <>
            <h1>Products</h1>
            <div className="row row-cols-3 row-cols-md-2 row-cols-lg-4 g-4">
                {
                    products.map(item => (
                        <div key={item.id} className="col">
                            <div className="card card-min-height">
                                <Link to={`${item.id}`}>
                                    <img src={item.image} className="card-img-top rounded" alt={item.name} />
                                </Link>
                                <div className="card-body">
                                    <Link className="text-decoration-none" to={`${item.id}`}>
                                        <h5 className="card-title text-info">{item.name}</h5>
                                    </Link>
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
