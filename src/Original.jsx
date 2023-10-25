import React, { useEffect, useState } from 'react'
import "./rows.css"
//import image from "../src/assets/lucifer movie cover.jpg";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import movie from './moviedata';



const Original = () => {
    

  const netflixMovies = movie.filter(movie => movie.network === "Netflix");

  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(netflixMovies.reverse());
  },[netflixMovies])

 
 
        var settings = {
       
            arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 6.8,
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
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },

            {
                breakpoint: 390,
                settings: {
                  slidesToShow: 2.6,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
            
              {
                breakpoint: 380,
                settings: {
                  slidesToShow: 2.4,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2.4,
                slidesToScroll: 1,
               
              }
            }
          ]
        };
  return (
    <section>
        <h2>Netflix Originals</h2>
        
        <div className='row__poster'>
           <Slider {...settings}>
            {movies.map(movie => (
              <a href={movie.link}><div><img src={[movie.pic]} alt='img'/></div></a>
               
        ))}
            
            
            
           
         
            </Slider>
            
        </div>
    </section>
  )
}

export default Original