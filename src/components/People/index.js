import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './style.css';
class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            peoples: []
        }
    }
    componentWillMount() {
        this.fetchData();
    }
    fetchData() {
        let url = 'https://swapi.co/api/people/',
            totalPages = 0;
        
        axios.get(url).then((resp) => {
            const allPromises = [];
            totalPages = Math.ceil(resp.data.count / resp.data.results.length);
            for(let i = totalPages; i > 0; i--) {
                allPromises.unshift(axios.get(url+'?page='+i));
            }
            this.setState({
                isFetching: true
            })
            axios.all(allPromises).then((responses) => {
                const processedResponses = [];
                responses.map(response => {
                    response.data.results.map((people) => {
                        processedResponses.push(people);
                    })
                })
                console.log(processedResponses);
                this.setState({
                    peoples: processedResponses,
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
            <div className="row">
                {
                    (this.state.isFetching != true) ? (
                        Object.keys(this.state.peoples).map((key) => (
                            <div key={key} className="col-12 color-white">
                                <Link to={this.state.peoples[key].name.toLowerCase().replace(' ','-')}>
                                 {this.state.peoples[key].name}
                                </Link>
                            </div>
                        ))
                    ) : (<p className="mb-0 color-white">Please wait...</p>)
                }
            </div>
        )
    }
}

export default People;