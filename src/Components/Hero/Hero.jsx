import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Hero() {
    const [count, setCount] = useState(1);
    const [image, setImage] = useState(<img className="h-full w-full object-cover transition-all ease-in delay-[5000ms] origin-right" src={`./src/assets/images/sliderImage-${count}.jpg`} />);
    const length = 4;

    const handlerPrev = (count) => {
        if (count <= 1) {
            setCount(length);
        } else {
            setCount(--count);
        }
        setImage(<img className="h-full w-full object-cover ease-in delay-[5000ms] origin-right" src={`./src/assets/images/sliderImage-${count}.jpg`} />);
    }

    const handlerNext = (count) => {
        setImage(<img className="h-full w-full object-cover ease-in delay-[5000ms] origin-right" src={`./src/assets/images/sliderImage-${count}.jpg`} />);
        if (count >= length) {
            setCount(1);
        } else {
            setCount(++count);
        }
    }

    setInterval(() => {
        handlerNext(count);
    }, 5000);

    return (
        <header className={`text-white h-screen flex items-center justify-center transition-all`}>
            <span onClick={() => handlerPrev(count)} className="text-2xl absolute left-10 z-10 cursor-pointer border rounded-full h-10 w-10 p-2 hidden items-center justify-center hover:bg-gray-200 hover:text-black"> <FaArrowLeft /> </span>

            <div className="h-full w-full">
                {image}
            </div>

            <span onClick={() => handlerNext(count)} className="text-2xl absolute right-10 z-10 cursor-pointer border rounded-full h-10 w-10 p-2 hidden items-center justify-center hover:bg-gray-200 hover:text-black "> <FaArrowRight /> </span>
        </header>
    );
}

export default Hero;