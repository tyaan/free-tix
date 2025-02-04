import { Link } from 'react-router-dom'
import './LoginRegister.css'

function Register() {

  return (
    <div className='login-container'>
      <div className='login-title'>
        <Link to='/' className='home-link'>
          <h1>FREE-TIX</h1>
        </Link>
      </div>
      <div className='login-form'>
        <h1>Register</h1>
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <p className="signup-text">Already have an account? <Link to='/login'>Login here</Link></p>
      </div>
    </div>
  )
}

export default Register
