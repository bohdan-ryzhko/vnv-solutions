import sass from "./Projects.module.scss";
import { FC } from "react";
import { Carousel } from "./components";
import { Title } from "../../components";

export const Projects: FC = () => {
  return (
    <section className={sass.profectsSection}>
      <Title title="Projects" />
      <Carousel />
    </section>
  )
}
