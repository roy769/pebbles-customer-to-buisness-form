import React, { Component } from 'react';
import logo from './logo.svg';
import {emojify} from 'react-emojione';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">

          <nav className="nav nav-extended nav-wrapper">
            <div className="logo">
              <div className="row">
                <div className="col center">


                  <h3 className="for-now right">
                    Pebbles
                  </h3>
                </div>
              </div>
            </div>

          </nav>
        </div>

        <form>
          <div className="form-group">
            <label for="pointOfContact">Who am I
             {emojify(':speaking_head:')}
             speaking too
           </label>
           <input type="text" className="form-control" id="inputFullName" placeholder=" Full Name"/>

          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Whats the best email to get back to you at?</label>
            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>

        </form>

<div className="dropdown-divider"></div>




      </div>
    );
  }
}

export default App;
