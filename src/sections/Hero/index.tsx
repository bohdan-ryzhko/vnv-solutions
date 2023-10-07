import sass from "./Hero.module.scss";
import { FC } from "react";
import { Container, MagnitButton } from "../../components";

export const Hero: FC = () => {
  return (
    <section className={sass.hero}>
      <Container>
        <div className={sass.heroInner}>
          <div className={sass.heroText}>
            <h1 className={sass.heroTitle}>
              Easy, quality, IT -
              <br />
              <b>w</b>inning&nbsp;
              <b>solutions</b>
              <br />
              for your business
            </h1>
            <MagnitButton text="order" href="#create-roder" />
          </div>
        </div>
      </Container>
    </section>
  )
};
