import "./GalleryCard.css";
import context from "../Context/Context";
import { useContext } from "react";

function GalleryCard() {
  const { imgData } = useContext(context);
  console.log(imgData);
  const description = "my description";
  const imgUrl = imgData ? `${imgData[0].previewURL}` : "";
  //const imgTag = imgData ? "img" : `${imgData[0].tags}`;
  return (
    <div className="card">
      <img src={imgUrl} alt={"car"} />
      <div>Custom Title</div>
      <div>{description}</div>
    </div>
  );
}

export default GalleryCard;
