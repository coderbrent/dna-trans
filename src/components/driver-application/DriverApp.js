import React from 'react'
import '../mystyles.scss'

const DriverApp = () => {
return (
<>
<div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Your Full Name"/>
  </div>
</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control  has-icons-right">
    <input className="input" type="email" placeholder="Your E-mail Address" value="" required/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div className="field">
  <label className="label">Your Current CDL Type</label>
  <div className="control">
    <div className="select">
      <select>
        <option>Class A</option>
        <option>Class B</option>
        <option>No CDL</option>
      </select>
    </div>
  </div>
</div>

<p className="box message is-danger">Hey - I didn't know what to put in the rest of these spots - we can talk about this</p>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
  <div className="control">
    <button className="button is-link is-light">Cancel</button>
  </div>
</div>
</>
)
}

export default DriverApp;