
import NextArrow from '../Assets/carousal-avatars/next-arrow.png'
import PrevArrow from '../Assets/carousal-avatars/prev-arrow.png'
export var singleSlideCarousal = {
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   className: "avatar-slider",
   initialSlide: 0,
   prevArrow: <img src={PrevArrow} alt="arrows" className="prev-arrow" />,
   nextArrow: <img src={NextArrow} alt="arrows" className="next-arrow" />,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: false
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: false,
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
         }
      }
   ]
};