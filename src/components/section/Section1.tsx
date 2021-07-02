
import styles from '../../style/components/section/section.module.css';
import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Section1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
    
    };
    return (
      <div className={styles.containerSlider}>
        <h2>Populares na Netflix </h2>
        <Slider {...settings}>
          <div >
            <img src="./img/mini1.jpg" alt="" />
          </div>
          <div>
          <img src="./img/mini2.jpg" alt="" />
          </div>
          <div>
          <img src="./img/mini3.jpg" alt="" />
          </div>
          <div>
          <img src="./img/mini4.jpg" alt="" />
          </div>
          <div>
          <img src="./img/mini5.jpg" alt="" />
          </div>
          <div>
          <img src="./img/mini6.jpg" alt="" />
          </div>
          <div>
          <img src="./img/mini7.jpg" alt="" />
          </div>
          <div>
          <img src="./img/mini8.jpg" alt="" />
          </div>
          <div>
          <img src="./img/mini9.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}