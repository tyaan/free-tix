import Event from '../models/Event'
import './EventCard.css'

function EventCard({ event }: {event: Event}) {
  return (
    <div className="event-card">
      <img src={event.imgURL} alt={event.title} className="event-image" />
      <h2 className="event-title">{event.title}</h2>
      <p className="event-overview">{event.overview}</p>
      <p className="event-description">{event.description}</p>
    </div>
  )
}

export default EventCard