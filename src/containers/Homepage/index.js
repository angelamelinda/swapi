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
            perScroll: 10
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }
    handleFilter() {
        let selected = Array.from(document.querySelectorAll(".list-filter input[type='checkbox']:checked")),
            selectedPlanet = [];
        // Get all the selected values after the checkbox is checked
        for (let i in selected) {
            let value = selected[i].getAttribute('value');
            selectedPlanet.push(value);
        }  
        if(selected.length) {
            // the list is checked, then dispatch RequestFilterPlanet
            this.props.RequestFilterPlanet(selectedPlanet, this.props.people);
        } else {
            // the list is not checked at all, then dispatch RequestFilterReset to reset the filter data and the filter status (isFiltered & isFiltering)
            this.props.RequestFilterReset();
        }
        // Tell to other, if the checkbox is checked right now
        this.setState({
            filterChange: true
        })
        
        if(this.state.filterChange && this.props.filter.length > 10) {
            // Reset the infinite scroll if the checkbox is checked right now
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
        // Check if filter is active,
        // then will use data from filter
        if(this.props.isFiltered) {
            data = this.props.filter;
            statusUpdate = this.props.isFiltered;
        } else {
            data = this.props.people;
            statusUpdate = this.props.peopleIsUpdated
        }
        // Check the window bottom position is equal or more than the document height and 
        // is there still have data that need to be displayed
        // then increase the increment
        if(Math.ceil(windowScrollY + windowHeight) >= Math.ceil(documentHeight) && this.state.hasMore) {
            this.setState((prevState) => ({
                iteration: prevState.iteration + 1
            }))
            // Check if all data already showed then disable to scroll down again and reset the iteration to 1
            if(statusUpdate && data.length < (this.state.iteration*this.state.perScroll)) {
                this.setState({
                    hasMore: false,
                    iteration: 1
                })
            }
        } else {
            // Reset the filterChange 
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
                            <Filter handleFilter={this.handleFilter}/>
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