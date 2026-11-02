import type { Todo } from '../../types';
import { TodoItem } from '../TodoItem/TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  if (todos.length === 0) return <p>Завдань немає.</p>;

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Обов'язково key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};