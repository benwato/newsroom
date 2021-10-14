import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Components/Header'
import './App.css';
import Headlines from './Components/Headlines';
import TellUs from './Components/TellUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import ThemeContext from './Components/ThemeContext';



function App() {

  co

  return (
    <Context.Provider>
      <Router>  
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/headlines" component={Headlines}/>
            <Route exact path="/tellus" component={TellUs}/>
          </Switch>
      </div>
    </Router>
    </Context.Provider>
  );
}



export default App;
