import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../style.css'
//icons
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'

function CharacterSearch(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const urlParams = new URLSearchParams(location.search);
    const [UrlQ, setUrlQ] = useState(urlParams.get('q'));

    function formHandler(event) {
        event.preventDefault();
        const inputValue = event.target.q.value;
        if (inputValue === "") return false
        setUrlQ(inputValue);
        navigate(`/search?q=${inputValue.toLowerCase()}`);
    }

    useEffect(() => {
        if (location.search.length === 0) {
            setUrlQ("")
        }
    }, [location, UrlQ])

    const results = <h4 className='text-orange'>Search : {UrlQ} </h4>;

    return (
        <>
            <form onSubmit={formHandler}>
                <div className="mb-5 d-flex flex-row border p-2 rounded-5 shadow">
                    <input
                        name="q"
                        type="text"
                        className="form-control border-0 clear"
                        id="search"
                        defaultValue={UrlQ}
                    />
                    <button type="submit" className="btn">
                        <AiOutlineSearch className='text-orange fw-bolder' size={23} />
                    </button>
                    <button type="reset" className="btn">
                        <AiOutlineCloseCircle className='text-orange fw-bolder' size={23} />
                    </button>

                </div>
            </form>
            {location.pathname === '/search' && results}
        </>
    );
}

export default CharacterSearch;
