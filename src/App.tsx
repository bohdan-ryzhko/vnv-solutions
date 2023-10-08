import { FC } from "react";
import { Footer, Header } from "./components";
import {
  FAQ,
  Hero,
  Projects,
  Services,
  WhyUs,
} from "./sections";

import 'animate.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyUs />
      <Services />
      <Projects />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
