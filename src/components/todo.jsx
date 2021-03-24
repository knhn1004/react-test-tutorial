import React from 'react';

const todo = ({ id, title, completed }) => {
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo-${id}`}>{text}</div>;
};

export default todo;
