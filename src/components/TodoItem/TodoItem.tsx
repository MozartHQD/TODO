import type { Todo } from '../../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none', flexGrow: 1 }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '10px' }}>
        Видалити
      </button>
    </li>
  );
};