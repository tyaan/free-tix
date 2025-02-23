import { useEffect, useState } from "react";
import api from "../api"
import Event from "../models/Event";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

function MyEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/api/events/")
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

      <div className="my-events-container">
        <div className="my-event-list">
          {events.map((event, idx) => (
            <Link to={`/event/${event.id}`} 
                  key={event.title + idx}
            >
              <EventCard event={event}/>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyEvents;
