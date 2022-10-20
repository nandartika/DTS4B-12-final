import logo from "./logo.svg";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:idNews" element={<DetailPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
