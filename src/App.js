import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RestoInfoPage from "./Pages/RestoInfoPage";
import Dashboard from "./Pages/Dashboard";
import RegisterPage from "./Pages/RegisterPage";
import RestoTypePage from "./Pages/RestoTypePage";

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <LoginPage/> */}
      {/* <RestoInfoPage /> */}
      {/* <Dashboard /> */}
      {/* <RegisterPage /> */}
      <RestoTypePage />
    </div>
  );
}

export default App;
