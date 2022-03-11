import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import GoogleAuthProvider from "./components/Login/GoogleAuthProvider";
import GalleryPage from "./components/GalleryPage/GalleryPage";

function App() {
  return (
    <GoogleAuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </GoogleAuthProvider>
  );
}

export default App;
