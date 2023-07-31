/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from 'react';
import '../css/Carousel.css';

import CarouselControls from './CarouselControls';
import CarouselIndicators from './CarouselIndicators';

const Carousel = ({images}) => {

    const [currentImage, setCurrentImage] = useState(0);
    const carouselInterval = useRef();

    const prev = () => {
        startCarouselTimer()
        const index = currentImage > 0 ? currentImage - 1 : images.length - 1
        setCurrentImage(index)
    }

    const next = () => {
        startCarouselTimer()
        const index = currentImage < images.length - 1 ? currentImage + 1 : 0
        setCurrentImage(index)
    }

    const switchIndex = (index) => {
        startCarouselTimer()
        setCurrentImage(index)
    }

    const startCarouselTimer = () => {
        stopCarouselTimer()
        carouselInterval.current = setInterval(() => {
            setCurrentImage(currentImage => currentImage < images.length - 1 ? currentImage + 1 : 0)
        }, 3000)
    }

    const stopCarouselTimer = () => {
        if (carouselInterval.current) {
            clearInterval(carouselInterval.current)
        }
    }

    useEffect(() => {
        startCarouselTimer();

        return () => stopCarouselTimer;

    }, [])

    return (
        <>
        <div className='carousel-container'>
        <CarouselControls prev={prev} next={next} />
            <div className='carousel'>
                <div
                    className="carousel-inner"
                    style={{transform: `translate(${-currentImage *  100}%)`}}
                >
                    {images.map((img, key) => (
                        <div key={key} className="carousel-item" onMouseEnter={stopCarouselTimer} onMouseOut={startCarouselTimer}>
                            <img src={img.src} alt={img.alt} key={key} />
                            <div className="mask"></div>
                            <p>{img.title}</p>
                        </div>
                    ))}
                </div>

                <CarouselIndicators images={images} currentIndex={currentImage} switchIndex={switchIndex}/>
            </div>
        </div>
    </>
    )
}

export default Carousel;
