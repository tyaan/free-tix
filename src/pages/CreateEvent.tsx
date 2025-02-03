import Navbar from '../components/Navbar'
import './CreateEvent.css'
import { useState } from 'react'

function CreateEvent() {
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [description, setDescription] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [location, setLocation] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newEvent = {
      title,
      overview,
      description,
      imgURL,
      location,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      ticketID: []
    }
    console.log(newEvent)
    // ADD LOGIC TO STORE NEW EVENT
  }

  return (
    <>
      <Navbar />
      <div className="create-event-container">
        <h1>Create Event</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Overview"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="datetime-local"
            placeholder="Start Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <input
            type="datetime-local"
            placeholder="End Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
          <button type="submit">Create Event</button>
        </form>
      </div>
    </>
  )
}

export default CreateEvent