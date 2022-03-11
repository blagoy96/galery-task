import "./GalleryCard.css";

function GalleryCard({ imgData }) {
  console.log(imgData);

  const imgUrl = imgData.webformatURL;
  const imgTagDescription = imgData.tags;
  return (
    <div className="container">
      <div className="card">
        <img src={imgUrl} alt={imgTagDescription} />
        <title className="description">{imgTagDescription}</title>
      </div>
    </div>
  );
}

export default GalleryCard;
