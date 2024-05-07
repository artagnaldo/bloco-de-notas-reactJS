import React, { useState } from 'react';
import './App.css';

type Note = {
  id: number;
  title: string;
  content: string;
};

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputContent, setInputContent] = useState<string>('');

  const addNote = () => {
    if (inputTitle.trim() === '' || inputContent.trim() === '') return;
    const newNote: Note = {
      id: Date.now(),
      title: inputTitle,
      content: inputContent,
    };
    setNotes([...notes, newNote]);
    setInputTitle('');
    setInputContent('');
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h2>Bloco de Notas</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Título"
          style={{ width: '300px' }} 
        />
        <textarea
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
          placeholder="Nota"
          style={{ width: '300px', height: '50px', margin: '0 auto' }} 
        ></textarea>
        <button onClick={addNote}>Salvar</button>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <div className="note" key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
