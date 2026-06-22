import React, {useContext} from 'react'
import UserContext from "../context/UserContext"


const Profile = () => {

    const user = useContext(UserContext);
  return (
    <div>
        <h1>Name: {user.name}</h1>
        <p>Role: {user.role}</p>
        <p>Gender: {user.gender}</p>

    </div>
  )
}

export default Profile