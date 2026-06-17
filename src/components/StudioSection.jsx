import "./StudioSection.css";
import { FaInstagram } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

function StudioSection() {
  const trainers = [
    {
      name: "Sara Anwer",
      image: "/images/sara.png",
    },
    {
      name: "Haleema Imtiaz",
      image: "/images/haleema.png",
    },
    {
      name: "Kiran",
      image: "/images/kiran.png",
    },
    {
      name: "Zainab Mansoor",
      image: "/images/zainab.png",
    },
  ];

  return (
    <section
      id="team"
      className="studio-section"
    >
      <div className="studio-container">

        {/* HEADER */}
        <div
          className="studio-header"
          data-aos="fade-up"
          data-aos-duration="800"
        >

          <div>

            <h2
              data-aos="fade-right"
              data-aos-duration="800"
            >
              Meet Our Fitness Instructors
            </h2>

            <p
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="800"
            >
              Our instructors are guaranteed to push,
              motivate and help you level up with
              each workout!
            </p>

          </div>

          <button
            className="studio-arrow"
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-duration="800"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* TRAINERS */}
        <div className="trainer-grid">

          {trainers.map((trainer, index) => (
            <div
              className="trainer-card"
              key={index}
              data-aos={
                index % 2 === 0
                  ? "fade-right"
                  : "fade-left"
              }
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >

              <img
                src={trainer.image}
                alt={trainer.name}
              />

              <div className="trainer-overlay">

                <FaInstagram className="insta-icon" />

                <h3>{trainer.name}</h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default StudioSection;