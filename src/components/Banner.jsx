import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Banner1 from '../assets/Heroimg1.jpg';
import Banner2 from '../assets/HeroImg2.jpg';
import Banner3 from '../assets/HeroImg3.jpg';

const banners = [Banner1, Banner2, Banner3];

const Banner = () => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} className="relative">
            {banners.map((banner, index) => (
                <div key={index} className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                    {/* Image */}
                    <img src={banner} className="w-full h-full object-cover brightness-75" />

                    {/* Dark overlay
                    <div className="absolute inset-0 bg-black bg-opacity-30 "></div> */}

                    {/* Banner Text */}
                    <div className="absolute bottom-10 left-8 md:bottom-20 md:left-10 z-10 text-white max-w-lg space-y-6">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Plants make a positive impact <br /> on your environment.
                        </h1>
                        <p className="text-lg">
                            Provide your house & office space with the right plants and let our
                            plant care team keep them flourishing.
                        </p>

                        <div className="flex items-center gap-4 md:gap-6">
                            <button className="btn bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full">
                                Book Now
                            </button>
                            <button className="font-semibold text-gray-200 hover:text-green-200 transition duration-300">
                                Know More
                            </button>
                        </div>

                        <div className="flex items-center gap-4 md:gap-6">
                            <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white transition duration-300">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white transition duration-300">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white transition duration-300">
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
