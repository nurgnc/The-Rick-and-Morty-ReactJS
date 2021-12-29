import React, { useState, useEffect } from 'react';
import { useParams, useHistory   } from 'react-router-dom';
import BASE_URL from '../../api.js';

export default function ProductDetail() {
    const params = useParams();
    // const history = useHistory ();

    const [products, setProducts] = useState([]);
    // console.log(history)

    // useEffect(() => {
    //     const { productId } = params;
    //     fetch(`${BASE_URL}`)
    //         .then((response) => response.json())
    //         .then(results => {
    //             console.log(results)
    //             setProducts(results);
    //         });
    // }, []);
    return (
        <div>
            {products}
        </div>
    )
}
