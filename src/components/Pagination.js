import React from 'react'
import {Link} from 'react-router-dom'

const Pagination = ({ totalPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link onClick={() => paginate(number)} to={`?page=${number}`} className="page-link">
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
