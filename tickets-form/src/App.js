import React, { useState, useEffect } from 'react';
import TicketsForm from './TicketsForm.js';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/tickets')
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  const addTicket = (ticket) => {
    fetch('http://localhost:3002/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticket),
    })
      .then((response) => response.json())
      .then((data) => setTickets([...tickets, data]));
  };

  const deleteTicket = (id) => {
    fetch(`http://localhost:3002/tickets/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTickets(tickets.filter((ticket) => ticket.id !== id)));
  };

  return (
  <body>
      <TicketsForm addTicket={addTicket} />
      <div className='tickets-list' >
           <h2>Current Tickets</h2>
        {tickets.map((ticket) => (
          
            <div className='details' key={ticket.id}>
                <h3>{ticket.title}</h3>
                <p>{ticket.description}</p>
                <p>Prioridad: {ticket.priority}</p>
                <button onClick={() => deleteTicket(ticket.id)}>Eliminar</button>
            </div>
          
        ))}
        </div>
    </body>
  );
};

export default App;