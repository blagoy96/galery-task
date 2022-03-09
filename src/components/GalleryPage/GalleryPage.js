import Header from "../Header/Header";
import Search from "../Search/Search";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./GalleryPage.css";
import context from "../Context/Context";
import { useState, useEffect } from "react";

function GalleryPage() {
  const [imgData, setImgData] = useState(null);

  const apiKey = "26063464-c0b2aa3c530362d1b3217b136";
  const URL =
    "https://pixabay.com/api/?key=" +
    apiKey +
    "&q=" +
    encodeURIComponent("audi");
  useEffect(() => {
    fetch(URL).then((result) =>
      result.json().then((res) => setImgData(res.hits))
    );
  }, []);
  return (
    <>
      <Header />
      <context.Provider value={{ imgData, setImgData }}>
        <div className="search">
          <Search />
        </div>
        <GalleryCard />
      </context.Provider>
    </>
  );
}

export default GalleryPage;
