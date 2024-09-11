import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser } from "react-icons/fa";
import "./Header.scss"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
  const [term,setTerm]=useState("");
  const dispatch=useDispatch();

  const submitHandler=(e)=>{
    e.preventDefault();
    if (term==="") {
      return alert("Please enter an item")
    }
   dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  }

  return (
    <div className='header'>
      <div className='logo'>
      <Link to="/">Movies App
      </Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type='text' value={term} onChange={(e)=>setTerm(e.target.value)}
          placeholder='Search Movies or Shows' />
          <button type='submit'><FaSearch size={12}/></button>
        </form>
      </div>
      <div className='user_icon'>
      <FaUser color="white" size="25"/>
      </div>
    </div>
  )
}

export default Header
