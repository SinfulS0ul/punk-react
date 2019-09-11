import { TOGGLE_POPUP } from '../actions/actions';

const initialState = {
  show: false
};

const popupReducer = ( state = initialState, {type, payload} ) => {
    switch (type) {
      case TOGGLE_POPUP:
        return{
          ...state,
          show: payload
        };
      default:
        return state;
    }
};

export default popupReducer;