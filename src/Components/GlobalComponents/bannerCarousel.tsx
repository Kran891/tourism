import React, { useEffect, useRef, useState } from 'react'

const BannerCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselItems = [
        'https://cdn-images-rayna.imgix.net/imgiximages/Imagewise-Banner/429/formula-1-abu-dhabi-grand-prix-web-bnr.jpg?w=1920&h=540&auto=compress%2Cformat',
        'https://cdn-images-rayna.imgix.net/imgiximages/Imagewise-Banner/406/singapore-web-bnr-tours.jpg?w=1920&h=540&auto=compress%2Cformat',
        'https://cdn-images-rayna.imgix.net/imgiximages/Imagewise-Banner/519/laperle-kids-go-free-web-bnr.jpg?w=1920&h=540&auto=compress%2Cformat'
    ];

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const showItem = (index: any) => {
        setCurrentIndex((index + carouselItems.length) % carouselItems.length);
    };

    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 10000);
    };

    const stopAutoScroll = () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
    };

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, []);

    return (
        <div className="bg-gray-100 flex">
            <div
                id="carousel"
                className="relative w-full"
                onMouseEnter={stopAutoScroll}
                onMouseLeave={startAutoScroll} >
                {carouselItems.map((src, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? 'block' : 'hidden'}`}
                    >
                        <img src={src} className="w-full" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
                <button
                    onClick={() => showItem(currentIndex - 1)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2"
                >
                    Prev
                </button>
                <button
                    onClick={() => showItem(currentIndex + 1)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default BannerCarousel