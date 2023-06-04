import React from 'react'
import './Verification.css'
import { useNavigate } from 'react-router-dom'
function Verification() {
  const navigate =   useNavigate()
  return (
    <div className='verification-container'>
        <div className="verification-child-container">
            <div>
        <h1>Offering services will not be permitted  until your documents have been received and Verified </h1>

        <div class="input-container">
  <input type="text" id="file-name" placeholder="No file selected" readonly />
  <label for="file-input" class="upload-button">Browse</label>
  <input type="file" id="file-input" />
  <ul>
    <li>A color copy of National ID or other official ID (e.g. passport, driver's license, identity card, etc). <br></br>The ID must be valid and contain full name, an issue or expiry date, the client's place and <br></br>date of birth </li>
  </ul>
  <input type="text" id="file-name" placeholder="No file selected" readonly />
  <label for="file-input" class="upload-button">Browse</label>
  <input type="file" id="file-input" />
  <ul>
    <li>A recent utility bill (e.g. water, Internet, rent and/or TV connections)</li>
<li>Bank statement dated within the last 6 months confirming your registered address </li>
 <li>Police report</li>
  </ul>
  <button id='upload-docs-btn'> <i class="fa fa-upload" aria-hidden="true"></i> upload Documents </button>
</div>
    
</div>
        </div>
        <div className='next-back-btn'>

<button className='back' onClick={()=> navigate('/summary')}>back</button>
<button className='next' onClick={()=> navigate('/profile')}>finish</button>
</div>
    </div>
  )
}

export default Verification