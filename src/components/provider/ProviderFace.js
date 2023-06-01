import React from 'react'
import './ProviderFace.css'
import { useNavigate } from 'react-router-dom'
function ProviderFace() {
  const navigate = useNavigate()
  return (
    <div >
     
        <div className='provider-step-one-container'>

        <h2>Let's start by getting to know you.</h2>
            <div className='flex justify-around justify-center items-center h-screen provider-step-one-child-container'>
            <div className="provider-image">
          
      <div className="upload-wrapper">
        <div className="upload-box">
          <label className="custom-file-input" for="upload">
            <span>Upload photo</span>
          </label>
          <input id="upload" type="file" accept="image/png, image/jpg, image/gif, image/jpeg" />
        </div>
        
        <div className="instructions-box">
          <ul>
            <li>
              <input type="checkbox" id="size" />
              <label for="size">Photo size should be less than 2 MB</label>
            </li>
            {/* <li>
              <input type="checkbox" id="format" />
              <label for="format">Photo format should be PNG or JPG</label>
            </li> */}
            <li>
              <input type="checkbox" id="quality" />
              <label for="quality">Photo should passport image</label>
            </li>
          </ul>
        </div>
      </div>
    {/* </div> */}
            </div>
            <div>
            <h1>Your name as it appears in National ID</h1>
            <form className="flex flex-col border-2 border-black rounded-md py-10 px-14">
              <label>First Name:</label>
              <input
                className="border-2 border-black rounded pl-4"
                type="text"
             
              />

              <label>Last Name:</label>
              <input
                className="border-2 border-black rounded pl-4"
                type="text"
         
              />

            </form>
          </div>
        </div>
        <div></div>
        <div className='next-back-btn'>

<button className='back'>back</button>
<button className='next' onClick={()=> navigate('/serviceSelect')}>next</button>
</div>
        </div>
       
    </div>
  )
}

export default ProviderFace;