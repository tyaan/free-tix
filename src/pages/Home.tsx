import Navbar from '../components/Navbar'
import './Home.css'
import EventCard from '../components/EventCard'
import dummyEvents from '../dummy-data/Event'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="event-list">
          {dummyEvents.map((event, idx) => (
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
