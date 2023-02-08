import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "Images/b4.jpg" },
  { url: "Images/b5.jpg" },
  { url: "Images/b6.jpg" },
  { url: "Images/b7.jpg" },
  { url: "Images/b8.jpg" },
  { url: "Images/b6.jpg" },
  { url: "Images/b8.jpg" },
];

const ImageSlider = () => {
  return (
    <div className="ImageSlider">
      <SimpleImageSlider
        width={1295}
        height={304}
        images={images}
        showBullets={false}
        showNavs={true}
      />
    </div>
  );
};
export default ImageSlider;
