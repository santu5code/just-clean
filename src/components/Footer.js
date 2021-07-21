import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {RiLinkedinBoxFill} from 'react-icons/ri'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => { 
    return (
        <>
        <div className="footer">
            <Container className="pt-5 text-white">
                <Row>
                    <Col md={4} sm={4} >
                        <h2>Just Clean</h2>
                        <div className="mt-4 mb-3" >
                        <Link className="text-white p-2"><FaFacebook /></Link>
                        <Link className="text-white p-2"><AiFillTwitterCircle /></Link>
                        <Link className="text-white p-2"><RiLinkedinBoxFill /></Link>
                        </div>
                        <p>9856427825</p>
                        <p>9856427825</p>
                    </Col>
                    <Col  className="menu">
                         <h2>Menu</h2>
                         <div className="links">
                            <Link to="/">Home</Link>
                            <Link to="/contacts">Contact</Link>
                            <Link to="/">Facility</Link>
                            <Link to="/about">About</Link>
                            <Link to="/book">Book</Link>
                            </div>
                    </Col>
                    <Col md={4} sm={10} >
                    <h2 className='mb-3'>Office Location</h2>
                    <p>Just in a side of big mart shopping place and fun park.</p>
                    </Col>
                </Row>
                <hr />
                <Row><p className="text-center ">@copy Right just clean 2019</p></Row>
            </Container>
        </div>
            
        </>
    )
}

export default Footer
