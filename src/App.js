import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './containers/Homepage';
import DetailPeople from './containers/DetailPeople';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/people/:name" component={DetailPeople} exact/>
            <Redirect to="/404" />
          </Switch>  
        </div>
      </Router> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
      film: state.Film.film,
      filmIsUpdating: state.Film.isUpdating,
      filmIsUpdated: state.Film.isUpdated,
      people: state.People.people,
      peopleIsUpdating: state.People.isUpdating,
      peopleIsUpdated: state.People.isUpdated,
      planet: state.Planet.planet,
      planetIsUpdating: state.Planet.isUpdating,
      planetIsUpdated: state.Planet.isUpdated,
      species: state.Species.species,
      speciesIsUpdating: state.Species.isUpdating,
      speciesIsUpdated: state.Species.isUpdated,
      starship: state.Starship.starship,
      starshipIsUpdating: state.Starship.isUpdating,
      starshipIsUpdated: state.Starship.isUpdated,
      vehicle: state.Vehicle.vehicle,
      vehicleIsUpdating: state.Vehicle.isUpdating,
      vehicleIsUpdated: state.Vehicle.isUpdated,
      filter: state.Filter.filter,
      isFiltering: state.Filter.isFiltering,
      isFiltered: state.Filter.isFiltered
  }
}
const matchDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(App);
