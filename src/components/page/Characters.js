import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// api 
import BASE_URL from '../../api'
//style
import '../../style.css'
//components
import Pagination from '../Pagination'
//icons
import { GiPerson } from 'react-icons/gi';
import { BsFillRecordFill } from 'react-icons/bs'
import { RiAliensFill } from 'react-icons/ri'

function Characters(props) {
    const [characters, setCharacters] = useState([]);
    const [results, setResults] = useState();
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = results?.pages;

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
        if (item.species === "Alien") {
            return <RiAliensFill size={25} color='blue' />
        } else {
            return <GiPerson size={25} />
        }
    }

    useEffect(() => {
        const fetchCharacters = () => {
            fetch(`${BASE_URL}?page=${currentPage}`)
                .then((response) => response.json())
                .then(results => {
                    const data = results.results;
                    setResults(results.info)
                    setLoading(false);
                    setCharacters(data);
                });
        }
        fetchCharacters()
    }, [currentPage]);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="container-fluid">
            <table className="table text-center fs-4">
                <thead>
                    <tr className=''>
                        <th scope="col">İmage</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Species</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characters.map(item => (
                            <tr key={item.id}>
                                <td className="w-25">
                                    <img src={item.image} className="avatar img-avatar" alt={item.name} />
                                </td>
                                <td>
                                    <Link className="text-decoration-none fw-bold text-info" to={`${item.id}`}>
                                        {item.name}
                                    </Link>
                                </td>
                                <td className={setStatus(item)}>
                                    <BsFillRecordFill className={setStatus(item)} />
                                    {item.status}</td>
                                <td className='text-center'>{setSpecies(item)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination totalPage={totalPage} paginate={paginate} />
        </div>
    );
}

export default Characters;
