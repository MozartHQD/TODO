import { useState, type FormEvent } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim() === '') return; // порожній рядок не додаємо
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Нове завдання..."
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Додати</button>
    </form>
  );
};