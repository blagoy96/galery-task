import { useState, useEffect } from "react";
import { useGoogleAuth } from "../Login/GoogleAuthProvider";
import Header from "../Header/Header";
import Search from "../Search/Search";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./GalleryPage.css";

function GalleryPage() {
  const [imgData, setImgData] = useState([]);
  const googleAuth = useGoogleAuth();
  const fetchImgData = (searchString) => {
    const apiKey = "26063464-c0b2aa3c530362d1b3217b136";
    const URL = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
      searchString
    )}&per_page=16`;
    fetch(URL).then((result) =>
      result.json().then((res) => setImgData(res.hits))
    );
  };

  const searchInputChange = (value) => {
    fetchImgData(value);
  };

  useEffect(() => {
    fetchImgData(null);
  }, []);

  // useEffect(() => {
  //   if (googleAuth.isInitialized && !googleAuth.isSignedIn) {
  //     setImgData([]);
  //   }
  // }, [googleAuth, setImgData]);                 == when user is sign out the page is empty!!
  return (
    <>
      <Header />
      <div className="search">
        <Search onChangeHandler={searchInputChange} />
      </div>
      <div className="gallery">
        {imgData.map((x) => (
          <GalleryCard imgData={x} key={x.id} />
        ))}
      </div>
    </>
  );
}

export default GalleryPage;
