import React, { useState } from 'react'
import './Join.css'
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;



const Join = () => {
   
    const [name ,setname] =useState("");

    
const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}

  return (
    <div className='JoinPage'>
        <div className='JoinContainer'>
        <img  src={logo} alt="logo" />
        <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
        <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">  <button onClick={sendUser} className="joinbtn">Join Chat</button></Link>
        </div>
    </div>
  )
}

export default Join
export { user }
