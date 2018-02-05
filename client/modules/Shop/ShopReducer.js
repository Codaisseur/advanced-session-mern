// Import Actions
import { ADD_PRODUCTS } from './ShopActions';

// Initial State
const initialState = {
  products: [],
};

const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return Object.assign({}, state, {
        products: action.products,
      })
    default:
      return state;
  }
};

export default ShopReducer;
