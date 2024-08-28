import React, { useState } from 'react';

function ToDoList() {
  const [todo, setTodo] = useState([]); //todo initialized as an empty array. setTodo is a function used to update the tasks state.
  const [text, setText] = useState('');

//Function that will add a new todo to the list.
  const addTodo = () => {
    //Checks if the text state is not just whitespace. trim() removes whitespace from both ends of the string.
    if (text.trim()) {
      setTodo([...todo, text]);
      setText('');
    }
  };

  const deleteTodo = (index) => {
    setTodo(todo.filter((todo, todoIndex) => todoIndex !== index));//When an argument isn't used, it's a common to use an underscore (_) to indicate that the parameter is intentionally unused:
  };

  return (
    <div className="App">
      <input 
        value={text} 
        onChange={(event) => setText(event.target.value)} 
        placeholder="Add a new todo" 
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo} 
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
// The key prop helps React identify which items have changed, been added, or removed. 
export default ToDoList;