import { FiClock, FiMapPin } from "react-icons/fi";
import { IoChevronDownCircle } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function BookingCard() {
  return (
    <div className="booking-card">

      <div className="card-header">
        <h3>Pilates - Core</h3>
        <div className="level-badge">25</div>
      </div>

      <p className="card-description">
        Pilates is a form of exercise that
        emphasizes core strength, flexibility,
        and posture.
      </p>

      <div className="booking-row">
        <FiClock />
        <span>26 Apr 2024, 11:00 AM to 11:45 AM</span>
      </div>

      <div className="booking-row">
        <FiMapPin />
        <span>Pro Classes</span>
      </div>

      <div className="booking-row">
        <FaUserCircle />
        <span>Mariyam Liaqat</span>
      </div>

      <div className="booking-dropdown">
        <span>Booking Options</span>
        <IoChevronDownCircle />
      </div>

      <button className="book-btn">
        Book Now
      </button>

    </div>
  );
}

export default BookingCard;