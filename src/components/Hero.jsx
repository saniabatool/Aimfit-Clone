import "./Hero.css";
import BookingCard from "./BookingCard";
import ClassCards from "./ClassCards";
import CalendarCard from "./CalendarCard";
import AppCard from "./AppCard";
import { FiClock, FiMapPin } from "react-icons/fi";
import { IoChevronDownCircle } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  const slides = [
    {
      image: "/images/hero.webp",
      title: "Fall in love with yourself!",
      subtitle: "With the #1 fitness solution for women",
    },
    {
      image: "/images/hero2.jpeg",
      title: "Look Good",
      subtitle: "With the best online home workouts",
    },
    {
      image: "/images/hero3.jpg",
      title: "Train Anywhere",
      subtitle: "Stay fit from the comfort of home",
    },
  ];

  return (
    <section className="hero">

  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    loop={true}
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div
          className="hero-slide"
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="overlay">
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>

              <button className="hero-btn">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Floating cards rendered only once */}
  <div className="floating-cards">
    <BookingCard />
    <ClassCards />
    <CalendarCard />
    <AppCard />
  </div>

</section>
  );
}

export default Hero;