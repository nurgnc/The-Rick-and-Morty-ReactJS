import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../api'

function Products(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
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
            <ul>
                {
                    products.map(item => (
                        <li key={item.id}>
                            <Link to={`${item.id}`}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default Products;
