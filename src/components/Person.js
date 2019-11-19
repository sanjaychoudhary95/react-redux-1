import React, {Component} from 'react';

class Person extends Component {

  // this will run only one time starting time ,  button click data will not be changed

  // constructor(props) {
  //   super();
  //   this.state = ({
  //     name: props.HomeData
  //   });
  // }

  // state = ({
  //   name: this.props.HomeData
  // });

  render(){
    return (
      <div>
        <h1>{this.props.HomeData}</h1>
      </div>
    )
  }
}

export default Person;
