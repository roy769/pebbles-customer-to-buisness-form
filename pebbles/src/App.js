import React, { Component } from 'react';
import logo from './logo.svg';
import {emojify} from 'react-emojione';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    selectedFile: null
  }
  fileSelectedHandler = event => {
  this.setState({


    selectedFile: event.target.files[0]
  })

  }
  fileUploadHandler = () => {
//     const fd = new FormData();
//     fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
//     axios.post('gs://aqua-finishes-data.appspot.com
// ');
//     .then(res => {
//       console.log(res);
//     });
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">

          <nav className="nav nav-extended nav-wrapper justify-content-center">
            <div className="logo">



                  <h3 className="for-now">
                    Aqua Finishes Customer Contact Form
                  </h3>

            </div>

          </nav>

        <form>
          <div className="form-group">
            <label for="pointOfContact">Who am I
             {emojify(':speaking_head:')}
             speaking to ?
           </label>
           <input type="text" className="form-control" id="inputFullName" placeholder=" Full Name"/>

            <label for="exampleInputEmail">Whats the best
              {emojify(':e-mail:')}
              email to get back to you at?</label>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

            <label for="zipcode" alt="zip">What's the zipcode for the desired aqua finishing site {emojify(':droplet:')}
            </label>
            <input type="integer" className="form-control" id="inputZipcode" placeholder="Enter Zipcode"/>

            <label for="imageUpload" alt="imageUploads">Please upload images of the job at hand </label>
            <input type="file" onChange={this.fileSelectedHandler}/>
            <button onClick={this.fileUploadHandler}> Upload </button>
          </div>




          <div className="dropdown-divider"></div>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>

    </div>




  </div>
    );
  }
}

export default App;
