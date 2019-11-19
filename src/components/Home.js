import React, {Component} from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = ({
      name: "Home"
    })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick = {() => this.props.SendDataToApp(this.state.name)}> HomeButton </button>
      </div>
    )
  }
}

export default Home;
