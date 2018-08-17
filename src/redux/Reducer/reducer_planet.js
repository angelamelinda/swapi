const initialState = { isUpdating: false, isUpdated: false, planet: [] }

export function Planet(state = initialState, action) {
  switch (action.type) {
    case 'PLANET_UPDATING':
      return {...state, isUpdating: true, isUpdated: false}
    case 'PLANET_UPDATED':
      return {...state, isUpdating: false, isUpdated: true, planet: action.payload}
    case 'PLANET_UPDATE_FAILED':
      return {...state, isUpdating: false, isUpdated: false, planet: []}
    default:
      return state
  }
}
