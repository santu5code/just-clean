import React from 'react'
import About from './About'
import Banner from './Banner'
import Certifications from './Certifications'
import Contact from './Contact'
import NavBar from './NavBar'
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
        </>
    )
}

export default Home
