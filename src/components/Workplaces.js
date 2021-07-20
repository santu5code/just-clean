import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BakingSoda from '../assets/bakingsoda.jpg';
import CarClean from '../assets/carclean.jpg';
import Spray from '../assets/spray.jpg';
import WashCar from '../assets/washCar.jpg';
import WindowClean from '../assets/windowclean.jpg';
import LadyClean from '../assets/ladyclean.jpg';


const Workplaces = () => {
  return (
    <>
      <Container className="workplace">
        <h2 className="mt-4 workplace-header">
          We work with all types of Workplaces
        </h2>
        <hr width={"80px"} />
        <div>
          <p className="workplace-text">
            Our robust suit of transpotation solutions delivers greater
            <br />
            efficiency to your organizations supply chain.
          </p>
        </div>
        <Row>
          <Col md={4} sm={10}>
            <figure className="position-relative workplace-fig ">
              <img src={BakingSoda} alt="bakingsoda" className="img-fluid" />
              <figcaption className="top-caption" >
                  <span className=" text-white">Education</span>
              </figcaption>
              <figcaption className="bottom-caption">
              <Link className="workplace-btn" to="/learn">Learn More</Link>
              </figcaption>
            </figure>
          </Col>
          <Col md={4} sm={10} >
          <figure className="position-relative workplace-fig ">
              <img src={CarClean} alt="carclean" className="img-fluid" />
              <figcaption className="top-caption" >
                  <span className=" text-white">Medical</span>
              </figcaption>
              <figcaption className="bottom-caption">
              <Link className="workplace-btn" to="/learn">Learn More</Link>
              </figcaption>
            </figure>
          </Col>
          <Col md={4} sm={10}>
          <figure className="position-relative workplace-fig ">
              <img src={Spray} alt="spray" className="img-fluid" />
              <figcaption className="top-caption" >
                  <span className=" text-white">Hospitality</span>
              </figcaption>
              <figcaption className="bottom-caption">
              <Link className="workplace-btn" to="/learn">Learn More</Link>
              </figcaption>
            </figure>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={10}>
          <figure className="position-relative workplace-fig ">
              <img src={WashCar} alt="washcar" className="img-fluid" />
              <figcaption className="top-caption" >
                  <span className=" text-white">Fitness</span>
              </figcaption>
              <figcaption className="bottom-caption">
              <Link className="workplace-btn" to="/learn">Learn More</Link>
              </figcaption>
            </figure>
          </Col>
          <Col md={4} sm={10}>
          <figure className="position-relative workplace-fig ">
              <img src={WindowClean} alt="widowclean" className="img-fluid" />
              <figcaption className="top-caption" >
                  <span className=" text-white">Corporate</span>
              </figcaption>
              <figcaption className="bottom-caption">
              <Link className="workplace-btn" to="/learn">Learn More</Link>
              </figcaption>
            </figure></Col>
          <Col md={4} sm={10}>
          <figure className="position-relative workplace-fig ">
              <img src={LadyClean} alt="ladyclean" className="img-fluid" />
              <figcaption className="top-caption" >
                  <span className=" text-white">Office</span>
              </figcaption>
              <figcaption className="bottom-caption">
              <Link className="workplace-btn" to="/learn">Learn More</Link>
              </figcaption>
            </figure></Col>
        </Row>
      </Container>
    </>
  );
};

export default Workplaces;
