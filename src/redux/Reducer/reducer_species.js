const initialState = { isUpdating: false, isUpdated: false, species: [] }

export function Species(state = initialState, action) {
  switch (action.type) {
    case 'SPECIES_UPDATING':
      return {...state, isUpdating: true, isUpdated: false}
    case 'SPECIES_UPDATED':
      return {...state, isUpdating: false, isUpdated: true, species: action.payload}
    case 'SPECIES_UPDATE_FAILED':
      return {...state, isUpdating: false, isUpdated: false, species: []}
    default:
      return state
  }
}
