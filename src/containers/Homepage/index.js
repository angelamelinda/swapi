import React, { Component } from 'react';

import Filter from '../../components/Filter';
import People from '../../components/People';
import Hero from '../../assets/images/starwars.jpg';

class Homepage extends Component {
    render() {
        return(
            <div className="page">
                <div  style={{backgroundImage:`url(${Hero})`}} className="background-center background-cover background-no-repeat overlay-5 overlay">
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
                </div>
            </div>  
        )
    }
}

export default Homepage;