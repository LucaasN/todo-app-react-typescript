import React, { useState } from "react";

interface Props {
  saveTodo: (title: string) => void;
}

export const CreateTodo:React.FC<Props> = ({ saveTodo }) => {

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        const nameNewTodo: string = inputValue
        saveTodo(nameNewTodo)
        setInputValue('')
    }

    const handleOnChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Ingresa una nueva tarea"
        autoFocus
      />
    </form>
  );
};
