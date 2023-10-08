import { Slide, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Notifications = () => (
  <ToastContainer
    position="top-right"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    pauseOnHover
    theme="colored"
    transition={Slide}
  />
);
