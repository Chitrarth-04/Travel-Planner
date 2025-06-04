import React from "react"; 
import Slider from 'react-slick' 
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = ( ) => {

    const settings= {
        dots:true,
        isFinite:true,
        autoplay:true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
    {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
]
    }

  return <Slider {...settings}>
    <div className = "testimonial py-4 px-3">
        <p>This website made planning my solo trip to Bali an absolute breeze!
          The weather calculator helped me pick the perfect time to go, and the travel tips were super handy.
          I felt confident and excited every step of the way—definitely using it again!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Anurup Datta</h6>
            <p>Customer</p>
          </div>
        </div>
    </div>
    <div className = "testimonial py-4 px-3">
        <p>I used this site to plan a 2-week Europe tour, and it exceeded my expectations.
          The suggested tour guides were knowledgeable and friendly, which really elevated my experience.
          A few more budget hacks would make it even better, but still a fantastic resource!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Mridul Jindal</h6>
            <p>Customer</p>
          </div>
        </div>
    </div>
    <div className = "testimonial py-4 px-3">
        <p>Absolutely loved using this site for my Thailand getaway!
          It’s sleek, informative, and made my travel planning fun rather than stressful.
          Highly recommend it to anyone who wants to travel smart and stress-free.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Chitrarth Shrivas</h6>
            <p>Customer</p>
          </div>
        </div>
    </div>
    <div className = "testimonial py-4 px-3">
        <p>The information provided was top-notch and helped me discover hidden gems in Turkey.
          I liked how everything was laid out clearly—from weather to custom tour options.
          Would be perfect with a live support feature for quick queries.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Yashasvi Singh</h6>
            <p>Customer</p>
          </div>
        </div>
    </div>
  </Slider> 
};
export default Testimonials;