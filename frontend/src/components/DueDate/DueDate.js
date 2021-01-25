import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DueDate.css";

function DueDate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="duedate">
      <h1 className="duedate__title">Due Date: </h1>
      <DatePicker
        // I have not not worked with the djengo database before
        // and it it is giving me an error on the dat format. I tried
        // the normal input field woth JSX, but it would not allow me to
        // change the format. So, I installed this dte picker from
        // https://reactdatepicker.com/#example-include-times. It allowed me
        // to change the format. However, the database still does not like
        // the format and I have run out of time to google. So, this portion
        // is incomplete.
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}

export default DueDate;
