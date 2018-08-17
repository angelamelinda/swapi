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
            <div className={ this.state.filterOpen ? 'filter-tools opened' : 'filter-tools'}>
                <h4 className="font-starjedi-rounded text-center color-white pt-3 mb-3 cursor-pointer" onClick={this.toggleFilter}>Filter Planets</h4>
                <ul className="list-filter list-unstyled mb-0 overflow-y-scroll">
                    {
                        (this.props.planetIsUpdated == true) ? (
                            Object.keys(this.props.planet).map((key,id) => (
                                <li key={key}><label><input type="checkbox" value={this.props.planet[key].name.toLowerCase().replace(' ','-')}/> {this.props.planet[key].name}</label></li>
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
        planetIsUpdating: state.Planet.isUpdating,
        planetIsUpdated: state.Planet.isUpdated
    }
  }
  const matchDispatchToProps = (dispatch) => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps,matchDispatchToProps)(Filter);