import React from 'react'
import './Summary.css'
import { useNavigate } from 'react-router-dom'
function Summary() {
const navigate = useNavigate()
  return (
    <div className='summary-parent-container'>
    <div className='summary-container'> 
        <div className="summary">
            <h1>Give your service a title and description</h1>
        <div className="service-title">
        <form>
		<div class="form-group">
		
			<label for="title">Title:</label><br />
			<input type='text' class="form-title" rows="1" placeholder="Type your title" id="title"/>
			
		</div>
	</form>
        </div>
        <div className="service-descrption">
        <form>
		<div class="form-group">
			<label for="description">Description:</label> <br />
			<textarea class="form-description" rows="4" placeholder="Input your description" id="description"></textarea>
		
		</div>
	</form>
        </div>
        </div>
  
    
    </div>
    <div className='next-back-btn'>

<button className='back' onClick={()=> navigate('/location')}>back</button>
<button className='next' onClick={()=> navigate('/verification')}>next</button>
</div>
    </div>
  )
}

export default Summary