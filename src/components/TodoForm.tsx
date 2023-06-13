import React, { HTMLProps, ChangeEvent } from "react";

interface Props extends HTMLProps<HTMLFormElement> {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

// change logic here to have 3 buttons: create, edit and delete
// change button in props to be a boolean that is create when the text box is empty but then has edit (if the id exists) and delete when not

const TodoForm = ({ onInputChange, inputValue, ...props }: Props) => {
  return (
    <form {...props}>
      <input
        className="form-control"
        placeholder="What would you like to get done?"
        onChange={onInputChange}
        value={inputValue}
      />
      <button className="btn btn-primary">Create</button>
    </form>
  );
};

export default TodoForm;