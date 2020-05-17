import React from 'react';

function DatePicker() {
  return (
    <div className="DatePicker">
      <label className="DatePicker-label">
        Check-in
        <input className="DatePicker-dateInput" type="date" name="checkin" />
      </label>
      <label className="DatePicker-label">
        Check-out
        <input className="DatePicker-dateInput" type="date" name="checkout" />
      </label>
      <div className="DatePicker-dropdown">

      </div>
    </div>
  );
}

export default DatePicker;
