import React from 'react'

export default function InputField(props) {
  return (
  <div class="mb-3">
      <label class="col-form-label">{props.name}</label>
      <input type={props.type} class="form-control" placeholder={props.placeholder}/>
  </div>
  )
}
