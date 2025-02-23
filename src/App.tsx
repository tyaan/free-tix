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
import { AuthProvider } from './context/AuthContext'
import MyEvents from './pages/MyEvents'

function Logout() {
  localStorage.clear();
  console.log(localStorage.getItem('ACCESS_TOKEN'));
  return <Navigate to="/login" />
}

function LogoutAndLogin() {
  localStorage.clear();
  return <Login />
}

function LogoutAndRegister() {
  localStorage.clear();
  return <Register />
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogoutAndLogin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<LogoutAndRegister />} />

        <Route path="/event/:id" element={<Event />} />
        <Route path="/purchase-tickets" element={<PurchaseTickets />} />

        <Route path="/console" element={<Console />} />
        <Route path="/my-events" element={
          <ProtectedRoute >
            <MyEvents />
          </ProtectedRoute>
          } />
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
    </AuthProvider>
  )
}

export default App