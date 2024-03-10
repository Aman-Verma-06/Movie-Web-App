import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

export const movieContext = createContext();

export const useMovie = () => {
    return useContext(movieContext);
}

export const API = `https://www.omdbapi.com/?apikey=bb3f93b9`

export const MovieProvider = ({ children }) => {

    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ show: 'false', msg: '' });
    const [query, setQuery] = useState('Marvel');

    const getMovies = async (url) => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);

            if (data.Response === 'True') {
                setLoading(false);
                setError({ show: false, msg: '' });
                setMoviesData(data.Search);
            } else {
                setError({ show: 'true', msg: data.Error });
            }

        } catch (error) {
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        let searchQuery = setTimeout(() => {
            getMovies(`${API}&s=${query}`);
        }, 400);

        return () => clearTimeout(searchQuery);
    }, [query]);

    return (
        <movieContext.Provider value={{ moviesData, loading, error, query, setQuery }} >
            {children}
        </movieContext.Provider>
    );
};
