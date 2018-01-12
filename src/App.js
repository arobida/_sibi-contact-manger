import React, { Component } from 'react';
import {Button, Icon} from 'semantic-ui-react';
import './App.css';
import sibi from './sibi.png';

import SearchContacts from './components/SearchContacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img  src={sibi} style={{width:'30%',margin:'8px'}} />
          <h1 className="App-title">Sibi Contacts Manager</h1>
        </header>
        <SearchContacts/>
      </div>
    );
  }
}

export default App;
