const initialState = { isUpdating: false, isUpdated: false, vehicle: [] }

export function Vehicle(state = initialState, action) {
  switch (action.type) {
    case 'VEHICLE_UPDATING':
      return {...state, isUpdating: true, isUpdated: false}
    case 'VEHICLE_UPDATED':
      return {...state, isUpdating: false, isUpdated: true, vehicle: action.payload}
    case 'VEHICLE_UPDATE_FAILED':
      return {...state, isUpdating: false, isUpdated: false, vehicle: []}
    default:
      return state
  }
}
