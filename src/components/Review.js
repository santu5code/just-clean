import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, Image } from "react-bootstrap";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import CarClean from "../assets/carclean.jpg"
import LadyClean from "../assets/ladyclean.jpg"
import WashCar from "../assets/washCar.jpg"

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowDropleftCircle style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowDroprightCircle style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Review = () => {
  return (
    <Container >
    <h2 className="mt-4 workplace-header">
      See what our customer have to say
    </h2>
    <hr width={"80px"} />
    <div className="testimonial" style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <div style={{ width: "50%", textAlign: "center" }}>
        
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img={CarClean} />
          <Card img={LadyClean} />
          <Card img={WashCar} />
        </Slider>
      </div>
    </div>
    </Container>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Image
        src={img}
        style={{
           borderRadius: "50%" , 
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
        Media Analyst
      </p>
    </div>
  );
};

export default Review;
