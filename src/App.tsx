import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Console from './pages/Console'
import CreateEvent from './pages/CreateEvent'
import Event from './pages/Event'
import Login from './pages/Login'
import PurchaseTickets from './pages/PurchaseTickets'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoutes'
import NotFound from './pages/NotFound'

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<RegisterAndLogout />} />

      <Route path="/event/:id" element={<Event />} />
      <Route path="/purchase-tickets" element={<PurchaseTickets />} />

      <Route path="/console" element={<Console />} />
      <Route path="/create-event" element={
        <ProtectedRoute >
          <CreateEvent />
        </ProtectedRoute>
        } />

      <Route path="/profile" element={
        <ProtectedRoute >
          <Profile />
        </ProtectedRoute>
        } />

      <Route path="*" element={<NotFound  />} />
    </Routes>
  )
}

export default App