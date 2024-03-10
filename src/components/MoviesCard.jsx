import { useMovie } from '../GlobalContext/movieContext'
import { NavLink } from 'react-router-dom';

const MoviesCard = () => {

  const { moviesData } = useMovie();

  return (
    <>
      {
        <section className='movie-Page'>
          <div className="container grid grid-4-col">
            {
              moviesData.map((movie) => {
                const { imdbID, Title, Poster, Year } = movie;
                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID} >
                    <div className="card">
                      <div className="card-info">
                        <h2>{Title}</h2>
                        <img src={Poster} alt="movie" />
                        <p>{Year}</p>
                      </div>
                    </div>
                  </NavLink>
                );
              })
            }
          </div>
        </section>
      }
    </>
  )
};

export default MoviesCard;
