import { FC } from "react";
import { Header } from "./components";
import { Hero, Services } from "./sections";

import 'animate.css';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
