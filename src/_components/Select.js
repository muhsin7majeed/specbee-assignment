import React from "react";
import ReactSelect from "react-select";

const Select = ({ placeholder, value, isMulti, setFieldValue, field, options = [] }) => {
  return (
    <>
      <ReactSelect
        placeholder={placeholder}
        isMulti={isMulti}
        value={value}
        name={field}
        onChange={(value) => setFieldValue(field, value)}
        options={options}
      />
    </>
  );
};

export default Select;
