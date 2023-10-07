import { FC } from "react";
import { Header } from "./components";
import { Hero, Services, WhyUs } from "./sections";

import 'animate.css';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyUs />
      <Services />
    </div>
  );
}

export default App;
