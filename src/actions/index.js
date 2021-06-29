export const ADD_PIZZA = "ADD_PIZZA"
export const DELETE_PIZZA = "DELETE_PIZZA"
export const addPizza = (name, composition) => {
  return {
    type: ADD_PIZZA,
    payload: { name, composition }
  }
}
export const deletePizza = (index) => {
    return {
      type: DELETE_PIZZA,
      payload: { index }
    }
}