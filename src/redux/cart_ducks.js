const ADD_TO_CART = "ADD_TO_CART";
const DELETE_ITEM_BY_INDEX = "DELETE_ITEM_BY_INDEX";

export const addToCart = product => ({ type: ADD_TO_CART, payload: product });
export const deleteItemFromCartByIndex = index => ({
  type: DELETE_ITEM_BY_INDEX,
  payload: index
});
const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  if (type === ADD_TO_CART) {
    return {
      ...state,
      cart: [...state.cart, ...payload]
    };
  } else if (type === DELETE_ITEM_BY_INDEX) {
    const cartClone = [...state.cart];
    const updatedCart = cartClone.filter((item, index) => index !== payload);
    return {
      ...state,
      cart: updatedCart
    };
  } else {
    return state;
  }
};
