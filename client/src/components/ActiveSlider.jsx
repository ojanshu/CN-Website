import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Fleads } from "../constants/Fleads";

const ActiveSlider = () => {
  return (
    <div>
      <div className="text-lg leading-relaxed mb-6">
        <h1 className="text-6xl md:text-8xl font-light mb-4 text-gray-500 text-left">
          Founders and Leads
        </h1>
        <p className="mt-8 text-1xl md:text-2xl text-white font-light text-left">
          Our passionate leaders bringing real-world expertise to inspire our
          next project.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col h-screen bg-black">
        <div className="w-full mb-4"> {/* Added wrapper div with bottom margin */}
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="max-w-[100%] lg:max-w-[90%]"
            style={{
              "--swiper-pagination-bullet-background-color": "#fff",
              "--swiper-pagination-bullet-active-background-color": "#ffa07a",
            }}
          >
            {Fleads.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="flex flex-col gap-6 mt-20 mb-20 ml-10 group relative shadow-lg text-white 
                rounded-xl px-4 py-6 h-[250px] w-[170px] md:h-[350px] md:w-[210px] lg:h-[450px] lg:w-[260px] cursor-pointer
                border-2 border-transparent hover:border-orange-500 glow-on-hover "
                  style={{ marginTop: "50px" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-left">
                      <h1 className="text-lg md:text-xl lg:text-2xl">
                        {item.title}
                      </h1>
                      <p className="text-sm md:text-base lg:text-lg text-gray-500">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="bg-orange-500 text-white py-2 px-16 rounded-full hover:bg-orange-600 transform hover:scale-105 glow-on-hover w-48">
          Members
        </button>
      </div>
    </div>
  );
};

export default ActiveSlider;