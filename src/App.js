import React, { Component } from 'react';

import Announcement from './Components/Announcement';

import './css/variables.css';
import './css/reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Announcement />
      </div>
    );
  }
}

export default App;
