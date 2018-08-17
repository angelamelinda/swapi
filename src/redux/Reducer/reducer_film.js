const initialState = { isUpdating: false, isUpdated: false, film: [] }

export function Film(state = initialState, action) {
  switch (action.type) {
    case 'FILM_UPDATING':
      return {...state, isUpdating: true, isUpdated: false}
    case 'FILM_UPDATED':
      return {...state, isUpdating: false, isUpdated: true, film: action.payload}
    case 'FILM_UPDATE_FAILED':
      return {...state, isUpdating: false, isUpdated: false, film: []}
    default:
      return state
  }
}
