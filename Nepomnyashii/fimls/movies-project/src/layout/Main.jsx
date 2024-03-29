import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY

const Main = (props) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search)
                setLoading(false)
            })
    }, [])



    const searchMovies = (str, type = 'all') => {
        setLoading(true)
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search)
                setLoading(false)
            })
    }

    return <main className='content container'>
        <Search searchMovies={searchMovies} />
        {
            loading ? <Preloader /> : (<Movies movies={movies} />)
        }

    </main >


}
export default Main