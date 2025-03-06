import { useParams } from 'react-router-dom'
import Event from '../models/Event'
import './Event.css'
import SelectTickets from '../components/SelectTickets'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import api from '../api'

function EventPage() {
  const { id } = useParams()

  const [event, setEvent] = useState<Event>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get(`/api/events/public/${id}/`)
        console.log(response)
        setEvent(response.data)
      } catch (err) {
        console.error("Error fetching event:", err);
        setError("Failed to load event. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [id]);

  if(id == undefined){ return <div>Invalid event id</div> }
  if(isNaN(parseInt(id))){ return <div>Invalid event id</div> }

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
      <div className="event-container">

        <img className="event-image" src={event.imgURL} alt={event.title} />

        <div className="event-body">
          <div className="event-info">
            <h1 className="event-title">{event.title}</h1>
            <p className="event-overview">{event.overview}</p>
            <p className="event-description">{event.description}</p>
            <p className="event-location">Location: {event.location}</p>
            <p className="event-time">Start Time: {event.startTime.toString()}</p>
            <p className="event-time">End Time: {event.endTime.toString()}</p>
          </div>

          {<div className='select-tickets-container'>
            <SelectTickets eventId={event.id} />
          </div>}
          
        </div>
      </div>
        
    </>
  )
}

export default EventPage