import './App.css';
import React, { useState } from 'react';

function TicketsForm(props) {

  const {addTicket} = props;
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [resolved, setResolved] = useState(false);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !priority) return;
    if (title.length <= 6 || title.length >= 18) return alert("Title must be in a range 6 and 18 characters");
    addTicket({ title, priority, description, resolved });
    setTitle('');
    setPriority('');
    setDescription('');
    setResolved(false);
  };

  return (
    <body>
      <div className={'tickets-form'}>
          <form onSubmit={handleSubmit}>
            <h2>Add Ticket</h2>
            <label>Title</label>
              <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="">Selecciona Prioridad</option>
              <option value="1">Baja</option>
              <option value="2">Media</option>
              <option value="3">Alta</option>
            </select>
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
            <label>Mark as resolved</label>
              <input type='checkbox' checked={resolved} onChange={(e) => setResolved(e.target.value)}/>
            <button type='submit'>Enviar</button>
          </form>
      </div>
    </body>
  );
};

export default TicketsForm;