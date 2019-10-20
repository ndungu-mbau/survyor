import React from 'react'
import { Link } from 'react-router-dom'

import heart from "../heart.svg"

const imgStyles = { 
  height:"150px",
  width:"150px",
  border: "10px solid #EEFBFB",
  borderRadius: "32px",
  padding: "32px"
}

export default props => (
  <div id="screen" className="p-5 d-flex flex-column justify-content-center align-items-center text-uppercase text-light">
    <img src="assets/img/logo.png" alt="" style={imgStyles}/>
    <h1>Survyor</h1>
    <p>Surveying at its finest</p>
    <hr/>
    <p>Thank you for filling out the form with Survyor. See you next time</p>
    <img src={heart} alt=""/>
    <Link to="/list">
      <button className="btn btn-lg btn-info">View Submissions</button>
    </Link>
    <Link to="/survey">
      <button className="btn btn-lg btn-info btn-link">Fill Again?</button>
    </Link>
  </div>
)