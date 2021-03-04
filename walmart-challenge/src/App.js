import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppRender from './Pages/AppRender';
import Issue from './Pages/Issue';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AppRender}/>
          <Route exact path="/issue" component={Issue} />
        </Switch>
      </Router>  
    )
  }
}

export default App;
