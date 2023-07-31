import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CarouselControls = ({prev, next}) => (
    <>
        <button className="carousel-control left" onClick={prev}><BsArrowLeft /></button>
        <button className="carousel-control right" onClick={next}><BsArrowRight /></button>
    </>
)

export default CarouselControls;