import { Link } from 'react-router-dom'
import './Login.css'

function Login() {

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <input type="text" placeholder="Username" className="login-input" />
      <input type="password" placeholder="Password" className="login-input" />
      <p className="signup-text">Don't have an account? <Link to='/register'>Sign up here</Link></p>
    </div>
  )
}

export default Login
