import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux";
import { useEffect } from "react";
import { fetchServices } from "../redux/services";

export const useFetchServices = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
};
