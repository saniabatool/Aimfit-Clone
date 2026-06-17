import "./CommunitySection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function CommunitySection() {
  const testimonials = [
    {
      text: "For someone who always made excuses and kept falling off track...",
      name: "Mushfirah Alam",
      image: "/images/musfirah.png",
    },
    {
      text: "I love working with my fitness advisor...",
      name: "Ramneen Yousuf",
      image: "/images/rameen.png",
    },
    {
      text: "Amazing experience so far! The user interface is very simple...",
      name: "Nina Ali",
      image: "/images/nina.png",
    },
    {
      text: "I've seen visible weight loss results...",
      name: "Nuzhat Kashif",
      image: "/images/nuzhat.png",
    },
    {
      text: "I've been working out with Pro for a while...",
      name: "Ammara Khan",
      image: "/images/ammara.png",
    },
  ];

  return (
    <section className="community-section" id="family">

      <div className="community-header">
        <div>
          <h2>
            Join Our Community Of
            <br />
            Over <span>500,000+ Women</span>
          </h2>

          <p>Hear why our members love AimFit</p>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">
                {item.text}
              </p>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default CommunitySection;