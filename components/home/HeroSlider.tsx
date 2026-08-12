"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    img: "/hero-reception.jpeg",
    title: "Caring Beyond Medicine",
  },
  {
    img: "/hero-quality.jpeg",
    title: "Certified Quality",
  },
  {
    img: "/hero-target.jpeg",
    title: "Our Objective Towards",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        //autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">

              {/* Image */}
              <Image
                src={slide.img}
                alt="hero"
                fill
                priority={i === 0}
                className="object-cover"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-4 sm:left-6 md:left-12 text-white max-w-xl">
                <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl italic font-semibold tracking-wide leading-tight">
                  {slide.title}
                </h1>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 RIGHT SIDE DOT FIX */}
      <style jsx global>{`
        .swiper-pagination {
          position: absolute !important;
          bottom: 20px !important;
          right: 30px !important;
          left: auto !important;
          width: auto !important;
          text-align: right !important;
        }

        .swiper-pagination-bullets {
          display: flex !important;
          justify-content: flex-end !important;
          align-items: center;
          gap: 6px;
        }

        .swiper-pagination-bullet {
          background: #ffffff80;
          opacity: 1;
          width: 8px;
          height: 8px;
        }

        .swiper-pagination-bullet-active {
          background: white;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}