import { useParams } from 'react-router-dom'
import Event from '../models/Event'
import dummyEvents from '../dummy-data/Event'
import './Event.css'
import SelectTickets from '../components/SelectTickets'

function EventPage() {
  const { id } = useParams()

  if(id == undefined){ return <div>Invalid event id</div> }
  if(isNaN(parseInt(id))){ return <div>Invalid event id</div> }

  const event: Event | undefined = dummyEvents.find((event) => event.id == +id)

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="event-page">
      <img src={event.imgURL} alt={event.title} className="event-image" />
      <h1 className="event-title">{event.title}</h1>
      <p className="event-overview">{event.overview}</p>
      <p className="event-description">{event.description}</p>
      <p className="event-location">Location: {event.location}</p>
      <p className="event-time">Start Time: {event.startTime.toString()}</p>
      <p className="event-time">End Time: {event.endTime.toString()}</p>
      <SelectTickets eventId={event.id} />
    </div>
  )
}

export default EventPage