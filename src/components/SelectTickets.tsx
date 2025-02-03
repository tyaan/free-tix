import React, { useState } from 'react'
import Ticket from '../models/Ticket'
import dummyTickets from '../dummy-data/Ticket'
import './SelectTickets.css'

function SelectTickets({ eventId }: { eventId: number }) {
  const tickets: Ticket[] = dummyTickets.filter((ticket) => ticket.eventId === eventId)
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

  return (
    <div className='select-tickets-container'>
      <form onSubmit={handleSubmit}>
        {tickets.map(ticket => (
          <div key={ticket.id} className='ticket-option'>
            <label>
              {ticket.details} - ${ticket.price}
              <input
                key={ticket.id}
                type="number"
                min="0"
                value={selectedTickets[ticket.id] || 0}
                onChange={(e) => handleChange(ticket.id, parseInt(e.target.value))}
              />
            </label>
          </div>
        ))}
        <button type="submit">Purchase Tickets</button>
      </form>
    </div>
  )
}

export default SelectTickets
