function CalendarCard() {
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const days = [
    "", 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30
  ];

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <h3>April 2024</h3>

        <div className="calendar-nav">
          <span>‹</span>
          <span>Today</span>
          <span>›</span>
        </div>
      </div>

      <div className="weekdays">
        {weekDays.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="calendar-grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`day ${
              day === 26 ? "active-day" : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarCard;