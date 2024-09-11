import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";
import { useEffect, useState } from "react";


export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {

    const response = await MovieApi.get(
      `?apikey=${ApiKey}
        &s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
      const response = await MovieApi.get(
        `?apikey=${ApiKey}
          &s=${term}&type=series`
      );
      return response.data;
    }
  );

  export const fetchAsyncMoviesShowsDetails = createAsyncThunk(
    "movies/fetchAsyncMoviesShowsDetails",
    async (id) => {
  
      const response = await MovieApi.get(
        `?apikey=${ApiKey}&i=${id}&plot=full`
      );
      return response.data;
    }
  );

const initialState = {
  movies: {},
  shows:{},
  selectedDetails:{},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelected:(state)=>{
      state.selectedDetails={}
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      return {...state, movies: payload };
    })
 
    .addCase(fetchAsyncMovies.pending, (state)=> {
      return {...state}
    })
 
    .addCase(fetchAsyncMovies.rejected, () => {
    

    })
    .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
       
        return {...state, shows: payload };
        return {...state}
      })
      .addCase(fetchAsyncShows.pending, (state)=> {
        return{...state}
      })
      .addCase(fetchAsyncMoviesShowsDetails.fulfilled, (state, { payload }) => {
        
        return {...state, selectedDetails: payload };
      })
  }
});

export const { removeSelected } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMorS = (state) => state.movies.selectedDetails;


export default movieSlice.reducer;
