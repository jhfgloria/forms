import React from 'react';
import MultipleChoice from '.';
import multipleChoiceReducer from './reducer';
import { shallow } from 'enzyme';
import * as constants from './constants';

describe('<MultipleChoice />', () => {
  const id = 'uajhda-ashkbd-233dsfsdf';
  let wrapper;

  describe('when mounting multiple choice component', () => {
    beforeEach(() => {
      wrapper = shallow(<MultipleChoice id={id} />);
    });

    test('should have an id', () => {
      expect(wrapper.prop('id')).toEqual('multichoice-' + id);
    });

    test('should have an empty input', () => {
      const input = wrapper.find('.multichoice-question');
      expect(input).toHaveLength(1);
      expect(input.is('input')).toBeTruthy();
      expect(input.props().value).toEqual('');
    });

    test('should start empty of choices', () => {
      const choices = wrapper.find('.multichoice-choices');
      expect(choices).toHaveLength(1);
      expect(choices.children()).toHaveLength(0);
    });
  });

  describe('when mounting multiple choice components with question', () => {
    const question = 'Are the kids allright?';
    const mockChange = jest.fn();
    let input;

    beforeEach(() => {
      wrapper = shallow(<MultipleChoice id={id} question={question} onChangeQuestion={mockChange} />);
      input = wrapper.find('.multichoice-question');
    })

    test('should start with input filled', () => {
      expect(input.props().value).toEqual(question);
    })
    
    describe('when changing the multiple choice question', () => {
      const newQuestion = 'Are the kids really allright?';

      test('question change prop should be called once', () => {
        input.simulate('change', { target: { value: newQuestion }});
        expect(mockChange).toHaveBeenCalledTimes(1);
      });

      test('question change prop should be with id and new value', () => {
        input.simulate('change', { target: { value: newQuestion }});
        expect(mockChange).toHaveBeenLastCalledWith(id, newQuestion);
      });
    });
  });
});

describe('Multichoice reducer', () => {
  let initialState;
  let newState;

  describe('ADD_MULTIPLE_CHOICE action type', () => {
    const action = {
      type: constants.ADD_MULITPLE_CHOICE
    };

    describe('single action', () => {
      beforeEach(() => {
        initialState = [];
        newState = multipleChoiceReducer(initialState, action);
      });
  
      test('should create new Multiple Choice element in state', () => {
        expect(newState).toHaveLength(1);
        expect(newState[0].type === constants.TYPE).toBeTruthy();
      });

      test('shoud create new Multiple Choice element with empty choices and question', () => {
        expect(newState).toHaveLength(1);
        expect(newState[0].choices).toHaveLength(0);
        expect(newState[0].question).toBe('');
      })
  
      test('should create new Multiple Choice element with id', () => {
        expect(newState).toHaveLength(1);
        expect(newState[0].id).not.toBeUndefined();
      });
    });

    describe('multiple actions', () => {
      beforeEach(() => {
        initialState = [];
        newState = multipleChoiceReducer(multipleChoiceReducer(initialState, action), action);
      });

      test('should create multiple Multiple Choices in state', () => {
        expect(newState).toHaveLength(2);
        expect(newState[0].type === constants.TYPE).toBeTruthy();
        expect(newState[1].type === constants.TYPE).toBeTruthy();
      });

      test('should create multiple Multiple Choice elements with different ids', () => {
        expect(newState).toHaveLength(2);
        expect(newState[0].id).not.toBeUndefined();
        expect(newState[1].id).not.toBeUndefined();
        expect(newState[0].id !== newState[1].id);
      });
    });
  });

  describe('CHANGE_MULTIPLE_CHOICE_QUESTION action type', () => {
    const action = {
      type: constants.CHANGE_MULTIPLE_CHOICE_QUESTION,
      id: '123456789',
      question: 'Are the kids alright?'
    };

    beforeEach(() => {
      initialState = [{
        type: constants.TYPE,
        id: '123456789',
        question: '',
        choices: []
      }];
      newState = multipleChoiceReducer(initialState, action);
      console.log(newState);
    });

    test('should change the multiple choice\'s question with the action payload id', () => {
      expect(newState[0].question).toBe(action.question);
    });
  });
});
