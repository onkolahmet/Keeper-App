import React from "react";

const Input = (props) => {
  const { value, onChange } = props;
  const handleOnChange = (event) => {
    onChange(event);
  };

  return (
    <input
      name="title"
      class="textSpace"
      onChange={handleOnChange}
      value={value}
      placeholder="Title"
      autoComplete="off"
      autocorrect="off" 
      autocapitalize="off" 
      spellcheck="false"
      autoFocus
    />
  );
};

export default Input;
