import Navbar from '../components/Navbar'
import './Console.css'
import '../dummy-data/Event'
import dummyEvents from '../dummy-data/Event'
import EventCard from '../components/EventCard'

function Console() {

  return (
    <>
      <Navbar />
      <div className="console-container">
        <div className="event-list">
          {dummyEvents.map((event, idx) => (
            <EventCard key={event.title + idx} event={event}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Console

