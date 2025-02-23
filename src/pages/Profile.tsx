import { useContext } from 'react'
import './Profile.css'
import { AuthContext } from '../context/AuthContext';

function Profile() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <div>Error: AuthContext is not available</div>;
  }

  const { user } = authContext;


  return (
    <div className='profile-container'>
      {"username: " + user?.username}
    </div>
  )
}

export default Profile
