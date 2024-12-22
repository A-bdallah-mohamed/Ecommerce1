import React from 'react'
import { Link } from 'react-router-dom'
export default function Alreadyhaveanaccount() {
  return (
    <div className='Accountpage'>
    <div className='signinwindow'>
    <h1>Log in</h1>
    <input placeholder='Email'/>
    <input placeholder='Password'/>
    <button>Continue</button>
    <Link to='/Create-new-account'>
    <span>Create new account?</span>
    </Link>
    </div>
        </div>
  )
}
