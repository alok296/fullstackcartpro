import React from 'react'
import './registration.css'

export default function Registration() {

const handlechange = (e)=>{
  


  
}




  return (
 <div className="newUser">
      
      <form className="newUserForm">
      
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="alok" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="alok@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+91.........." />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="india | Bharat" />
        </div>
        <button className="newUserButton">Create User</button>
      </form>
  </div>
  )
}
