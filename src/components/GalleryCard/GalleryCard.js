import "./GalleryCard.css";

function GalleryCard({ imgData }) {
  console.log(imgData);

  const imgUrl = imgData.webformatURL;
  const imgTagDescription = imgData.tags;
  return (
    <div className="container">
      <div className="card">
        <img src={imgUrl} alt={imgTagDescription} />
      </div>
      <title className="description">{imgTagDescription}</title>
    </div>
  );
}

export default GalleryCard;
