import axios from 'axios';

export function RequestFetchApi() {
    return dispatch => {
        dispatch({type:'FILM_UPDATING'});
        dispatch({type:'PEOPLE_UPDATING'});
        dispatch({type:'PLANET_UPDATING'});
        dispatch({type:'SPECIES_UPDATING'});
        dispatch({type:'STARSHIP_UPDATING'});
        dispatch({type:'VEHICLE_UPDATING'});

        let filmUrl = 'https://swapi.co/api/films/',
            totalFilmPages = 0;
        
        axios.get(filmUrl).then((resp) => {
            const filmPromises = [];
            totalFilmPages = Math.ceil(resp.data.count / resp.data.results.length);
            for(let i = totalFilmPages; i > 0; i--) {
                filmPromises.unshift(axios.get(filmUrl+'?page='+i));
            }
            axios.all(filmPromises).then((responses) => {
                const processedFilmResponses = [];
                responses.map(response => {
                    response.data.results.map((film) => {
                        processedFilmResponses.push(film);
                    })
                })
                dispatch({type:'PEOPLE_UPDATED', payload:processedFilmResponses});
            }).catch(() => {
                dispatch({type:'PEOPLE_UPDATE_FAILED'});
            })
        })

        let peopleUrl = 'https://swapi.co/api/people/',
            totalPeoplePages = 0;
        
        axios.get(peopleUrl).then((resp) => {
            const peoplePromises = [];
            totalPeoplePages = Math.ceil(resp.data.count / resp.data.results.length);
            for(let i = totalPeoplePages; i > 0; i--) {
                peoplePromises.unshift(axios.get(peopleUrl+'?page='+i));
            }
            axios.all(peoplePromises).then((responses) => {
                const processedPeopleResponses = [];
                responses.map(response => {
                    response.data.results.map((people) => {
                        processedPeopleResponses.push(people);
                    })
                })
                dispatch({type:'PEOPLE_UPDATED', payload:processedPeopleResponses});
            }).catch(() => {
                dispatch({type:'PEOPLE_UPDATE_FAILED'});
            })
        })

        let planetUrl = 'https://swapi.co/api/planets/',
            totalPlanetPages = 0;
        
        axios.get(planetUrl).then((resp) => {
            const planetPromises = [];
            totalPlanetPages = Math.ceil(resp.data.count / resp.data.results.length);
            for(let i = totalPlanetPages; i > 0; i--) {
                planetPromises.unshift(axios.get(planetUrl+'?page='+i));
            }
            axios.all(planetPromises).then((responses) => {
                const processedPlanetResponses = [];
                responses.map(response => {
                    response.data.results.map((planet) => {
                        processedPlanetResponses.push(planet);
                    })
                })
                dispatch({type:'PLANET_UPDATED', payload:processedPlanetResponses});
            }).catch(() => {
                dispatch({type:'PLANET_UPDATE_FAILED'});
            })
        })

        let speciesUrl = 'https://swapi.co/api/species/',
            totalSpeciesPages = 0;
        
        axios.get(speciesUrl).then((resp) => {
            const speciesPromises = [];
            totalSpeciesPages = Math.ceil(resp.data.count / resp.data.results.length);
            for(let i = totalSpeciesPages; i > 0; i--) {
                speciesPromises.unshift(axios.get(speciesUrl+'?page='+i));
            }
            axios.all(speciesPromises).then((responses) => {
                const processedSpeciesResponses = [];
                responses.map(response => {
                    response.data.results.map((species) => {
                        processedSpeciesResponses.push(species);
                    })
                })
                dispatch({type:'SPECIES_UPDATED', payload:processedSpeciesResponses});
            }).catch(() => {
                dispatch({type:'SPECIES_UPDATE_FAILED'});
            })
        })

        let starshipUrl = 'https://swapi.co/api/starships/',
            totalStarshipPages = 0;
        
        axios.get(starshipUrl).then((resp) => {
            const starshipPromises = [];
            totalStarshipPages = Math.ceil(resp.data.count / resp.data.results.length);
            for(let i = totalStarshipPages; i > 0; i--) {
                starshipPromises.unshift(axios.get(starshipUrl+'?page='+i));
            }
            axios.all(starshipPromises).then((responses) => {
                const processedStarshipResponses = [];
                responses.map(response => {
                    response.data.results.map((straship) => {
                        processedStarshipResponses.push(straship);
                    })
                })
                dispatch({type:'STARSHIP_UPDATED', payload:processedStarshipResponses});
            }).catch(() => {
                dispatch({type:'STARSHIP_UPDATE_FAILED'});
            })
        })

        let vehicleUrl = 'https://swapi.co/api/vehicles/',
            totalVehiclePages = 0;
        
        axios.get(vehicleUrl).then((resp) => {
            const vehiclePromises = [];
            totalVehiclePages = Math.ceil(resp.data.count / resp.data.results.length);
            for(let i = totalVehiclePages; i > 0; i--) {
                vehiclePromises.unshift(axios.get(vehicleUrl+'?page='+i));
            }
            axios.all(vehiclePromises).then((responses) => {
                const processedVehicleResponses = [];
                responses.map(response => {
                    response.data.results.map((vehicle) => {
                        processedVehicleResponses.push(vehicle);
                    })
                })
                dispatch({type:'VEHICLE_UPDATED', payload:processedVehicleResponses});
            }).catch(() => {
                dispatch({type:'VEHICLE_UPDATE_FAILED'});
            })
        })

    }
}
