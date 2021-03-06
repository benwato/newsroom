import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useContext} from 'react';
import Header from './Components/Header'
import './App.css';
import Headlines from './Components/Headlines';
import TellUs from './Components/TellUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import {Context} from './Components/Context';



function App() {



const [theme, setTheme] = useState(false)



const themeStyles = {
  backgroundColor: theme ? '#333' : '#CCC',
  color: theme ? '#CCC' : '#333',
  padding: '2rem',
  margin: '2rem'
}



  return (
    <>
    <Context.Provider value = {{theme, setTheme}}>
      <Router>  
      <div style = {themeStyles} className="App">
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/headlines" component={Headlines}/>
            <Route exact path="/tellus" component={TellUs}/>
          </Switch>
      </div>
    </Router>
    </Context.Provider>
    </>
  );
}



export default App;
