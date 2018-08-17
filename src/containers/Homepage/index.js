import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../../components/Filter';
import People from '../../components/People';
import Hero from '../../assets/images/starwars.jpg';
import { RequestFetchApi } from '../../redux/Action/action_fetchapi';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.RequestFetchApi();
    }
    render() {
        return(
            <div className="page">
                {/* <div  style={{backgroundImage:`url(${Hero})`}} className="background-bottom background-cover background-no-repeat overlay-5 overlay">
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
                </div> */}
                {
                    console.log(this.props.film)
                }
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        film: state.Film.film,
        people: state.People.people,
        planet: state.Planet.planet,
        species: state.Species.species,
        starship: state.Starship.starship,
        vehicle: state.Vehicle.vehicle,
    }
  }
  const matchDispatchToProps = (dispatch) => {
    return {
      RequestFetchApi : () => dispatch(RequestFetchApi())
    }
  }
  
  export default connect(mapStateToProps,matchDispatchToProps)(Homepage);