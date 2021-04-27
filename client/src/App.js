import React, { Component } from 'react';
import './main.css';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/font-awesome.min.css';

import Index from './components/index';

import { AuthProvider } from './context/Auth';

class App extends Component{

  render() {
    return(
      <AuthProvider>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </AuthProvider>
    )
  }
}

export default App;


//HEY FUTURE ME! STOPPED AT 2:34:04! C'MON LET'S DO THIS!!!!!