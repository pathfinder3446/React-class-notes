const initialState = {}

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case payload :
    return { ...state, ...payload }

  default:
    return state
  }
}
 export default todoReducer;