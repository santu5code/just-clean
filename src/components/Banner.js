import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerImg from '../assets/banner.png'
const Banner = () => {
    return (
        <>
           <figure className="position-relative banner text-center">
               <img src={BannerImg} alt="banner" className="img-fluid" />
               
               <figcaption>
               <Container>
                   <h1 className="banner-head ">RELIABLE COMMERCIAL CLEANING IN <span className="banner-head-last">FLORIDA</span></h1>
                   <p className="banner-text">Create clean healthy work environment tailored for your needs.</p>
                   <Link to="/book" className="banner-btn">Book a cleaning</Link>
                </Container>
               </figcaption>
               </figure> 
        </>
    )
}

export default Banner

