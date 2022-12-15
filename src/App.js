import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MealCard from './MealCard/Mealcard';
import Shipping from "./Shipping/Shipping";
import CheckOut from "./CheckOut/CheckOut"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<MealCard />} />
          <Route path="MealCard" element={<MealCard />} />
          <Route path="Shipping" element={<Shipping />} />
          <Route path="CheckOut" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
