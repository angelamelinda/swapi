const initialState = { isFiltering: false, isFiltered: false, filter: [] }

export function Filter(state = initialState, action) {
  switch (action.type) {
    case 'FILTERING':
      return {...state, isFiltering: true, isFiltered: false}
    case 'FILTERED':
      return {...state, isFiltering: false, isFiltered: true, filter: action.payload}
    case 'FILTER_FAILED':
      return {...state, isFiltering: false, isFiltered: false, filter: []}
    case 'FILTER_RESET':
      return {...state, isFiltering: false, isFiltered: false, filter: []}
    default:
      return state
  }
}
