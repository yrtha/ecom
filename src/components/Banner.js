import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className="">
          <img src="https://links.papareact.com/gi1" loading="lazy" alt="" />
        </div>
        <div className="">
          <img src="https://links.papareact.com/6ff" loading="lazy" alt="" />
        </div>
        <div className="">
          <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" loading="lazy" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
 