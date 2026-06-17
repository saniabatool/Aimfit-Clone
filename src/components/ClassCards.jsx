import { FiClock } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function ClassCards() {
  const classes = [
    {
      title: "Pilates - Upper Body",
      time: "11:00 AM",
      trainer: "Mariyam Liaqat",
    },
    {
      title: "Yoga Flow",
      time: "3:00 PM",
      trainer: "Reeha Hafeez",
    },
    {
      title: "S&C - Lower Body",
      time: "9:15 PM",
      trainer: "Zainab Manzoor",
    },
  ];

  return (
    <div className="class-stack">
      {classes.map((item, index) => (
        <div className="mini-card" key={index}>
          <div className="mini-card-header">
            <div>
              <h4>{item.title}</h4>
              <p className="class-type">Pro Classes</p>
            </div>

            <div className="mini-badge">25</div>
          </div>

          <div className="mini-card-footer">
            <div className="meta-item">
              <FiClock />
              <span>{item.time}</span>
            </div>

            <div className="meta-item">
              <FaUserCircle />
              <span>{item.trainer}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClassCards;