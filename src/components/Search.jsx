import { useMovie } from '../GlobalContext/movieContext'

const Search = () => {

  const { query, setQuery, error } = useMovie();

  return (
    <>
      <section className='search-section'>
        <h2>Search Your Favorite Movie &#128269;</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text"
              name="search"
              id="search"
              placeholder='Search here....'
              value={ query }
              onChange={(e) => setQuery(e.target.value)}  
            />
          </div>
        </form>
        <div className="card-error">
          <p>{ error.show && error.msg }</p>
        </div>
      </section>
    </>
  )
}

export default Search;
