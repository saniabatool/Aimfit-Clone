import "./OwnStudio.css";

function OwnStudio() {
const row1 = [
{
image: "/images/fit.webp",
title: "Want to get active, look good and feel strong?",
text: "Enjoy a variety of LIVE classes including Strength, Yoga, HIIT and Pilates.",
button: "Sign up",
},
{
image: "/images/aim.webp",
title: "Train Anytime, Anywhere",
text: "Join world-class online workouts from the comfort of your home.",
button: "Explore Classes",
},
{
image: "/images/fit.webp",
title: "Achieve Your Fitness Goals",
text: "Stay consistent and transform your lifestyle with expert coaching.",
button: "Get Started",
},
];

const row2 = [
{
image: "/images/aim.webp",
title: "Need help getting started with your fitness journey?",
text: "Join us for world-class online home workouts and a nutrition coach.",
button: "Sign up",
},
{
image: "/images/fit.webp",
title: "Professional Coaching",
text: "Get personalized support, guidance and accountability.",
button: "Learn More",
},
{
image: "/images/aim.webp",
title: "Track Your Progress",
text: "Build healthy habits and stay motivated every step of the way.",
button: "Join Today",
},
];

return ( <section id="own-studio" className="own-studio">


  {/* FIRST ROW → RIGHT */}
  <div className="marquee">

    <div className="marquee-track row-right">

      {[...row1, ...row1].map((card, index) => (
        <div
          key={index}
          className="studio-card"
          style={{
            backgroundImage: `url(${card.image})`,
          }}
        >
          <div className="studio-overlay">

            <h2>{card.title}</h2>

            <p>{card.text}</p>

            <button>{card.button}</button>

          </div>
        </div>
      ))}

    </div>

  </div>

  {/* SECOND ROW ← LEFT */}
  <div className="marquee">

    <div className="marquee-track row-left">

      {[...row2, ...row2].map((card, index) => (
        <div
          key={index}
          className="studio-card"
          style={{
            backgroundImage: `url(${card.image})`,
          }}
        >
          <div className="studio-overlay">

            <h2>{card.title}</h2>

            <p>{card.text}</p>

            <button>{card.button}</button>

          </div>
        </div>
      ))}

    </div>

  </div>

</section>


);
}

export default OwnStudio;
