function AppCard() {
  const workouts = [
    {
      image: "/images/hero.webp",
      title: "S&C Upper Body",
      trainer: "Zainab",
    },
    {
      image: "/images/hero2.jpeg",
      title: "Abs & Cardio",
      trainer: "Nadya",
    },
    {
      image: "/images/hero3.jpg",
      title: "Pilates Focus",
      trainer: "Mariyam",
    },
    {
      image: "/images/hero.webp",
      title: "Lower Body",
      trainer: "Sophie",
    },
  ];

  return (
    <div className="app-card">

      <div className="phone-header">
        <span>2:15</span>
        <span>AIMFIT</span>
      </div>

      <h3>This Week - Pro</h3>

      <div className="workout-list">
        {workouts.map((workout, index) => (
          <div key={index} className="workout-item">

            <img
              src={workout.image}
              alt={workout.title}
            />

            <div className="workout-content">
              <h4>{workout.title}</h4>
              <p>{workout.trainer}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default AppCard;