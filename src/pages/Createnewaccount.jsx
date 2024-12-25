import React from 'react'
import { Link } from 'react-router-dom'


export default function Createnewaccount() {

  return (
    <div className='Accountpage'>
<div className='signinwindow'>
<h1>Create new account</h1>
<p>Enter your email and we'll send you a login code.</p>
<input placeholder='Email'/>
<button>Continue</button>
<Link to='/Log-in'>
<span>Already have an account?</span>
</Link>
</div>
    </div>
  )
}
