import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./update_schedule_movie.scss";
import PrimaryButton from "../../low level/PrimaryButton";

function UpdateScheduleMovie() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/update-schedule');
  };

  return (
    <div className="update-schedule-movie">
      <h1>Update Movie Schedule</h1>
      <div className="movie-details">
        <p>Cinema: Cinema A</p>
        <p>Hall: Hall 1</p>
        <p>Old Timetable: 10/11/2024 15:00</p>
      </div>

      <div className="date-picker">
        <h2>Select New Date:</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]} 
        />
      </div>

      <div className="time-picker">
        <h2>Select New Time:</h2>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <PrimaryButton onClick={handleSave}>Save</PrimaryButton> {}
    </div>
  );
}

export default UpdateScheduleMovie;
