import React from 'react'
import { Link } from 'react-router-dom'

const imgStyles = { 
  height:"150px",
  width:"150px",
  border: "10px solid #EEFBFB",
  borderRadius: "32px",
  padding: "32px"
}

export default props => (
  <div id="screen" className="d-flex flex-column justify-content-center align-items-center text-uppercase text-light">
    <img src="assets/img/logo.png" alt="" style={imgStyles}/>
    <h1>Survyor</h1>
    <p>Surveying at its finest</p>
    <Link to="/survey">
      <button className="btn btn-lg btn-info mt-5 btn-round">Start <i className="nc-icon nc-minimal-right"></i></button>
    </Link>
  </div>
)