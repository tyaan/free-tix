import { Link } from 'react-router-dom'
import './LoginRegister.css'
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Login() {

  const [username, setUsername] = useState<string>(""); 
  const [password, setPassword] = useState<string>(""); 
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post('/api/token/', {username, password});
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate('/');
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
        <h1>Login</h1>
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className='login-button'>
          Login
        </button>
        <p className="signup-text">Don't have an account? <Link to='/register'>Sign up here</Link></p>
      </form>
    </div>
  )
}

export default Login