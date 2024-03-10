import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MoviePage from './components/MoviePage'
import ErrorPage from './components/ErrorPage'
import './App.css'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<MoviePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </>
  )
}

export default App;
