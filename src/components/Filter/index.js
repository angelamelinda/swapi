import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RequestFilterPlanet, RequestFilterReset } from '../../redux/Action/action_filter';
import './style.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterOpen: false
        }
        this.toggleFilter = this.toggleFilter.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }
    toggleFilter() {
        this.setState(prevState => ({
            filterOpen: !prevState.filterOpen
        }))
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
    }
    render() { 
        return (
            <div className={ this.state.filterOpen ? 'filter-tools opened' : 'filter-tools'}>
                <h4 className="font-starjedi-rounded text-center color-white pt-3 mb-3 cursor-pointer" onClick={this.toggleFilter}>Filter Planets</h4>
                <ul className="list-filter list-unstyled mb-0 overflow-y-scroll">
                    {
                        (this.props.planetIsUpdated && this.props.peopleIsUpdated) ? (
                            Object.keys(this.props.planet).map((key,id) => (
                                <li key={key}><label><input type="checkbox" value={this.props.planet[key].url} onChange={this.handleFilter}/> {this.props.planet[key].name}</label></li>
                            ))
                        ) : (<p className="mb-0 color-white">Please wait...</p>)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        planet: state.Planet.planet,
        planetIsUpdated: state.Planet.isUpdated,
        people: state.People.people,
        peopleIsUpdated: state.People.isUpdated
    }
  }
  const matchDispatchToProps = (dispatch) => {
    return {
        RequestFilterPlanet : (selected, people) => dispatch(RequestFilterPlanet(selected, people)),
        RequestFilterReset : () => dispatch(RequestFilterReset())
    }
  }
  
  export default connect(mapStateToProps,matchDispatchToProps)(Filter);