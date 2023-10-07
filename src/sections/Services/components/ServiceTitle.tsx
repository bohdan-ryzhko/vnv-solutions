import { FC } from "react";
import sass from "../Services.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux";
import { setCurrentService } from "../../../redux/services";
import { useReduxState } from "../../../hooks";

type ServiceTitleProps = {
  text: string,
  id: number,
}

export const ServiceTitle: FC<ServiceTitleProps> = ({ text, id }) => {
  const { services } = useReduxState();
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeCurrentService = () => {
    dispatch(setCurrentService(id));
  }

  const defineActiveService = services.currentService === id
    ? sass.serviceButtonActive
    : sass.serviceButton;

  return (
    <li className={sass.serviceTitle}>
      <button
        className={defineActiveService}
        onClick={handleChangeCurrentService}
      >
        {text}
      </button>
    </li>
  )
};
