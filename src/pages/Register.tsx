import { Link } from 'react-router-dom'
import './LoginRegister.css'
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Register() {

  const [username, setUsername] = useState<string>(""); 
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>(""); 
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post('/api/user/register/', {username, email, password});
      console.log(res.data)
      navigate('/login');
    } catch(error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='login-container'>
      <div className='login-title'>
        <Link to='/' className='home-link'>
          <h1>FREE-TIX</h1>
        </Link>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose a username"
          disabled={loading} 
        />
        <input
          className="login-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          disabled={loading} 
        />
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Choose a password"
          disabled={loading} // Disable input while loading
        />
        <button type="submit" className='login-button' disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
        <p className="signup-text">Already have an account? <Link to='/login'>Login here</Link></p>
      </form>
    </div>
  )
}

export default Register