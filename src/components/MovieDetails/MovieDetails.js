import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMoviesShowsDetails, getSelectedMorS, removeSelected } from '../../features/movies/movieSlice';
import { FaFilm, FaStar, FaThumbsUp } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import "./MovieDetails.scss"

const MovieDetails = () => {

  const {imdbID}=useParams();
  const dispatch=useDispatch();
  const data=useSelector(getSelectedMorS);
console.log(data);

  useEffect(()=>{
    dispatch(fetchAsyncMoviesShowsDetails(imdbID))
    return ()=>{
      dispatch(removeSelected())
    }
  },[dispatch,imdbID])

  return (
    <div className='detail-section'>
      {Object.keys(data).length===0 ? (
        <div>Loading...</div>
      ):(
      <>
    <div className='section-left'>
      <div className='title'>
        {data.Title}
      </div>
      <div className='description'>
        <span>
          IMDB Rating <FaStar size={15} color='yellow'/> : {data.imdbRating}
        </span>
        <span>
          Votes <FaThumbsUp size={15} color='#fafafa'/> : {data.imdbVotes}
        </span> <span>
          Runtime <FaFilm size={15} color='gray'/> : {data.Runtime}
        </span> <span>
          Year <FaCalendar size={15} color='white' /> : {data.Year}
        </span>
      </div>
      <div className='plot'>
        {data.Plot}
      </div>
      <div className='info'>
        <span>Director :
        <span> {data.Director}</span></span>
       
        <span>Stars :
        <span> {data.Actors}</span></span>
        <span>Genre :
        <span> {data.Genre}</span></span>
         
        <span>Languages :
        <span> {data.Language}</span> </span>
        <span>Awards :
        <span> {data.Awards}</span></span>
        

      </div>
    </div>
    <div className='section-right'>
      <img src={data.Poster} alt={data.Title}/>
    </div>
    </>
      )}
    </div>
  )
}

export default MovieDetails
