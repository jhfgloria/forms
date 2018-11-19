import multipleChoiceReducer from '../multiple-choice/reducer.js';
import * as constants from '../multiple-choice/constants';

const formElements = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_MULITPLE_CHOICE:
    case constants.CHANGE_MULTIPLE_CHOICE_QUESTION:
      return multipleChoiceReducer(state, action);    
    default:
      return state;
  }
};

export default formElements;
