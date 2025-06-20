import Slider from 'react-slick';
import './ImageCarousel.css';

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 4,        // number of images visible
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const imageUrls = [
        "https://via.placeholder.com/300x150?text=Banner+1",
        "https://via.placeholder.com/300x150?text=Banner+2",
        "https://via.placeholder.com/300x150?text=Banner+3",
        "https://via.placeholder.com/300x150?text=Banner+4",
        "https://via.placeholder.com/300x150?text=Banner+5",
        "https://via.placeholder.com/300x150?text=Banner+6"
    ];

    return (
        <div className="carouselWrapper">
            <Slider {...settings}>
                {imageUrls.map((url, index) => (
                    <div key={index} className="carouselImageContainer">
                        <img src={url} alt={`Banner ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
