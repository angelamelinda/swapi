import React from 'react';
import Hero from '../../assets/images/starwars.jpg';

const NotFound = () => {
    return(
        <div className="page">
            <div style={{backgroundImage:`url(${Hero})`}} className="background-bottom background-cover background-no-repeat overlay-5 overlay">
                <div className="container z-index-2 position-relative text-center pt-100 pb-100">
                    <h1 className="color-white font-starjedi text-shadow-5">Sorry, Not Found</h1>
                </div>
            </div>
        </div>  
    )
}
  
export default NotFound;