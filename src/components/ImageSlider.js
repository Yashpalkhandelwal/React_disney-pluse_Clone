import React from 'react'
import styled from 'styled-components'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
};
    return (
        <Carousel {...settings}>  
        <Wrap>
            <img src="/images/slider-badging.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/slider-badging.jpg"/>
        </Wrap>
         
  
        </Carousel>
    )
}

export default ImageSlider


const Carousel = styled(Slider) `
`

const Wrap = styled.div `
`