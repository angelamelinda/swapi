import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import queryString  from 'query-string';

import Hero from '../../assets/images/starwars.jpg';

class DetailPeople extends Component {
    constructor(props) {
        super(props);
        this.matchData = this.matchData.bind(this);
    }
    matchData(specificData, peopleData) {
        let result = [];
        Object.keys(specificData).map((key) => {
            peopleData.map((data) => {
                if(specificData[key].url == data) {
                    result.push(specificData[key]);
                }
            })
        })
        return result;
    }
    render() {
        let people = {}, 
            peopleFilm = [], 
            peopleVehicle = [], 
            peopleHomeworld = [],
            peopleSpecies = [],
            peopleStarship = [];
        if(this.props.peopleIsUpdated) {
            // Match the path with the this.props.people to get the people data
            let path = queryString.parse(this.props.location.search).name;
            let idx = Object.keys(this.props.people).filter((key) => {
                let name = this.props.people[key].name;
                return name == path
            })
            if(idx.length != 0) {
                // if the people is exist, 
                // then get the film(s), species, vehicle(s), starship(s), planet data
                people = this.props.people[idx];
                peopleFilm = this.matchData(this.props.film, people.films);
                peopleSpecies = this.matchData(this.props.species, people.species);
                peopleVehicle = this.matchData(this.props.vehicle, people.vehicles);
                peopleStarship = this.matchData(this.props.starship, people.starships);

                Object.keys(this.props.planet).map((key) => {
                    if(this.props.planet[key].url == people.homeworld) {
                        peopleHomeworld.push(this.props.planet[key].name);
                    }
                })
            } else {
                // if the people is not exist, then redirect to page 404
                return <Redirect to="/notfound" />
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
                    console.log(this.props)
                }
                {
                    this.props.peopleIsUpdated && (
                        <div className="container pt-5 pb-5 color-white">
                            <button className="mb-4 cursor-pointer" onClick={this.props.history.goBack}>Back</button>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-starjedi border-bottom border-top pt-3 pb-3">Character Name</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <p className="mb-0 border-bottom border-top pt-3 pb-3 pl-3 pr-3">{people.name}</p>
                                </div>
                            </div>  
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Gender</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <p className="mb-0 pl-3 pr-3">{people.gender}</p>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Birth Year</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <p className="mb-0 pl-3 pr-3">{people.birth_year}</p>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Height</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <p className="mb-0 pl-3 pr-3">{people.height} cm</p>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Mass</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <p className="mb-0 pl-3 pr-3">{people.mass} kg</p>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Eye Color</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <p className="mb-0 pl-3 pr-3">{people.eye_color}</p>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Hair Color</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <p className="mb-0 pl-3 pr-3">{people.hair_color}</p>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Skin Color</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <p className="mb-0 pl-3 pr-3">{people.skin_color}</p>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Film(s)</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    {
                                        peopleFilm.length > 0 ?
                                        Object.keys(peopleFilm).map((key) => (
                                            <p className="mb-2 pl-3 pr-3" key={key}>{peopleFilm[key].title}</p>
                                        )) : <p className="mb-2 pl-3 pr-3">-</p>
                                    }
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Vehicle(s)</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    {
                                        peopleVehicle.length > 0 ?
                                        Object.keys(peopleVehicle).map((key) => (
                                            <p className="mb-2 pl-3 pr-3" key={key}>{peopleVehicle[key].name}</p>
                                        )) : <p className="mb-2 pl-3 pr-3">-</p>
                                    }
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Homeworld</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <p className="mb-2 pl-3 pr-3">{peopleHomeworld[0]}</p>
                                </div>
                            </div> 
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Species</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    {
                                        peopleSpecies.length > 0 ?
                                        Object.keys(peopleSpecies).map((key) => (
                                            <p className="mb-2 pl-3 pr-3" key={key}>{peopleSpecies[key].name}</p>
                                        )) : <p className="mb-2 pl-3 pr-3">-</p>
                                    }
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-4 col-6">
                                    <p className="mb-0 font-weight-bold">Starship(s)</p>
                                </div>
                                <div className="col-lg-8 col-6">
                                    {
                                        peopleStarship.length > 0 ?
                                        Object.keys(peopleStarship).map((key) => (
                                            <p className="mb-2 pl-3 pr-3"key={key}>{peopleStarship[key].name}</p>
                                        )) : <p className="mb-2 pl-3 pr-3">-</p>
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
        filmIsUpdated: state.Film.isUpdated,
        
        people: state.People.people,
        peopleIsUpdated: state.People.isUpdated,
        
        planet: state.Planet.planet,
        planetIsUpdated: state.Planet.isUpdated,
        
        species: state.Species.species,
        speciesIsUpdated: state.Species.isUpdated,
        
        starship: state.Starship.starship,
        starshipIsUpdated: state.Starship.isUpdated,
        
        vehicle: state.Vehicle.vehicle,
        vehicleIsUpdated: state.Vehicle.isUpdated,
        
        filter: state.Filter.filter,
        isFiltered: state.Filter.isFiltered
    }
  }
  const matchDispatchToProps = (dispatch) => {
    return {

    }
  }
  
  export default connect(mapStateToProps,matchDispatchToProps)(DetailPeople);