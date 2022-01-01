import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ProductSearch from "./ProductSearch"
import ProductCard from "../base/ProductCard"
import BASE_URL from "../../api"

const Search = () => {
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search)
    const search = urlParams.get("q")
    const [products, setProducts] = useState([])
    console.log("search", search)


    useEffect(() => {
        fetch(`${BASE_URL}?title=${search}`)
            .then(res => res.json())
            .then(results => {
                const data = results.results;
                setProducts(data)})
    }, [search])

    console.log("products", products)
    // console.log(!products.length)
    return <>
        <ProductSearch />
        {(!products.length && search !== null) && <div className="container my-5">
            <div className="alert alert-warning" role="alert">
                <h2>There is no item about "{search}" try again</h2>
            </div>

        </div>}

        <div className="container">
            <div className="row">
                {products.map(item => <div className='col-md-4 py-3' key={item.id}>
                    <ProductCard
                        id={item.id}
                        image={item.image}
                        name={item.name}
                    />
                </div>)}
            </div>
        </div>
    </>
}
export default Search