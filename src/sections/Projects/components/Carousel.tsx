import sass from "../Projects.module.scss";
// @ts-ignore
import Slider from "react-slick";

import CarouselImg1 from "../../../assets/projects/carousel-img-1.jpg"
import CarouselImg2 from "../../../assets/projects/carousel-img-2.jpg"
import CarouselImg3 from "../../../assets/projects/carousel-img-3.jpg"
import CarouselImg4 from "../../../assets/projects/carousel-img-4.jpg"
import CarouselImg5 from "../../../assets/projects/carousel-img-5.jpg"
import { WantButton } from "../../../components";
import { CSSProperties } from "react";

const projectsSlides = [
  { text: "TechPro Solutions", id: "1", image: CarouselImg1 },
  { text: "InnoWave Innovations", id: "2", image: CarouselImg2 },
  { text: "DigitalScape Ventures", id: "3", image: CarouselImg3 },
  { text: "WebMasters United", id: "4", image: CarouselImg4 },
  { text: "CodeCrafted Creations", id: "5", image: CarouselImg5 },
];

export const Carousel = () => {
  const buttonStyles: CSSProperties = {
    position: "absolute",
    bottom: 0,
    width: "100%",
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 600,

    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "10px",
          }
        }
      ]
  };

  return (
    <>
      <Slider style={{ height: "100%", gap: 50, }} {...settings}>
        {
          projectsSlides.map(({ text, id, image }) => (
            <div key={id} className={sass.slide}>
              <img className={sass.slideImg} src={image} alt={text} />
              <p className={sass.slideText}>{text}</p>
              <WantButton
                text="more"
                styles={buttonStyles}
              />
            </div>
          ))
        }
      </Slider>
    </>
  );
}
