import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'

import Cards from './Card';

function Freebook() {
  const [book, setBook] = useState([]);

    useEffect(()=>{
      try {
        const getData=async()=>{
          const response= await axios.get('http://localhost:4000/book');
          const data = response.data.filter((data) => data.category === "Free");
          console.log(data);
          setBook(data);
         }
         getData();
      } catch (error) {
        console.log("error", error)
      }
       

       
    },[])

    // const fdata = list.filter((data)=>data.category==="Free");
    // setBook(fdata);

    // console.log(fdata);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
      <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
        <div>
          <h1 className="pb-2 text-xl font-semibold">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
       
      <div className="slider-container">
      <Slider {...settings}>
         {book.map((item)=> <Cards item={item} key={item.id}/>)}
      </Slider>
    </div>
    </div>
     
    </>
  )
}

export default Freebook;