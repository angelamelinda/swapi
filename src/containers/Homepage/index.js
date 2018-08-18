import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../../components/Filter';
import People from '../../components/People';
import Hero from '../../assets/images/starwars.jpg';

class Homepage extends Component {
    render() {
        return(
            <div className="page">
                <div  style={{backgroundImage:`url(${Hero})`}} className="background-bottom background-cover background-no-repeat overlay-5 overlay">
                    <div className="container z-index-2 position-relative text-center pt-100 pb-100">
                        <h1 className="color-white font-starjedi text-shadow-5">Star Wars Characters</h1>
                    </div>
                </div>
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-12 order-md-2">
                            <Filter />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 col-12 order-md-1">
                            <People />
                        </div>
                    </div>
                </div>
            </div>  
        )
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
  
  export default connect(mapStateToProps,matchDispatchToProps)(Homepage);