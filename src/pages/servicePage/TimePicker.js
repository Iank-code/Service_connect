import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


    const availableTimes = [
        '10:00 - 11:00',
        '11:00 - 12:00',
        '12:00 - 13:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
      ];
      
      function TimePicker({ value, onChange }) {
        return (
          <div>
            {/* <h3>Select Time</h3> */}
            {availableTimes.map((time) => (
              <div key={time}>
                <input
                  type="radio"
                  name="time"
                  value={time}
                  checked={value === time}
                  onChange={(e) => onChange(e.target.value)}
                />
                <label>{time}</label>
              </div>
            ))}
          </div>
        );
      }


export default TimePicker