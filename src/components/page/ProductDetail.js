import React, { useState, useEffect } from 'react';
import { useParams   } from 'react-router-dom';
import BASE_URL from '../../api.js';

export default function ProductDetail() {
    const params = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const { productId } = params;
        fetch(`${BASE_URL}/${productId}`)
            .then((response) => response.json())
            .then(results => {
                console.log(results)
                setProducts(results);
            });
    }, []);
    return (
        <div>
            {JSON.stringify(products)}
        </div>
    )
}
