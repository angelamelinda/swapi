import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Hero from '../../assets/images/starwars.jpg';
import './style.css'

class DetailPeople extends Component {
    render() {
        let people = {}, peopleFilm = [], peopleVehicle = [];
        if(this.props.peopleIsUpdated) {
            let path = (this.props.match.params.name).replace('-',' ');
            let idx = Object.keys(this.props.people).filter((key) => {
                let name = (this.props.people[key].name).toLowerCase().replace('-',' ');
                return name == path
            })

            if(idx.length != 0) {
                people = this.props.people[idx];
                Object.keys(this.props.film).map((key) => {
                    people.films.map((film) => {
                        if(this.props.film[key].url == film) {
                            peopleFilm.push(this.props.film[key]);
                        }
                    })
                })

                Object.keys(this.props.vehicle).map((key) => {
                    people.vehicles.map((vehicle) => {
                        if(this.props.vehicle[key].url == vehicle) {
                            peopleVehicle.push(this.props.vehicle[key]);
                        }
                    })
                })
            } else {
                return <Redirect to="/404" />
            }
            
            
        } 

        
        return(
            <div className="page">
                <div style={{backgroundImage:`url(${Hero})`}} className="background-bottom background-cover background-no-repeat overlay-5 overlay">
                    <div className="container z-index-2 position-relative text-center pt-100 pb-100">
                        <h1 className="color-white font-starjedi text-shadow-5">Star Wars Character</h1>
                    </div>
                </div>
                {
                    this.props.peopleIsUpdated && (
                        <div className="container pt-5 pb-5 color-white">
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-12">
                                    <h2 className="mb-0 font-starjedi border-bottom border-top pt-3 pb-3">Character Name</h2>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <h2 className="mb-0 border-bottom border-top pt-3 pb-3 pl-3 pr-3">{people.name}</h2>
                                </div>
                            </div>  
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-12">
                                    <h2 className="mb-0 font-weight-bold">Gender</h2>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <h2 className="mb-0 pl-3 pr-3">{people.gender}</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-12">
                                    <h2 className="mb-0 font-weight-bold">Height</h2>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <h2 className="mb-0 pl-3 pr-3">{people.height} cm</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-12">
                                    <h2 className="mb-0 font-weight-bold">Mass</h2>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <h2 className="mb-0 pl-3 pr-3">{people.mass} kg</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-12">
                                    <h2 className="mb-0 font-weight-bold">Eye Color</h2>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <h2 className="mb-0 pl-3 pr-3">{people.eye_color}</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-12">
                                    <h2 className="mb-0 font-weight-bold">Hair Color</h2>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <h2 className="mb-0 pl-3 pr-3">{people.hair_color}</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-12">
                                    <h2 className="mb-0 font-weight-bold">Skin Color</h2>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <h2 className="mb-0 pl-3 pr-3">{people.skin_color}</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-12">
                                    <h2 className="mb-0 font-weight-bold">Film(s)</h2>
                                </div>
                                <div className="col-lg-8 col-12">
                                    {
                                        Object.keys(peopleFilm).map((key) => (
                                            <h2 className="mb-2 pl-3 pr-3">{peopleFilm[key].title}</h2>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-12">
                                    <h2 className="mb-0 font-weight-bold">Vehicle(s)</h2>
                                </div>
                                <div className="col-lg-8 col-12">
                                    {
                                        Object.keys(peopleVehicle).map((key) => (
                                            <h2 className="mb-2 pl-3 pr-3">{peopleVehicle[key].name}</h2>
                                        ))
                                    }
                                </div>
                            </div>      
                        </div>
                    )
                }
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
  
  export default connect(mapStateToProps,matchDispatchToProps)(DetailPeople);