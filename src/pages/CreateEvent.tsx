import Navbar from '../components/Navbar'
import './CreateEvent.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import api from "../api"
import { TicketDetails } from '../models/Ticket'

function CreateEvent() {
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [description, setDescription] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [location, setLocation] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const [tickets, setTickets] = useState<TicketDetails[]>([{price: 0, details: ''}])

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault()
    const formattedStartTime = new Date(startTime).toISOString().split('.')[0] + 'Z';
    const formattedEndTime = new Date(endTime).toISOString().split('.')[0] + 'Z';
    const event = {
      title,
      overview,
      description,
      imgURL,
      location,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
    }
    try {
      const res = await api.post('/api/events/create', {event, tickets});
      console.log('Event created:', res.data);
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
      } else {
        console.error("Request failed:", error);
      }
      alert(error);
    }
    navigate('/my-events');
  }

  return (
    <>
      <Navbar />
      <div className="create-event-container">
        <h1>Create Event</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Overview"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="datetime-local"
            placeholder="Start Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <input
            type="datetime-local"
            placeholder="End Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
          <h3>Tickets</h3>
          <button type="button" onClick={() => {
            setTickets((prev) => [...prev, {price: 0, details: ''}])
          }}>
            Add Ticket
          </button>
          {Array.from({ length: tickets.length }, (_, i) => (
            <div key={i}>
              <input
                type="number"
                step="any"
                placeholder={`Ticket ${i + 1} price`}
                value={tickets[i].price || ''}  
                onChange={(e) => {
                  const newPrice = parseFloat(e.target.value);
                  setTickets((prevTickets) => {
                    const updatedTickets = [...prevTickets];
                    updatedTickets[i].price = newPrice;
                    return updatedTickets;
                  });
                }}
                required
              />
              <input
                type="text"
                placeholder={`Ticket ${i + 1} details`}
                value={tickets[i].details || ''}
                onChange={(e) => {
                  const newDetails = e.target.value;
                  setTickets((prevTickets) => {
                    const updatedTickets = [...prevTickets];
                    updatedTickets[i].details = newDetails;
                    return updatedTickets;
                  });
                }}
                required
              />
            </div>
          ))}

          <button type="button" onClick={() => {
            setTickets((prev) => prev.length > 1 ? prev.slice(0, -1): prev)
          }}>
            Remove Ticket
          </button>

          <button type="submit">Create Event</button>
        </form>
      </div>
    </>
  )
}

export default CreateEvent