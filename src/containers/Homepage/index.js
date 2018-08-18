import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../../components/Filter';
import People from '../../components/People';
import Hero from '../../assets/images/starwars.jpg';
import { RequestFilterPlanet, RequestFilterReset } from '../../redux/Action/action_filter';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterChange: false,
            hasMore: true,
            iteration: 1,
            perScroll: 10, 
            selectedFilter: []
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }
    handleFilter() {
        let selected = Array.from(document.querySelectorAll(".list-filter input[type='checkbox']:checked")),
            selectedPlanet = [];

        for (let i in selected) {
            let value = selected[i].getAttribute('value');
            selectedPlanet.push(value);
        }  
        if(selected.length) {
            this.props.RequestFilterPlanet(selectedPlanet, this.props.people);
        } else {
            this.props.RequestFilterReset();
        }
        this.setState({
            filterChange: true,
            selectedFilter: selectedPlanet
        })
        
        if(this.state.filterChange == true && this.props.filter.length > 10) {
            this.setState({
                hasMore: true,
                iteration: 1
            })
        } 
    }
    onScroll() {
        let windowHeight = window.innerHeight,
            windowScrollY = window.scrollY,
            documentHeight = document.body.offsetHeight,
            data, statusUpdate;

        if(this.props.isFiltered) {
            data = this.props.filter;
            statusUpdate = this.props.isFiltered;
        } else {
            data = this.props.people;
            statusUpdate = this.props.peopleIsUpdated
        }
        if(Math.ceil(windowScrollY + windowHeight) >= Math.ceil(documentHeight) && this.state.hasMore) {
            this.setState((prevState) => ({
                iteration: prevState.iteration + 1
            }))
            if(statusUpdate && data.length < (this.state.iteration*this.state.perScroll)) {
                this.setState({
                    hasMore: false,
                    iteration: 1
                })
            }
        } else {
            this.setState({
                filterChange: false
            })
        } 
        
    }
    componentDidMount() {
        this.props.RequestFilterReset();
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }
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
                            <Filter handleFilter={this.handleFilter} selectedFilter={this.state.selectedFilter}/>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 col-12 order-md-1">
                            <People iteration={this.state.iteration} perScroll={this.state.perScroll} hasMore={this.state.hasMore}/>
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
        RequestFilterPlanet : (selected, people) => dispatch(RequestFilterPlanet(selected, people)),
        RequestFilterReset : () => dispatch(RequestFilterReset())
    }
  }
  
  export default connect(mapStateToProps,matchDispatchToProps)(Homepage);