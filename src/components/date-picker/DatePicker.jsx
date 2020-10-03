import React from "react";
import { DateTimePicker } from "react-rainbow-components";

const containerStyles = {
  maxWidth: 400,
  marginTop: 10,
};

function DatePicker({ initialValue, handleChange }) {
  return (
    <div style={containerStyles}>
      <DateTimePicker
        id="datetimepicker-1"
        value={initialValue}
        minDate={new Date()}
        onChange={(value) => handleChange(value)}
        formatStyle="large"
        locale="en-US"
        okLabel="Ok"
        cancelLabel="Cancel"
      />
    </div>
  );
}

export default DatePicker;
