import Navbar from '../components/Navbar'
import './Home.css'
import EventCard from '../components/EventCard'
import dummyEvents from '../dummy-data/Event'

function Home() {

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

export default Home
