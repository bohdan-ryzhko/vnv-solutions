import sass from "../Services.module.scss";
import { useReduxState } from "../../../hooks";
import { FC } from "react";
import { AnimatedBoxe } from "./AnimatedBoxe";

export const ServiceDescription: FC = () => {
  const { services } = useReduxState();

  return (
    <div className={sass.descriptionWrapper}>
      {
        services.services.length > 0 &&
        <AnimatedBoxe currentService={services.services[services.currentService]} />
      }
    </div>
  )
}
