import sass from "./Services.module.scss";
import { FC } from "react";
import { Container, Title } from "../../components";
import { useFetchServices } from "../../hooks";
import { ServiceDescription, ServicesNavigation } from "./components";

export const Services: FC = () => {
  useFetchServices();

  return (
    <section id="services" className={sass.servicesSection}>
      <Container>
        <div className={sass.servicesInner}>
          <Title title="Services" />
          <div className={sass.servicesBody}>
            <ServicesNavigation />
            <ServiceDescription />
          </div>
        </div>
      </Container>
    </section>
  )
};
