import "./PricingSection.css";
import { FaCheck, FaTimes } from "react-icons/fa";

function PricingSection() {
  const features = [
    {
      name: "LIVE & Recorded Workouts",
      live: true,
      coaching: true,
    },
    {
      name: "Welcome call",
      live: true,
      coaching: true,
    },
    {
      name: "Support with creating a workout plan & adding progressions",
      live: true,
      coaching: true,
    },
    {
      name: "Access to exclusive WhatsApp community group",
      live: true,
      coaching: true,
    },
    {
      name: "Weekly check-ins & progress review with a nutrition coach",
      live: false,
      coaching: true,
    },
    {
      name: "Constant support with a nutrition coach",
      live: false,
      coaching: true,
    },
    {
      name: "Help with understanding nutrition & meal tracking",
      live: false,
      coaching: true,
    },
  ];

  return (
    <section
      id="plan"
      className="pricing-section"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div
        className="pricing-header"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <h2>Flexible Plans To Suit Your Needs</h2>

        <p>
          Pick the right plan according to your fitness goal
        </p>
      </div>

      <div className="pricing-table">

        {/* FEATURES */}
        <div
          className="features-column"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          {features.map((item, index) => (
            <div className="feature-row" key={index}>
              {item.name}
            </div>
          ))}
        </div>

        {/* PLANS */}
        <div className="plans-wrapper">

          {/* LIVE PLAN */}
          <div
            className="plan-card live-plan floating-card"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <h3>Live Class Plan</h3>

            {features.map((item, index) => (
              <div className="plan-row" key={index}>
                {item.live ? (
                  <FaCheck className="tick-icon" />
                ) : (
                  <FaTimes className="cross-icon" />
                )}
              </div>
            ))}
          </div>

          {/* COACHING PLAN */}
          <div
            className="plan-card coaching-plan floating-card-delay"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <h3>Fat Loss Coaching</h3>

            {features.map((item, index) => (
              <div className="plan-row" key={index}>
                {item.coaching ? (
                  <FaCheck className="tick-icon" />
                ) : (
                  <FaTimes className="cross-icon" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default PricingSection;