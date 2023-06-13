import React, { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../interfaces/ToDo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [todoValue, setTodoValue] = useState("");

    // think of errors!! We aren't handling any. There should be restrictions to keep from adding only 
    // a letter, only numbers or symbols. I think my old team used Yup for this. i'll Look into it #lookup
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // change logic here to also check if the todo id already exists. 
        // if it doesn't 
            // set it as seen below
        setTodoValue(event.currentTarget.value);
        // if it does exist, 
            // add another button to say delete
            // change the task value to the new value in the todos_hash
        // then set the value in the UI. 
      };

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // what does this do exactly? i think i can assume but need to #lookup
      
        // save to todos_hash
        setTodos((previousTodos) => [
          ...previousTodos,
          {
            task: todoValue,
            finished: false,
          },
        ]);
      
        setTodoValue("");
      };

    return (
    <div>
      <h1>Welcome to my to-do app.</h1>
      <TodoList todos={todos} />
      <TodoForm
        onSubmit={handleSubmit}
        onInputChange={handleChange}
        inputValue={todoValue}
        />
    </div>
  );
};

export default App;