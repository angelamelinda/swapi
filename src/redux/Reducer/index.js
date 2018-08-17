import { combineReducers } from 'redux';

import { Film } from './reducer_film.js';
import { People } from './reducer_people.js';
import { Planet } from './reducer_planet.js';
import { Species } from './reducer_species.js';
import { Starship } from './reducer_starship.js';
import { Vehicle } from './reducer_vehicle.js';
import { Filter } from './reducer_filter.js';

const AllReducer = combineReducers({
  Film,
  People,
  Planet,
  Species,
  Starship,
  Vehicle,
  Filter
})

export default AllReducer;
