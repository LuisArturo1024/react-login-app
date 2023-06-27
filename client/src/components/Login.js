import React from 'react';
import './Login.css';



export default function Login() {
  return(
    <div className='body'>
      <div className="screen-1">
        <form>
          <label className='email'>
          <input className='email' type="text" placeholder="Username" />
          </label>
          
          <label className='password'>
            <input className="password" type="password" placeholder="Password"/>
          </label>
          <div>
            <button className="login" type="login" >Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}