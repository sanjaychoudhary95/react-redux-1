// Send data from home to app and then app to Person, for send home data to person

import React, {Component} from 'react';
import './App.css';
import Home from './components/Home'
import Person from './components/Person'
import {connect} from 'react-redux'

class App extends Component {
  constructor() {
    super();
    this.state = ({
      name: "App"
    });
  }

  homeToPerson = (name) => {
    this.setState({
      name: name
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <br/>
        <Home SendDataToApp = {(name) => this.homeToPerson(name)} />
        <br/>
        <Person HomeData = {this.state.name}/>
        <h1> {this.state.name} </h1>
        ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        <p>The value comes from store: {this.props.myname} </p>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    myname: state.name
  }
}

export default connect(mapStateToProps)(App);
