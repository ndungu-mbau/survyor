import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import DataProvider from '../utils/db'

export default class Survey extends Component {
  state = {
    at: Date.now()
  }

  onChangeHandler = e => this.setState({ [e.target.name] : e.target.value })

  onDoneSubmit = () => this.props.history.push('/done')

  render(){
    return (
      <DataProvider>
        {({ setItem }) => (
          <>
            <Navbar/>
            <div className="container">
              <div className="mt-5 d-flex flex-column">
                <h1>Survyor</h1>
                <p>Please fill in the form below</p>
              </div>
              <hr/>
              <form>
                <fieldset className="border p-2 m-2">
                  <legend  className="w-auto">Personal Info</legend>
                  <div className="form-group">
                    <label>Name
                      <input value={this.state.name} onChange={this.onChangeHandler} type="text" className="form-control" name="name" placeholder="Enter name"/>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>Age
                      <input value={this.state.age} onChange={this.onChangeHandler} type="text" className="form-control" name="age" placeholder="Enter age"/>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>Where do you live?
                      <input value={this.state.residence} onChange={this.onChangeHandler} type="text" className="form-control" name="residence" placeholder="Residence"/>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="border p-2 m-2">
                  <legend  className="w-auto">Workplace Info</legend>
                  <div className="border p-2 m-2">
                    <p className="mb-3 border-bottom">What is your employment status?</p>
                    <div class="form-check-radio">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="employment_status" value="employed" onChange={this.onChangeHandler} />
                        Fully Employed
                        <span class="form-check-sign"></span>
                      </label>
                    </div>
                    <div class="form-check-radio">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="employment_status" value="part-time" onChange={this.onChangeHandler} />
                        Part-time Employed
                        <span class="form-check-sign"></span>
                      </label>
                    </div>
                    <div class="form-check-radio">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="employment_status" value="self-employed" onChange={this.onChangeHandler} />
                        Self Employed
                        <span class="form-check-sign"></span>
                      </label>
                    </div>
                    <div class="form-check-radio">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="employment_status" value="unemployed" onChange={this.onChangeHandler} />
                        Unemployed
                        <span class="form-check-sign"></span>
                      </label>
                    </div>
                  </div>
                  <div className="border p-2 m-2">
                    <p className="mb-3 border-bottom">If you are employed, whether partially or fully, what was your past month's salary?</p>
                    <div className="form-group">
                      <label>Salary
                        <input value={this.state.salary} onChange={this.onChangeHandler} type="text" className="form-control" name="salary" placeholder="Enter salary"/>
                      </label>
                    </div>
                  </div>
                  <div className="border p-2 m-2">
                    <p className="mb-3 border-bottom">If you are self employed, what was your income last month?</p>
                    <div className="form-group">
                      <label>Income
                        <input value={this.state.salary} onChange={this.onChangeHandler} type="text" className="form-control" name="salary" placeholder="Enter income"/>
                      </label>
                    </div>
                  </div>
                  <div className="border p-2 m-2">
                    <p className="mb-3 border-bottom">For the employed, how happy are you in your workplace? On a scale of 1-5 with 1 being very unhappy and 5 being very happy</p>
                    <div class="form-group">
                      <select class="form-control" name="happiness" onChange={this.onChangeHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  <div className="border p-2 m-2">
                    <p className="mb-3 border-bottom">If you have any other comments about your work condition, write them down below</p>
                    <div class="form-group">
                      <textarea value={this.state.comment} name="comment" className="form-control" onChange={this.onChangeHandler}></textarea>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className="row">
                <button onClick={() => {
                  setItem({ key: this.state.at, val: {...this.state, id: this.state.at}})
                  this.onDoneSubmit()
                }} className="col-sm-2 m-2 btn btn-primary"><i className="nc-icon nc-check-2"></i> Submit</button>
                <button className="col-sm-2 m-2 btn btn-outline-danger pull-right">
                  <Link to="/">
                    <i className="nc-icon nc-simple-remove"></i> Cancel
                  </Link>
                </button>
              </div>
            </div>
          </>
        )}
      </DataProvider>
    )
  }
}