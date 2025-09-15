import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const achievements = [
  {
    title: "World Computer Hackathon League (WCHL25)",
    description:
      "Selected for the National Round hosted by DoraHacks – showcasing innovative application of ICP and decentralized technologies.",
    certificate: "/certificates/WCL-25.jpg",
  },
  {
    title: "International Hackathon & Workshop",
    description:
      "Successfully participated in an International hackathon and workshop organized by PL Genesis and BlockseBlock – focusing on modular blockchain systems and practical dApp development.",
    certificate: "/certificates/PL-25.png",
  },
  {
    title: "Artificial Intelligence Training Program",
    description:
      "Successfully completed a 5-Day Hands-on Training Program on Artificial Intelligence by BlockseBlock and OpenxAI – showcasing applied skills and learning Ollama.",
    certificate: "/certificates/OPENXAI-25.png",
  },
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="achievements" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold text-primary">Achievements</h2>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          modules={[EffectCoverflow, Navigation]}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          className="achievements-swiper"
        >
          {achievements.map((achievement, index) => (
            <SwiperSlide key={index} className="achievement-slide">
              <div className="slide-content shadow">
                <img
                  src={achievement.certificate}
                  alt={achievement.title}
                  className="certificate-img"
                />
                <h5 className="fw-bold mt-3">{achievement.title}</h5>
                <p>{achievement.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation + Counter */}
        <div className="slider-controls text-center mt-4">
          <button className="swiper-button-prev-custom">‹</button>
          <span className="mx-3 fw-bold">
            {activeIndex} of {achievements.length}
          </span>
          <button className="swiper-button-next-custom">›</button>
        </div>
      </Container>
    </section>
  );
};

export default Achievements;
