import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <div>Error: AuthContext is not available</div>;
  }

  const { isAuthenticated } = authContext;

  return (
    <div className="nav-container">
      <div className="nav-title">
        <Link to="/"><h1>FREE-TIX</h1></Link>
      </div>
      <div className="nav-menu">
        {!isAuthenticated &&
        <>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Sign Up</button></Link>
        </>}

        {isAuthenticated && 
        <>
          <Link to="/my-events"><button>My Events</button></Link>
          <Link to="/create-event"><button>Create Event</button></Link>
          <Link to="/profile"><button>Profile</button></Link>
          <Link to="/logout"><button>Logout</button></Link>
        </>}
      </div>
    </div>
  )
}

export default Navbar