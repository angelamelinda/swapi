import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterOpen: false
        }
        this.toggleFilter = this.toggleFilter.bind(this);
    }
    toggleFilter() {
        this.setState(prevState => ({
            filterOpen: !prevState.filterOpen
        }))
    }
    render() { 
        return (
            <div className={ this.state.filterOpen ? 'filter-tools opened mb-4' : 'filter-tools mb-4'}>
                <p className="font-starjedi-rounded text-center color-white pt-3 mb-3 cursor-pointer" onClick={this.toggleFilter}>Filter Planets</p>
                <ul className="list-filter list-unstyled mb-0 overflow-y-scroll z-index-2">
                    {
                        (this.props.planetIsUpdated && this.props.peopleIsUpdated) ? (
                            Object.keys(this.props.planet).map((key) => (
                                <li key={key}><label><input type="checkbox" value={this.props.planet[key].url} onChange={this.props.handleFilter}/> {this.props.planet[key].name}</label></li>
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
        
        peopleIsUpdated: state.People.isUpdated
    }
  }
  const matchDispatchToProps = (dispatch) => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps,matchDispatchToProps)(Filter);