import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API } from '../GlobalContext/movieContext';

const MoviePage = () => {

  const { id } = useParams();

  const [moviesData, setMoviesData] = useState('');
  const [loading, setLoading] = useState(true);

  const getMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === 'True') {
        setLoading(false);
        setMoviesData(data);
      }

    } catch (error) {
      console.log('Error:', error);
    }
  }

  useEffect(() => {
    let searchQuery = setTimeout(() => {
      getMovies(`${API}&i=${id}`);
    }, 400);

    return () => clearTimeout(searchQuery);
  }, [id]);

  if(loading){
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <section className='movie-section'>
        <div className="movie-card">
          <figure>
            <img src={moviesData.Poster} alt="Poster" />
          </figure>
          <div className="card-content">
            <p className='title'>{moviesData.Title}</p>
            <p className='card-text'>{moviesData.Released}</p>
            <p className='card-text'>{moviesData.Genre}</p>
            <p className='card-text'>{moviesData.imdbRating}</p>
            <p className='card-text'>{moviesData.Country}</p>
            <NavLink to='/' className='back-btn'>Go Back</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoviePage;
