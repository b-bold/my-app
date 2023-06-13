import React, { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../interfaces/ToDo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [todoValue, setTodoValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoValue(event.currentTarget.value);
      };

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
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