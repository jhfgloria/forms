import React from 'react';

export default class Form extends React.Component {
  componentWillMount() {
    const initialState = {};
    React.Children.forEach(this.props.children, child => {
      initialState[child.props.id] = { selectedValue: undefined }
    });
    this.setState(initialState);
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {onChange: (values) => { this.onChange(child.props.id, values); } });
    });
  }

  onChange(id, values) {
    const actualState = this.state;
    actualState[id] = values;
    this.setState(actualState);
  }

  onSubmit() {
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <React.Fragment>
        {this.renderChildren()}
      </React.Fragment>
    );
  }
}
