import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class People extends Component {
    render() { 
        let data;
        // Check if filter is active,
        // then will use data from filter
        if(this.props.isFiltered) {
            data = this.props.filter;
        } else {
            data = this.props.people;
        }
        // 10 is the minimal of the data length to have infinite scroll
        // Check if :
        // - the data length is more than 10 and
        // - is there still have data that need to be displayed ?
        // If yes :
        // - it will slice the data from 0 to (iteration*10)
        if(data.length > 10 && this.props.hasMore) {
            data = data.slice(0, (this.props.iteration * this.props.perScroll));
        }

        return (
            <div className="row">
                {
                    (this.props.peopleIsUpdated == true) ? (
                        (data.length > 0) ? (
                            Object.keys(data).map((key) => (
                                <div key={key} className="col-12">
                                    <Link to={'people/detail?name='+data[key].name} className="color-white color-yellow-hover text-decoration-none transition-2-ease">
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-6">
                                                <p className="mb-0 font-starjedi border-bottom border-top pt-3 pb-3">Character Name</p>
                                            </div>
                                            <div className="col-lg-8 col-6">
                                                <p className="mb-0 border-bottom border-top pt-3 pb-3 pl-3 pr-3">{data[key].name}</p>
                                            </div>
                                        </div>  
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-6">
                                                <p className="mb-0 font-weight-bold">Gender</p>
                                            </div>
                                            <div className="col-lg-8 col-6">
                                                <p className="mb-0 pl-3 pr-3">{data[key].gender}</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-6">
                                                <p className="mb-0 font-weight-bold">Birth Year</p>
                                            </div>
                                            <div className="col-lg-8 col-6">
                                                <p className="mb-0 pl-3 pr-3">{data[key].birth_year}</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-6">
                                                <p className="mb-0 font-weight-bold">Height</p>
                                            </div>
                                            <div className="col-lg-8 col-6">
                                                <p className="mb-0 pl-3 pr-3">{data[key].height} cm</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-6">
                                                <p className="mb-0 font-weight-bold">Mass</p>
                                            </div>
                                            <div className="col-lg-8 col-6">
                                                <p className="mb-0 pl-3 pr-3">{data[key].mass} kg</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-6">
                                                <p className="mb-0 font-weight-bold">Eye Color</p>
                                            </div>
                                            <div className="col-lg-8 col-6">
                                                <p className="mb-0 pl-3 pr-3">{data[key].eye_color}</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-6">
                                                <p className="mb-0 font-weight-bold">Hair Color</p>
                                            </div>
                                            <div className="col-lg-8 col-6">
                                                <p className="mb-0 pl-3 pr-3">{data[key].hair_color}</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-6">
                                                <p className="mb-0 font-weight-bold">Skin Color</p>
                                            </div>
                                            <div className="col-lg-8 col-6">
                                                <p className="mb-0 pl-3 pr-3">{data[key].skin_color}</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-6">
                                                <p className="mb-0 font-weight-bold">Homeworld</p>
                                            </div>
                                            <div className="col-lg-8 col-6">  
                                                {
                                                    Object.keys(this.props.planet).map((keyPlanet) => (
                                                        (this.props.planet[keyPlanet].url == data[key].homeworld) &&
                                                        <p className="mb-0 pl-3 pr-3" key={keyPlanet}>{this.props.planet[keyPlanet].name}</p> 
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) :  (<div className="col-12"><p className="mb-0 color-white">The people is not exist...</p></div>)
                    ) : (<div className="col-12"><p className="mb-0 color-white">Please wait...</p></div>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.People.people,
        peopleIsUpdated: state.People.isUpdated,

        filter: state.Filter.filter,
        isFiltered: state.Filter.isFiltered,

        planet: state.Planet.planet,
    }
  }
  const matchDispatchToProps = (dispatch) => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps,matchDispatchToProps)(People);