import React from 'react';
import SelectDropdown from './select-dropdown/index.jsx';
import Form from './form/index.jsx';

const App = () => {
  const select = {
    id: 1,
    options: [{
      value: 'foo', name: 'Foo'
    }, {
      value: 'bar', name: 'Bar'
    }]
  };

  const select2 = {
    id: 2,
    options: [{
      value: 'foo', name: 'Foo'
    }, {
      value: 'bar', name: 'Bar'
    }]
  };

  return (
    <React.Fragment>
      <Form>
        <SelectDropdown {...select} />
        <SelectDropdown {...select2} />
      </Form>
    </React.Fragment>
  );
};

export default App;
