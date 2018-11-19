import React from 'react';

const MultipleChoice = ({ id, question = '', choices = [], onChangeQuestion = () => {} }) => {
  const displayChoices = choices => choices.map(choice => null);
  const changeQuestion = event => onChangeQuestion(id, event.target.value);

  return (
    <section id={'multichoice-' + id}>
      <input type='text' className='multichoice-question' value={question} onChange={changeQuestion}></input>
      <section className='multichoice-choices'>
        {displayChoices(choices)}
      </section>
    </section>
  );
};

export default MultipleChoice;
