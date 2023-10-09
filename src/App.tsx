import { FC } from "react";
import { Footer, Form, Header, Modal, Notifications } from "./components";
import {
  Contacts,
  FAQ,
  Hero,
  Projects,
  Services,
  WhyUs,
} from "./sections";

import 'animate.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useOpenModal, useScroll } from "./hooks";

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useScroll();

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  }

  useOpenModal({ seconds: 10, handleToggleModal });

  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyUs />
      <Services />
      <Projects />
      <Contacts />
      <FAQ />
      <Footer />
      <Notifications />
      <Modal
        open={isModalOpen}
        handleToggle={handleToggleModal}
        title="Get a free consultation right now!"
      >
        <Form />
      </Modal>
    </div>
  );
}

export default App;
