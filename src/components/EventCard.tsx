import Event from '../models/Event'
import './EventCard.css'

function EventCard({ event }: {event: Event}) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  }

  const startTimeFormatted = event.startTime.toLocaleString('en-NZ', options)
  const endTimeFormatted = event.endTime.toLocaleString('en-NZ', options)

  return (
    <div className='event-card'>
      <img src={event.imgURL} alt={event.title} className="event-image" />
      <h2 className="event-title">{event.title}</h2>
      <p>{startTimeFormatted+' - '+endTimeFormatted}</p>
      <p>{event.location}</p>
    </div>
  )
}

export default EventCard