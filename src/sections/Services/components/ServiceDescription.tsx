import sass from "../Services.module.scss";
import { useReduxState } from "../../../hooks";
import { FC } from "react";
import { AnimatedBoxes } from "./AnimatedBoxes";

export const ServiceDescription: FC = () => {
  const { services } = useReduxState();

  return (
    <div className={sass.descriptionWrapper}>
      {
        services.services.length > 0 &&
        <AnimatedBoxes currentService={services.services[services.currentService]} />
      }
    </div>
  )
}
