//Module 11 Lesson 2: Assignments | React State and Props
//Task 1: Code Correction
//The current implementation of the user profile component has a bug in state management. Analyze and correct the code to ensure the user's name is displayed correctly.
import React, { Component } from 'react';
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

  changeName(){
  this.setState({ name:
    'Charlie'});
                }
    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}



//Method to update state

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      email: ''
    };
  }

  componentDidMount() {
    // Fetch user data or perform any setup here
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <h1>User Profile</h1>
        <p>Name: {name: 'Alex'}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Kb' };
    }

    changeName = () => {
        this.setState({ name: 'Johna' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;
