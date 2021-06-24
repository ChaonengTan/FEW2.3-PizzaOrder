import { ADD_PIZZA, DELETE_PIZZA, EDIT_PIZZA } from '../actions'
const pizzaReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_PIZZA:
      const { name, password } = action.payload
      return [...state, { name, password }]

    case DELETE_PIZZA:
      const { index } = action.payload
      return [...state.slice(0, index), ...state.slice(index + 1)]

    case EDIT_PIZZA:
      return state.map((item, index) => {
        if (index !== action.payload.index) {
          return item
        }
        return { ...item, ...action.payload }
      })

    default:
      return state
  }
}

export default pizzaReducer
