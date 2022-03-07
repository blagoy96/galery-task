import "./App.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/galery" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
