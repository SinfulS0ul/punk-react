import { SET_FETCHED_PAGES } from '../actions/actions';

const initialState = {
  pages: [1]
};

const fetchedPageReducer = ( state = initialState, {type, payload} ) => {
    switch (type) {
      case SET_FETCHED_PAGES:
        return{
          ...state,
          pages: [...state.pages, payload]
        };
      default:
        return state;
    }
};

export default fetchedPageReducer;