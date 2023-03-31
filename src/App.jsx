import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/TopBar";
import TypesOfFood from "./components/TypesOfFood";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <TypesOfFood />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;