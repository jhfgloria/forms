import * as constants from './constants';
import uuid from 'uuid/v4';

const multipleChoice = (formElements = [], action) => {
  switch (action.type) {
    case constants.ADD_MULITPLE_CHOICE:
      return [
        ...formElements, 
        {
          id: uuid(),
          type: constants.TYPE,
          choices: [],
          question: '', 
        }
      ];
    case constants.CHANGE_MULTIPLE_CHOICE_QUESTION:
      return formElements.map(element => {
        if (element.id === action.id) {
          return {
            ...element,
            question: action.question
          }
        }
        return element;
      });
    default: 
      return formElements;
  };
};

export default multipleChoice;
