import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows, getAllMovies, getAllShows, removeSelected } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick/lib/slider";

const MovieListing = () => {


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  
  let renderMovies,renderShows = "";
  

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
        </div>
    );

     renderShows =
     shows.Response === 'True' ? (
      shows.Search.map((series, index) => (
         <MovieCard key={index} data={series} />
       ))
     ) : (
       <div>
         <h3>{shows.Error}</h3>
         </div>
     );

  
  

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>

      <div className="movie-container">
        <Slider {...settings}>{renderMovies}</Slider> </div>
       </div>

      <div className="movie-list">
        <h2>Shows</h2>

        <div className="movie-container">
        <Slider {...settings}>{renderShows}</Slider> </div>
          
      </div>
    </div>
  );
};

export default MovieListing;
