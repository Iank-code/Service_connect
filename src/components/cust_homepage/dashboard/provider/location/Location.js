import React from 'react'
import './Location.css'
import { useNavigate } from 'react-router-dom'
function Location() {
    const navigate = useNavigate()
  return (
    <div className='location-body'>
        <div className="location-page">
        <div className="location-container">
            <h1>Where are you located?</h1>
            <p>This will help customers find and book for your service</p>
            <input type="text" placeholder='Enter your location'/>
        </div>
        </div>
        <div className='next-back-btn'>

<button className='back' onClick={()=> navigate('/skills')}>back</button>
<button className='next' onClick={()=> navigate('/summary')}>next</button>
</div>
    </div>
  )
}

export default Location