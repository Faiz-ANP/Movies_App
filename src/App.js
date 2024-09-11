import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.scss"
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotfound from './components/PageNotfound/PageNotfound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
  <Router>
    <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
        <Route path='*' element={<PageNotfound/>}/>
      </Routes>
      <Footer/>
  </Router>
    </div>
  );
}

export default App;
