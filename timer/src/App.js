//Importation des modules que nous avons besoin
import React, { Component } from 'react';
import Box from './components/Box';
import './App.css';

class App extends Component {
  
    render() {
        return (
          <div className="App">
            <Box />
          </div>
        );


    }
}


//Exporter le composant
export default App;