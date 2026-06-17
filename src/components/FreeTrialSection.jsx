import { useState } from "react";
import "./FreeTrialSection.css";

function FreeTrialSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
    mode: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.goal ||
      !formData.mode ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Submitted:", formData);

    alert("Free Trial Request Submitted!");

    setFormData({
      name: "",
      phone: "",
      goal: "",
      mode: "",
      location: "",
      date: "",
    });
  };

  return (
    <section className="trial-section" id="free">

      <div className="trial-container">

        {/* Left Side */}

        <div className="trial-content">

          <h2>
            Book Your Free Trial
            <br />
            Class Today!
          </h2>

          <p>
            Join us TODAY at the AimFit studios or
            online with the AimFit app.
          </p>

          <p>
            Get active, fitter and stronger with a
            wide variety of workouts and coaching
            from world-class instructors.
          </p>

        </div>

        {/* Right Side */}

        <form
          className="trial-form"
          onSubmit={handleSubmit}
        >

          <div className="input-row">

            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
          >
            <option value="">
              What is your fitness goal?
            </option>

            <option>Weight Loss</option>
            <option>Muscle Gain</option>
            <option>Yoga</option>
            <option>Strength Training</option>
          </select>

          <div className="radio-group">

            <label>
              <input
                type="radio"
                name="mode"
                value="Studio"
                checked={formData.mode === "Studio"}
                onChange={handleChange}
              />

              Studio
            </label>

            <label>
              <input
                type="radio"
                name="mode"
                value="Online"
                checked={formData.mode === "Online"}
                onChange={handleChange}
              />

              Online
            </label>

          </div>

          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="">
              Which studio location do you prefer?
            </option>

            <option>Karachi</option>
            <option>Lahore</option>
            <option>Islamabad</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

    </section>
  );
}

export default FreeTrialSection;