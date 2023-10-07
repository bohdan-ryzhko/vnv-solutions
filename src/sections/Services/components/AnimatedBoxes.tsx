import sass from "../Services.module.scss";
import { FC } from "react";
import { Service } from "../../../d";
import { useAnimatedServices } from "../../../hooks";

import 'animate.css';

type AnimatedBoxesType = {
  currentService: Service,
}

export const AnimatedBoxes: FC<AnimatedBoxesType> = ({ currentService }) => {
  const isAnimated = useAnimatedServices(currentService);

  return (
    <div className={`services__box animate__animated ${isAnimated ? "animate__fadeInUp" : ""}`}>
      <div className={sass.descriptionBox}>
        <h3 className={sass.descriptionTitle}>{currentService.title}</h3>
        <p className={sass.descriptionText}>{currentService.description}</p>
        <h4 className={sass.descriptionBenefitTitle}>{currentService.benefitTitle}</h4>
        <ul className={sass.descriptionBenefits}>
          {
            currentService.benefits.map(({ image, text }) => (<li key={text} className={sass.descriptionBenefit}>
              <img className={sass.descriptionBenefitImage} src={image} alt={text} />
              <p className={sass.descriptionBenefitText}>{text}</p>
            </li>))
          }
        </ul>
      </div>
      <div className={sass.descriptionBox}>
        <img src={currentService.image} alt={currentService.title} />
      </div>
    </div>
  )
};
