import { Carousel } from "flowbite-react";
import './Hero.css';

function Hero() {

    return (
        <div className="h-56 md:h-72 lg:h-[450px] flex items-center justify-center mb-10">
            <Carousel className="mt-32">
                <img className="h-full" src="./src/assets/images/sliderImage-1.jpg" alt="..." />
                <img className="h-full" src="./src/assets/images/sliderImage-2.jpg" alt="..." />
                <img className="h-full" src="./src/assets/images/sliderImage-3.jpg" alt="..." />
                <img className="h-full" src="./src/assets/images/sliderImage-4.jpg" alt="..." />
            </Carousel>
        </div>
    );
}

export default Hero;