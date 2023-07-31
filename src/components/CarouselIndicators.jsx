const CarouselIndicators = ({ images, currentIndex, switchIndex }) => (
  <>
    <div className="carousel-indicators">
      {images.map((_, index) => (
        <button key={index}
          className={`carousel-indicator-item ${
            currentIndex === index ? "active" : ""
          }`}
          onClick={() => switchIndex(index)}
        ></button>
      ))}
    </div>
  </>
);



export default CarouselIndicators;
