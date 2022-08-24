import { Routes, Route } from "react-router-dom";
import Burgers from "./components/Burgers";
import Dessert from "./components/Dessert";
import Drinks from "./components/Drinks";
import Home from "./components/Home";
import Pizza from "./components/Pizza";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burgers" element={<Burgers />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/dessert" element={<Dessert />} />
      </Routes>
    </>
  );
}

export default App;
