import React from 'react'
import About from './About'
import Banner from './Banner'
import Certifications from './Certifications'
import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar'
import Review from './Review'
import ScrollButton from './ScrollButton'
import Workplaces from './Workplaces'

const Home = () => {
    return (
        <>
        <NavBar />
        <Banner />
        <Workplaces />
        
       
        <Certifications />
        <About />
        <Contact />
        <Review />
        <ScrollButton />
        <Footer />
        
        </>
    )
}

export default Home
