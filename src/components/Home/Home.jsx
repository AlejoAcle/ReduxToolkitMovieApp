import React, { useEffect } from 'react';
import { MovieListing} from "../MovieListing/MovieListing"
import movieApi from "../apis/movieApi";
import { APIKey } from '../apis/MovieApiKey.js';
import { addMovies } from '../../redux/movies/moviesSlice';
import { useDispatch } from 'react-redux';


export const Home = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchMovies = async() =>{
      const response = await movieApi.get(`movie?api_key=${APIKey}`);
      dispatch(addMovies(response.data.results));
    };
    fetchMovies();
  },[])





  return (
    <>
      <div className='banner-img'>
        <MovieListing />
      </div>
    </>
  )
}
