import React, { memo } from 'react'

function DateInput(props) {
    const {onChange, label, disabled=false, required=false, ...other} = props
  return (
    <>
        <label className="form-label"> {label}</label>
            <input
              type="date"
              className="form-control"
              placeholder="start date"
              onChange={onChange}
              disabled={disabled}
              required={required}
              {...other}
            />
    </>
  )
}

export default memo(DateInput)
