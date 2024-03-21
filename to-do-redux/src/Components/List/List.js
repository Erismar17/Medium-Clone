import { Link } from 'react-router-dom';
import './style.css';
import Item from '../Items/Item';
import { useEffect, useState } from 'react';

function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      
      <div className={'lists'}>

        {todos.map((todo, index) => (
          <Item to={`/details/${index+1}`} title={todo.title} />
        ))}
      </div>

      <div className={'button'}> <Link to={'/add'}> <button>New To-Do</button> </Link> </div>
    </div>
  );
}

export default List;