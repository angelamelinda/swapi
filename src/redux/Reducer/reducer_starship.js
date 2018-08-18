const initialState = { isUpdating: false, isUpdated: false, starship: [] }

export function Starship(state = initialState, action) {
  switch (action.type) {
    case 'STARSHIP_UPDATING':
      return {...state, isUpdating: true, isUpdated: false}
    case 'STARSHIP_UPDATED':
      return {...state, isUpdating: false, isUpdated: true, starship: action.payload}
    case 'STARSHIP_UPDATE_FAILED':
      return {...state, isUpdating: false, isUpdated: false, starship: []}
    default:
      return state
  }
}
