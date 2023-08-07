import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import CountPage from "./pages/CountPage";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/gio-hang" element={<CartPage />} />
      <Route path="/count" element={<CountPage />} />
    </Routes>
  );
}

export default App;
