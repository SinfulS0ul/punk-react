import { SET_PAGE } from '../actions/actions';

const initialState = {
  page: 1
};

const pageReducer = ( state = initialState, {type, payload} ) => {
    switch (type) {
      case SET_PAGE:
        return{
          ...state,
          page: payload
        };
      default:
        return state;
    }
};

export default pageReducer;