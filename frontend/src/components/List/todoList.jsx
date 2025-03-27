import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  // Estado para manejar la lista de tareas
  const [todos, setTodos] = useState([]);
  // Estado para manejar el valor del input
  const [task, setTask] = useState("");

  // Función para agregar una nueva tarea
  const addTodo = () => {
    if (task.trim() === "") return; // Evitar agregar tareas vacías
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // Limpiar el input
  };

  // Función para eliminar una tarea
  const deleteTodo = (id) => {
    // Filtrar la lista de tareas para eliminar la tarea con el ID específico
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <br />
      <h3>Todo List</h3>
      <div className="input-container">
        <input
          className="todoInput"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="botonVerde" onClick={addTodo}>
          Add
        </button>
      </div>
      <br />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li class = "list-task" key={todo.id} className={todo.completed ? "completed" : ""}>
            <span className="task">{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Eliminar </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
