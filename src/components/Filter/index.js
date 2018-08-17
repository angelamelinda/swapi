import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterOpen: false,
            isFetching: false,
            planets: []
        }
        this.toggleFilter = this.toggleFilter.bind(this);
    }
    toggleFilter() {
        this.setState(prevState => ({
            filterOpen: !prevState.filterOpen
        }))
    }
    componentWillMount() {
        this.fetchData();
    }
    fetchData() {
        let url = 'https://swapi.co/api/planets/',
            totalPages = 0;
        
        axios.get(url).then((resp) => {
            const allPromises = [];
            totalPages = resp.data.count;

            for(let i = totalPages; i > 0; i--) {
                allPromises.unshift(axios.get(url+i));
            }
            this.setState({
                isFetching: true
            })
            axios.all(allPromises).then((responses) => {
                const processedResponses = [];
                responses.map(response => {
                    processedResponses.push(response.data);
                })
                this.setState({
                    planets: processedResponses,
                    isFetching: false
                })
            })
        })
        
    }
    isEmpty(obj) {
        for(var key in obj) {
          if(obj.hasOwnProperty(key))
            return false;
        }
        return true;
      }
    render() { 
        return (
            <div className={ this.state.filterOpen ? 'filter-tools opened' : 'filter-tools'}>
                <h4 className="font-starjedi-rounded text-center color-white pt-3 mb-3 cursor-pointer" onClick={this.toggleFilter}>Filter Planets</h4>
                <ul className="list-filter list-unstyled mb-0 overflow-y-scroll">
                    {
                        (this.state.isFetching != true) ? (
                            Object.keys(this.state.planets).map((key,id) => (
                                <li key={key}><label htmlFor=""><input type="checkbox"/> {this.state.planets[key].name}</label></li>
                            ))
                        ) : (<p className="mb-0 color-white">Please wait...</p>)
                    }
                </ul>
            </div>
        )
    }
}

export default Filter;