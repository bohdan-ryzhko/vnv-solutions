import { FC } from "react";
import { Header } from "./components";
import { Services } from "./sections";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Services />
    </div>
  );
}

export default App;
