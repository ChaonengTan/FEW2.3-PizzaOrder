import { ADD_PIZZA, DELETE_PIZZA } from '../actions'
const pizzaReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_PIZZA:
      const { name, composition } = action.payload
      return [...state, { name, composition }]

    case DELETE_PIZZA:
      const { index } = action.payload
      return [...state.slice(0, index), ...state.slice(index + 1)]

    default:
      return state
  }
}

export default pizzaReducer
