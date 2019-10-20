import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import DataProvider from '../utils/db'

export default () => (
  <DataProvider>
    {({ getAll }) => {
      const submissions = getAll()
      return (
        <>
          <Navbar/>
          <div className="container mt-5">
            <div className="mt-5 d-flex flex-column">
              <h1>Survyor</h1>
              <p>See all submissions</p>
            </div>
            <hr/>
            {Array.from(submissions).map(sub => {
              return (
                <div key={sub.id} className="border p-3 m-4">
                  <h5 className="border-bottom mb-3">Personal Details</h5>
                  <p>Name: {sub.name}</p>
                  <p>Age: {sub.age}</p>
                  <p>Residence: {sub.residence}</p>
                  <p>Taken at: {new Date(sub.at).toString()}</p>
                  <hr></hr>
                  <h5 className="border-bottom mb-3">Workplace Details</h5>
                  <p>Employment Status: {sub.employment_status}</p>
                  <p>Salary: {sub.salary}</p>
                  <p>Satisfaction: {sub.happiness}</p>
                  {sub.comment && <p>Comment: {sub.comment}</p>}
                </div>
              )
            })}
            <button className="btn btn-block btn-primary">
              <Link to="/" className="text-decoration-none text-white">
                <i className="nc-icon nc-bank"></i> Home
              </Link>
            </button>
          </div>
        </>
      )
    }}
  </DataProvider>
)