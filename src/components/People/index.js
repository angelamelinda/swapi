import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.css';
class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasMore: true,
            iteration: 1,
            perScroll: 10
        }
        this.onScroll = this.onScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }
    onScroll() {
        let windowHeight = window.innerHeight,
            windowScrollY = window.scrollY,
            documentHeight = document.body.offsetHeight;
        if((windowScrollY + windowHeight) >= documentHeight && this.state.hasMore) {
            console.log('yeah DONG');
            this.setState((prevState) => ({
                iteration: prevState.iteration + 1
            }))
            if(this.state.hasMore && this.props.peopleIsUpdated && this.props.people.length < (this.state.iteration*this.state.perScroll)) {
                this.setState({
                    hasMore: false,
                    iteration: 1
                })
            }
        } 
    }
    render() { 
        let data;

        if(this.props.isFiltered) {
            data = this.props.filter;
        } else {
            data = this.props.people;
        }
        console.log(data.length,'panjang data sblm');
        if(data.length > 10 && this.state.hasMore) {
            data = data.slice((this.state.iteration - 1 ), (this.state.iteration * this.state.perScroll));
        }
        console.log(data.length,'panjang data');
        return (
            <div className="row">
                {
                    (this.props.peopleIsUpdated == true) ? (
                        (data.length > 0) ? (
                            Object.keys(data).map((key) => (
                                <div key={key} className="col-12">
                                    <Link to={'people/'+(data[key].name).toLowerCase().replace(' ','-')} className="color-white color-yellow-hover text-decoration-none transition-2-ease">
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-12">
                                                <p className="mb-0 font-starjedi border-bottom border-top pt-3 pb-3">Character Name</p>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <p className="mb-0 border-bottom border-top pt-3 pb-3 pl-3 pr-3">{data[key].name}</p>
                                            </div>
                                        </div>  
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-12">
                                                <p className="mb-0 font-weight-bold">Gender</p>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <p className="mb-0 pl-3 pr-3">{data[key].gender}</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-12">
                                                <p className="mb-0 font-weight-bold">Birth Year</p>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <p className="mb-0 pl-3 pr-3">{data[key].birth_year}</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-12">
                                                <p className="mb-0 font-weight-bold">Height</p>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <p className="mb-0 pl-3 pr-3">{data[key].height} cm</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-12">
                                                <p className="mb-0 font-weight-bold">Mass</p>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <p className="mb-0 pl-3 pr-3">{data[key].mass} kg</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-12">
                                                <p className="mb-0 font-weight-bold">Eye Color</p>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <p className="mb-0 pl-3 pr-3">{data[key].eye_color}</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-12">
                                                <p className="mb-0 font-weight-bold">Hair Color</p>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <p className="mb-0 pl-3 pr-3">{data[key].hair_color}</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-lg-4 col-12">
                                                <p className="mb-0 font-weight-bold">Skin Color</p>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <p className="mb-0 pl-3 pr-3">{data[key].skin_color}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) :  (<p className="mb-0 color-white">The people is not exist...</p>)
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