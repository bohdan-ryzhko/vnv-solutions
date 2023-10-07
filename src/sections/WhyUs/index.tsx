import sass from "./WhyUs.module.scss";
import { FC } from "react";
import { Carousel } from "../../components";

export const WhyUs: FC = () => {
  return (
    <section className={sass.sectionWhyUs}>
      <Carousel />
    </section>
  )
};
