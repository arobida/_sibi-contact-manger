import React, { Component } from 'react';
import {Button, Icon} from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sibi Contacts Manager</h1>
        </header>
        <Button secondary>
        It works
        </Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
