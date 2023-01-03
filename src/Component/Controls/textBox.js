import React, { memo } from "react";

function TextBox(props) {
  const { label, onChange, type="text", required=false, ...other } = props;
  return (
    <>
      <label className="form-label"> {label}</label>

      <input type={type} className="form-control" required={required} onChange={onChange} {...other}/>
    </>
  );
}
export default memo(TextBox);
