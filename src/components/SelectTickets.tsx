import React, { useEffect, useState } from 'react'
import Ticket from '../models/Ticket'
import './SelectTickets.css'
import api from "../api"

function SelectTickets({ eventId }: { eventId: number }) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get(`/api/tickets/${eventId}/`)
        console.log(response)
        setTickets(response.data)
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError("Failed to load tickets. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [eventId]);

  const [selectedTickets, setSelectedTickets] = useState<{ [key: number]: number }>({})

  const handleChange = (ticketId: number, quantity: number) => {
    setSelectedTickets(prevState => ({
      ...prevState,
      [ticketId]: quantity
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Selected Tickets:', selectedTickets)
    // Add logic to handle ticket purchase
  }

  if (loading) return <p>Loading tickets...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <form className='select-tickets-form' onSubmit={handleSubmit}>
        {tickets.map(ticket => (
          <div key={ticket.id} className='ticket-option'>
            <label htmlFor={`ticket-${ticket.id}`}>
              {ticket.details} - ${ticket.price}
            </label>
            <input
              id={`ticket-${ticket.id}`}
              type="number"
              min="0"
              value={selectedTickets[ticket.id] || 0}
              onChange={(e) => handleChange(ticket.id, parseInt(e.target.value))}
            />
          </div>
        ))}
        <button className="purchase-tickets-button" type="submit">Purchase Tickets</button>
      </form>
    </>
  )
}

export default SelectTickets
