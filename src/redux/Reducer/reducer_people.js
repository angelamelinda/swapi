const initialState = { isUpdating: false, isUpdated: false, people: [] }

export function People(state = initialState, action) {
  switch (action.type) {
    case 'PEOPLE_UPDATING':
      return {...state, isUpdating: true, isUpdated: false}
    case 'PEOPLE_UPDATED':
      return {...state, isUpdating: false, isUpdated: true, people: action.payload}
    case 'PEOPLE_UPDATE_FAILED':
      return {...state, isUpdating: false, isUpdated: false, people: []}
    default:
      return state
  }
}
