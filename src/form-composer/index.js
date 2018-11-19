import FormComposer from './form-composer.jsx';
import { addMultipleChoice, changeMultipleChoiceQuestion } from './actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  formElements: state.formElements
});

const mapDispatchToProps = dispatch => ({
  addMultipleChoice: () => dispatch(addMultipleChoice()),
  changeMultipleChoiceQuestion: (id, question) => dispatch(changeMultipleChoiceQuestion(id, question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComposer);
