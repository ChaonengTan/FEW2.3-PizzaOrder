export const ADD_PIZZA = "ADD_PIZZA"
export const EDIT_PIZZA = "EDIT_PIZZA"
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
export const editPizza = (index, name, composition) => {
    return {
      type: EDIT_PIZZA,
      payload: { index, name, composition }
    }
}