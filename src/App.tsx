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
import { useScroll } from "./hooks";

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useScroll();

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
        handleToggle={setIsModalOpen}
        title="Get a free consultation right now!"
      >
        <Form />
      </Modal>
    </div>
  );
}

export default App;
