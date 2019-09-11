import { GETTING_DETAILS, GETTING_PRODUCTS } from '../actions/actions';

const initialState = {
  product: {},
  currentProducts: []
};

const productReducer = ( state = initialState, {type, payload} ) => {
    switch (type) {
      case GETTING_DETAILS:
        return{
          ...state,
          product: payload
        };
      case GETTING_PRODUCTS:
        return{
          ...state,
          currentProducts: payload
        };
      default:
        return state;
    }
};

export default productReducer;