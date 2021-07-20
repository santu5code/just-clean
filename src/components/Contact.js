import { Button } from 'react-bootstrap';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const Contact = () => {
    return (
        <>
          <div className="contact">
            <Container >
        <h2 className="mt-4 workplace-header">
          Contact
        </h2>
        <hr width={"80px"} />
        <div>
          <p className="workplace-text">
            prefer to email us?
          </p>
        </div> 
        <Form>
            <Row >
              <Col md={4} sm={10} className="mt-2">
                <Form.Control type="text" placeholder="Name*" />
              </Col>
              <Col md={4} sm={10} className="mt-2">
                <Form.Control type="email" placeholder="Email*" />
              </Col>
            </Row>
            <Row className="mt-3" >
              <Col md={4} sm={10}className="mt-2">
                <Form.Control type="text" placeholder="phone*" />
              </Col>
              <Col md={4} sm={10} className="mt-2">
                <Form.Control type="text" placeholder="Address*" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={8} sm={10} className="mt-2">
              <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={2} sm={2}><Button className="form-button" >Send</Button></Col>
              <Col md={6} sm={8}><p className="mt-2 workplace-text">By clicking to send button you can leave us a message.</p></Col>
            </Row>
          
          </Form>
        </Container>
        </div>          </>
    )
}

export default Contact
