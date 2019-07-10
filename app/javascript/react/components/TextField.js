import React from 'react'

const TextField = (props) => {
  return(
    <div>
      <label> {props.displayName} </label>
      <input
        type="text"
        name={props.label}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default TextField
