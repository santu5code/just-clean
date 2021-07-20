import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    return (
        <>
            
            <Container className="aboutus"> 
        <h2 className="mt-4 workplace-header">
          About Us
        </h2>
        <hr width={"80px"} />
        <div>
          <p className="workplace-text">
            Our robust suit of transpotation solutions delivers greater
            <br />
            efficiency to your organizations supply chain.
          </p>
        </div>
        <Row >
            <Col md={4} sm={10}><h1 className="aboutus-head ">10</h1><p className="certification-text">Trusted Year</p></Col>
            <Col md={4} sm={10}><h1 className="aboutus-head ">240</h1><p className="certification-text">Satisfied customers</p></Col>
            <Col md={4} sm={10}><h1 className="aboutus-head ">600</h1><p className="certification-text">Clean Spaces</p></Col>
        </Row>
        </Container>
        
        </>
    )
}

export default About
