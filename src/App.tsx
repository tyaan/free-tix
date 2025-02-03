import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Console from './pages/Console'
import CreateEvent from './pages/CreateEvent'
import Event from './pages/Event'
import Login from './pages/Login'
import PurchaseTickets from './pages/PurchaseTickets'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="event/:id" element={<Event />} />
      <Route path="purchase-tickets" element={<PurchaseTickets />} />

      <Route path="/console" element={<Console />} />
      <Route path="create-event" element={<CreateEvent />} />
    </Routes>
  )
}

export default App