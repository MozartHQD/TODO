import { useState } from 'react';
import type { Todo } from './types';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';
import { TodoList } from './components/TodoList/TodoList';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

type Filter = 'all' | 'active' | 'done';

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<Filter>('all');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Лічильник невиконаних обчислюється під час рендеру
  const remainingCount = todos.filter((todo) => !todo.done).length;

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
    return true;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
      <h1>Список справ</h1>
      
      <AddTodoForm onAdd={addTodo} />

      <div style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>Всі</button>
        <button onClick={() => setFilter('active')} disabled={filter === 'active'}>Активні</button>
        <button onClick={() => setFilter('done')} disabled={filter === 'done'}>Виконані</button>
      </div>

      <p><strong>Залишилось виконати:</strong> {remainingCount}</p>

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;