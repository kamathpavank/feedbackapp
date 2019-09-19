//contains logic to render a single label and text input
import React, {Component } from 'react';

//syntak in parametr extracts only input property from props passed by redux form
export default ({input, label, meta:{error, touched}}) => {
  return(
    <div>
      <label>{label}</label>
      {/*... says that have the object with the keys and values in it*/}
      {/*...input is equivalent to onBlur={input.onBlur} etc*/}
      <input {...input} style={{marginBottom: '5px'}}/>
      <div className="red-text" style={{marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  )
}
