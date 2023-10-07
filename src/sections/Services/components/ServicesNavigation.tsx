import sass from "../Services.module.scss";
import { FC } from "react";
import { ServiceTitle } from "./ServiceTitle";

type ServiceItem = {
  text: string,
  id: number,
}

const servicesNavigation: ServiceItem[] = [
  { text: "Landing page", id: 0 },
  { text: "Багатосторінковий сайт", id: 1 },
  { text: "Інтернет магазин", id: 2 },
  { text: "Аудит сайту", id: 3 },
  { text: "Індивідуальна консультація", id: 4 },
];

export const ServicesNavigation: FC = () => {
  return (
    <ul className={sass.servicesNavigation}>
      {
        servicesNavigation.map((serviceItem) => <ServiceTitle key={serviceItem.id} {...serviceItem} />)
      }
    </ul>
  )
}
