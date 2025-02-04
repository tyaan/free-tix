import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <Link to="/"><h1>FREE-TIX</h1></Link>
      </div>
      <div className="nav-menu">
        <Link to="/create-event"><button>Create Event</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Navbar