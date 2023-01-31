import * as React from 'react';
import './style.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Loc',
    };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <p>Start editing to see some magic happen :)</p>
        <button onClick={()=>{
          this.setState({name: 'Loc Luu'})
        }}>Change Name</button>
      </div>
    );
  }
}
export default App;
