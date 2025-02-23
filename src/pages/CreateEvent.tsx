import Navbar from '../components/Navbar'
import './CreateEvent.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import api from "../api"

function CreateEvent() {
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [description, setDescription] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [location, setLocation] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault()
    const formattedStartTime = new Date(startTime).toISOString().split('.')[0] + 'Z';
    const formattedEndTime = new Date(endTime).toISOString().split('.')[0] + 'Z';
    const newEvent = {
      title,
      overview,
      description,
      imgURL,
      location,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
    }
    try {
      const res = await api.post('/api/events/', {...newEvent});
      console.log('Event created:', res.data);
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
      } else {
        console.error("Request failed:", error);
      }
      alert(error);
    }
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