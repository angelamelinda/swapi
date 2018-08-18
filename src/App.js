import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './containers/Homepage';
import DetailPeople from './containers/DetailPeople';
import NotFound from './containers/NotFound';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route path="/people/detail" component={DetailPeople} exact/>
              <Route path="/notfound" component={NotFound}/>
              <Redirect to="/notfound" />
            </Switch>
          </ScrollToTop>
        </div>
      </Router> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
  }
}
const matchDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(App);
