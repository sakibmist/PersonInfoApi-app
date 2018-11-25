import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="offset-1 col-sm-10">
        <div className="container">
          <div className="card border">
            <div className="card-header border">
              <h1 className="text-center"> Simple Header </h1>
            </div>
            <div className="card-body border">
              <div className="offset-2 col-sm-8">
                <form>
                  <div class="form-group row">
                    <label htmlFor="name" class="col-sm-2 col-form-label">
                      Name
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label htmlFor="age" class="col-sm-2 col-form-label">
                      Age
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="age"
                        name="age"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label htmlFor="address" class="col-sm-2 col-form-label">
                      Address
                    </label>
                    <div class="col-sm-10">
                       <textarea name="address" id="address"  className="form-control"></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div className="col-sm-2"></div>
                    <div class="col-sm-10">
                    <button className="btn  btn-primary" type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card-footer border">
              <h6 className="text-center">
                All rights are reserved by the authority.
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
