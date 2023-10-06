import { useDispatch } from "react-redux";
import { Container } from "../Container";
import sass from "./Header.module.scss";
import { FC, useEffect } from "react";
import { AppDispatch } from "../../redux";
import { fetchServices } from "../../redux/services";
import { useReduxState } from "../../hooks";

export const Header: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { services } = useReduxState();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  console.log(services);

  return (
    <header className={sass.header}>
      <Container>
        <h1>Test task</h1>
      </Container>
    </header>
  )
}
