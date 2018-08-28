import React, { Component } from 'react';
import logo from './logo.svg';
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

        <div class="dropdown-divider"></div>
        <form>
          <h4 className ="title">
            First a little about you
          </h4>
          <div className="name" />
          <label>
                  Full Name:
            <input type="text" name="full-name" />
          </label>
            <input type="submit" value="submit" />

          <div className="contact" />
          <label >
                  Direct Contact Number:
            <input type="text" name="direct-name" />
          </label>

            <input type="submit" value="submit" />
          <label >
                  Pool's Address:
            <input type="text" name="direct-name" />
          </label>

            <input type="submit" value="submit" />
          <label >
                  Referrals Name:
            <input type="text" name="direct-name" />
          </label>

            <input type="submit" value="submit" />        </form>

<div className="dropdown-divider"></div>




      </div>
    );
  }
}

export default App;
