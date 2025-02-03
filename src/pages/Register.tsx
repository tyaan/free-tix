import { Link } from 'react-router-dom'
import './Register.css'

function Register() {

  return (
    <div className='register-container'>
      <h1>Register</h1>
      <input type="text" placeholder="Username" className="register-input" />
      <input type="password" placeholder="Password" className="register-input" />
      <p className="login-text">Already have an account? <Link to='/login'>Login here</Link></p>
    </div>
  )
}

export default Register
