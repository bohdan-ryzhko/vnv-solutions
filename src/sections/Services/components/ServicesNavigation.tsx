import sass from "../Services.module.scss";
import { FC } from "react";
import { ServiceTitle } from "./ServiceTitle";

type ServiceItem = {
  text: string,
  id: number,
}

const servicesNavigation: ServiceItem[] = [
  { text: "Landing page", id: 0 },
  { text: "Multi-page website", id: 1 },
  { text: "Online store", id: 2 },
  { text: "Website audit", id: 3 },
  { text: "Individual consultation", id: 4 },
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
