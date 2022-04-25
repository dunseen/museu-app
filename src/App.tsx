import { BrowserRouter } from "react-router-dom";
import { MainContextProvider } from "./context/MainContext";

import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <MainContextProvider>
        <Routes />
      </MainContextProvider>
    </BrowserRouter>
  );
}

export default App;
