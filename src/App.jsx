import { BrowserRouter } from "react-router-dom";
import "./App.css";
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

//https://api.spoonacular.com/recipes/complexSearch?apiKey=f2a0dcfd87b64468a70fc505017a4576
//https://jsonplaceholder.typicode.com/users
