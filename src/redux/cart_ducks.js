const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = product => ({ type: ADD_TO_CART, payload: product });

const initialState = {
  cart: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  if (type === ADD_TO_CART) {
    return {
      ...state,
      cart: [...state.cart, payload]
    };
  } else {
    return state;
  }
};
