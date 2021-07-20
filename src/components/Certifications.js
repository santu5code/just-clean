import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {IoPersonOutline} from 'react-icons/io5'
import {BsFillCalendarFill} from 'react-icons/bs'
import {RiProductHuntLine} from 'react-icons/ri'
const Certifications = () => {
    return (
        <>
        <div className="certification">
            <Container >
        <h2 className="mt-4 workplace-header">
          Certifications
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
            <Col md={4} sm={10}><IoPersonOutline className="certification-icon mt-2 mb-2" />
            <h5 className="certification-secondheader mt-2 mb-2">Experianced Providers</h5>
            <p className="certification-text mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Tempora est nostrum dolores consequatur animi reprehenderit vitae dolorum in veritatis repudiandae?</p>
            </Col>
            <Col md={4} sm={10}><BsFillCalendarFill className="certification-icon mt-2 mb-2" />
            <h5 className="certification-secondheader mt-2 mb-2">Customized Schedule</h5>
            <p className="certification-text mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Tempora est nostrum dolores consequatur animi reprehenderit vitae dolorum in veritatis repudiandae?</p>
            </Col>
            <Col md={4} sm={10}><RiProductHuntLine className="certification-icon mt-2 mb-2" />
            <h5 className="certification-secondheader mt-2 mb-2">Advanced product</h5>
            <p className="certification-text mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora est nostrum dolores consequatur animi reprehenderit vitae dolorum in veritatis repudiandae?</p>
            </Col>
        </Row>
        </Container>
        </div>
        </>
    )
}

export default Certifications
