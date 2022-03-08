import "./App.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginProvider from "./components/Login/LoginProvider";

function App() {
  return (
    <LoginProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gallery" element={<Header />} />
      </Routes>
    </LoginProvider>
  );
}

export default App;
