import React, { useEffect, useState } from 'react'
import "./rows.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import movie from './moviedata';

const Comedy = () => {

  
  const comedyMovies = movie.filter(movie => movie.genre === "comedy");

  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(comedyMovies.reverse());
  },[comedyMovies])


    
  var settings = {
       
    arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 8.5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },

    {
        breakpoint: 390,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3.4,
        slidesToScroll: 1,
       
      }
    }
  ]
};
  return (
    <section>
        <h2>Comedy</h2>
        
        <div className='row__poster'>
           <Slider {...settings}>
           {movies.map(movie => (
              <div  className='trending'><img src={[movie.pic]} alt='img'/></div>
        ))}
            
         
           

         
            </Slider>
            
        </div>
    </section>
  )}


export default Comedy