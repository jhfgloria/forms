import React from 'react';
import MultipleChoice from '../multiple-choice';
import { TYPE as MULTIPLE_CHOICE_TYPE } from '../multiple-choice/constants';

const FormComposer = (props) => {
  const formElementsFactory = (key, el) => {
    switch (el.type) {
      case MULTIPLE_CHOICE_TYPE:
        return <MultipleChoice key={key} id={el.id} question={el.question} onChangeQuestion={props.changeMultipleChoiceQuestion} />;
      default:
        return <React.Fragment key={key} />;
    }
  };

  return (
    <section>
      {props.formElements.map((el, key) => formElementsFactory(key, el))}
      <button onClick={props.addMultipleChoice}>Adicionar Escolha múltipla</button>
    </section>
  );
};

export default FormComposer;
