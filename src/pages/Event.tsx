import { useParams } from 'react-router-dom'
import Event from '../models/Event'
import dummyEvents from '../dummy-data/Event'
import './Event.css'
import SelectTickets from '../components/SelectTickets'
import Navbar from '../components/Navbar'

function EventPage() {
  const { id } = useParams()

  if(id == undefined){ return <div>Invalid event id</div> }
  if(isNaN(parseInt(id))){ return <div>Invalid event id</div> }

  const event: Event | undefined = dummyEvents.find((event) => event.id == +id)

  if (!event) {
    return <div>Event not found</div>
  }

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

          <div className='select-tickets-container'>
            <SelectTickets eventId={event.id} />
          </div>
          
        </div>
      </div>
        
    </>
  )
}

export default EventPage