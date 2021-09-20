import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const {user, setUser} = useContext(UserContext);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr/>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      {!user.id &&
      
      <button
        className="btn btn-primary"
        onClick={()=>setUser({id:1, name: "Mario"})}
      >Login</button>
      }
    </div>
  )
}
