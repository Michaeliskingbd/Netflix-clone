import React, { useEffect, useState } from 'react'
import "./featured.css"
import {FaPlay} from "react-icons/fa"
import {MdAdd} from "react-icons/md"

//Import movie data array from data file
import movie from "../moviedata"

const Featured = () => {

  //store it into movies (that sort the movies that have the properties of type being featured)

  const movies = movie.filter(movie => movie.type === "featured" );

  const [featuredMovie, setFeaturedMovie] = useState(null);

  //The below code is for random display of featured movie on the netflix clone homepage

  useEffect(() => {
    // Check if it's the first page load (localStorage key not set)
    if (!localStorage.getItem('pageLoaded')) {
      // Select a random movie for the initial load
      const randomIndex = Math.floor(Math.random() * movies.length);
      setFeaturedMovie(movies[randomIndex]);
      // Mark the page as loaded to prevent further reloading
      localStorage.setItem('pageLoaded', 'true');
    } else {
      // On subsequent page loads, select a new random movie
      const randomIndex = Math.floor(Math.random() * movies.length);
      setFeaturedMovie(movies[randomIndex]);
    }
  }, [movies])



  return (
    <div className='featured'>
       {featuredMovie && 
          <>
      <img src={featuredMovie.pic} alt='img'/>
      <div className='overlay'>
      <div className='featured__info'>
        <div className='desc'>
         
          <h1>{featuredMovie.title}</h1>
          <div>{featuredMovie.year} | 16+ | {featuredMovie.seasons} Seasons | {featuredMovie.Fgenre}</div>
        <h3>{featuredMovie.desc}
       </h3>
        <h3> <small>Starring:</small> {featuredMovie.starring}<br></br>
        <small>Creators:</small> {featuredMovie.Creators}</h3>

        
          
        </div>
        <div className='cta'>
        <span className='play'> <FaPlay/> Play</span>
        <span className='my-list'> <MdAdd className='md'/>My List</span>
        </div>
        
        
      </div>
      </div>
      </>}
      
    </div>
  )
}

export default Featured