import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ContextProvider from "./components/Login/ContextProvider";
import GalleryPage from "./components/GalleryPage/GalleryPage";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
