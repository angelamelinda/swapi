import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.css';
class People extends Component {
    render() { 
        let data;
        
        if(this.props.isFiltered) {
            data = this.props.filter;
        } else {
            data = this.props.people;
        }

        return (
            <div className="row">
                {
                    (this.props.peopleIsUpdated == true) ? (
                        Object.keys(data).map((key) => (
                            <div key={key} className="col-12 color-white">
                                <Link to={(data[key].name).toLowerCase().replace(' ','-')}>
                                 {data[key].name}
                                </Link>
                            </div>
                        ))
                    ) : (<p className="mb-0 color-white">Please wait...</p>)
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
        isFiltered: state.Filter.isFiltered
    }
  }
  const matchDispatchToProps = (dispatch) => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps,matchDispatchToProps)(People);