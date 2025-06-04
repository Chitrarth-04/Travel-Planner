import React from 'react'
import ServiceCard from "./ServiceCard";
import {Col } from "reactstrap"; 
        
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
                                    
const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Plan ahead with real-time forecasts, so you're ready for every sunrise, storm, and sunset.",
                                    
      },
      {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Navigate every journey with expert tips, local insights, and must-see spots curated just for you.",
      },
      {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Craft your perfect adventure—choose your pace, your style, and your unforgettable path.",
                                    
      },
]


const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))} I
    </>
  );
};

export default ServiceList