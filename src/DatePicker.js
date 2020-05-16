import React from 'react';

function DatePicker() {
  return (
    <div className="DatePicker">
      <label>
        Check-in
        <input type="date" name="checkin" />
      </label>
      <label>
        Check-out
        <input type="date" name="checkout" />
      </label>
      <div className="DatePicker-dropdown">

      </div>
    </div>
  );
}

export default DatePicker;
