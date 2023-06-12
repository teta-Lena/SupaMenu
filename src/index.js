import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
// import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import RestoInfoPage from "./Pages/RestoInfoPage";
import RestoTypePage from "./Pages/RestoTypePage";
import CreateMenu from "./Pages/CreateMenu";
import DrinksPage from "./Pages/DrinksPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import store from "./store";
import axios from "axios";
import Dashboard from "./Pages/Dashboard";

axios.defaults.baseURL = "http://localhost:4000/";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="restaurant" element={<RestoInfoPage />} />
        <Route path="restaurantdetails" element={<RestoTypePage />} />
        <Route path="drinksmenu" element={<CreateMenu />} />
        <Route path="drinks" element={<DrinksPage />} />
      </Routes>
    </Router>
    {/* <React.StrictMode> */}
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
    {/* </React.StrictMode> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
