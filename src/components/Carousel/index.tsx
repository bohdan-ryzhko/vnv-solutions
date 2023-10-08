import sass from "./Caruosel.module.scss";
import { FC } from 'react';
import { Parallax, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { CreateOrderButton } from "./components";

const slides = [
  { id: "1", text: "Technical Expertise: An IT company possesses high technical proficiency and experience in the field of information technology, enabling it to deliver high-quality services and solutions." },
  { id: "2", text: "Innovation and Technological Progress: IT companies are always at the forefront of technological innovations and developments, allowing them to offer cutting-edge technological solutions to clients." },
  { id: "3", text: "Flexibility and Adaptability: IT companies can quickly adapt to changing client needs and market dynamics, making them competitive." },
  { id: "4", text: "Efficiency and Automation: IT companies use automation and process optimization to achieve higher efficiency and reduce costs." },
  { id: "5", text: "Skilled Team: IT companies can attract and maintain highly qualified professionals on their team, ensuring the successful completion of tasks." },
  { id: "6", text: "Customer-Centric Approach: IT companies are customer-focused and aim to meet client needs, striving to build long-term relationships by providing personalized solutions." },
];

export const Carousel: FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span style="width: 15px; height: 15px; background-color: #fff" class="' + className + '"></span>';
    },
  };
  return (
    <>
      <Swiper
        speed={800}
        style={{ height: "100%" }}
        parallax={true}
        pagination={pagination}
        modules={[Parallax, Pagination]}
      >
        <div className={`${sass.parallaxBG} parallax-background`} slot="container-start" data-swiper-parallax="-23%" />
        {
          slides.map(({ text, id }) => (
            <SwiperSlide key={id}>
              <div className={sass.sliderBody}>
                <div className={sass.wrapperTitle} data-swiper-parallax="-100">
                  <h4 className={sass.title}>{text}</h4>
                  <CreateOrderButton />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
};
