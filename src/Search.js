import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./App.css";

const Search = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchMovieList();
    }, []);

    const fetchMovieList = async (e) => {
        axios.get(`http://www.omdbapi.com/?apikey=487dbaec&s=${e ? e.target.value : 'Avenger'}`)
            .then((response) => {
                if (response.data.Response === 'True') {
                    setMovie(response.data.Search)
                }
            })
    }

    return (
        <>
            <div className='search'>
                <div className='head'>
                    <h1> Movie Search</h1>
                </div>

                <div className='main'>
                    <input type="text" placeholder='Enter your Movie' onChange={fetchMovieList} />
                </div>

                <div className='cast'>
                    {
                        movie.map((list) => (
                            <>
                                <div className='card'>
                                    <div className='img'>
                                        <img src={list.Poster} alt='' />
                                    </div>

                                    <div className='details'>
                                        <h1> {list.Title.substring(0, 15)}</h1>
                                        <p> {list.Year}</p>
                                        <h2> Type :{list.Type} </h2>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Search;