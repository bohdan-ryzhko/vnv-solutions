import sass from "./Caruosel.module.scss";
import { FC } from 'react';
import { Parallax, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { CreateOrderButton } from "./components";

const slides = [
  { text: "Technical Expertise: An IT company possesses high technical proficiency and experience in the field of information technology, enabling it to deliver high-quality services and solutions." },
  { text: "Innovation and Technological Progress: IT companies are always at the forefront of technological innovations and developments, allowing them to offer cutting-edge technological solutions to clients." },
  { text: "Flexibility and Adaptability: IT companies can quickly adapt to changing client needs and market dynamics, making them competitive." },
  { text: "Efficiency and Automation: IT companies use automation and process optimization to achieve higher efficiency and reduce costs." },
  { text: "Skilled Team: IT companies can attract and maintain highly qualified professionals on their team, ensuring the successful completion of tasks." },
  { text: "Customer-Centric Approach: IT companies are customer-focused and aim to meet client needs, striving to build long-term relationships by providing personalized solutions." },
];

export const Carousel: FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
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
          slides.map(({ text }) => (
            <SwiperSlide>
              <div className={sass.wrapperTitle} data-swiper-parallax="-100">
                <h4 className={sass.title}>{text}</h4>
                <CreateOrderButton />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
};
