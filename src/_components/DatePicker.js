import React from "react";
import ReactDatePicker from "react-datepicker";

const DatePicker = ({ name, value, onChange, placeholder }) => {
  return (
    <ReactDatePicker
      placeholderText={placeholder}
      selected={(value && new Date(value)) || null}
      onChange={(val) => {
        onChange(name, val);
      }}
    />
  );
};

export default DatePicker;
