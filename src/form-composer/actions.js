import * as constants from '../multiple-choice/constants';

export const addMultipleChoice = () => ({
  type: constants.ADD_MULITPLE_CHOICE
});

export const changeMultipleChoiceQuestion = (id, question) => ({
  type: constants.CHANGE_MULTIPLE_CHOICE_QUESTION,
  id, 
  question
});
