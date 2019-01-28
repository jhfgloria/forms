import React from 'react';

const SelectDropdown = props => {
  const onSelectChange = event => {
    props.onChange(event.target.value);
  };

  return (
    <select onChange={onSelectChange}>
      {props.options.map((opt, key) => <option key={key} value={opt.value}>{opt.name}</option>)}
    </select>
  );
};

export default SelectDropdown;
