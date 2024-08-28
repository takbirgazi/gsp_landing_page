import { Carousel } from "flowbite-react";
import './Hero.css';

import image1 from "./../../assets/images/sliderImage-1.jpg";
import image2 from "./../../assets/images/sliderImage-2.jpg";
import image3 from "./../../assets/images/sliderImage-3.jpg";
import image4 from "./../../assets/images/sliderImage-4.jpg";

function Hero() {

    return (
        <div className="h-56 md:h-80 lg:h-[650px] flex items-center justify-center mb-10">
            <Carousel className="mt-32">
                <img className="h-full" src={image1} />
                <img className="h-full" src={image2} />
                <img className="h-full" src={image3} />
                <img className="h-full" src={image4} />
            </Carousel>
        </div>
    );
}

export default Hero;