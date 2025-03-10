import Navbar from '../components/Navbar'
import './Home.css'
import EventCard from '../components/EventCard'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Event from '../models/Event'
import api from "../api"

function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/api/events/public/")
        console.log(response)
        setEvents(response.data)
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="event-list">
          {events.map((event, idx) => (
            <Link to={`event/${event.id}`} 
                  key={event.title + idx}
            >
              <EventCard event={event}/>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
