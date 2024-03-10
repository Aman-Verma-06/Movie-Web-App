import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="container">
        <div className="error-icon">!</div>
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! The page you're looking for could not be found.....</p>
        <div className="btn-Back">
          <NavLink to='/' className='back-link'>Go back to homepage</NavLink>
        </div>
      </div>
    </>
  )
}

export default ErrorPage;
