// Import Actions
import { ADD_PRODUCTS } from './ShopActions';

// Initial State
const initialState = {
  products: [],
  initialLoadComplete: false,
};

const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return Object.assign({}, state, {
        products: action.products,
        initialLoadComplete: true,
      })
    default:
      return state;
  }
};

export default ShopReducer;
