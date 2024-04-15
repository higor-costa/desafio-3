import React from 'react';

const Input = ({ setValue, ...props }) => {
  return (
    <>
      <input onChange={({ target }) => setValue(target.value)} {...props} />
    </>
  );
};

export default Input;
