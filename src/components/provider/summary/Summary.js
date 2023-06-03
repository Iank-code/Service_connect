import React from 'react'

function Summary() {
  return (
    <div > 
        <div className="summary-container">
        <div className="service-title">
        <form>
		<div class="form-group">
		
			<label for="title">Title:</label>
			<textarea class="form-title" rows="1" placeholder="Type your title" id="title"></textarea>
			<span id="titleChar">0</span> characters
		</div>
	</form>
        </div>
        <div className="service-descrption">
        <form>
		<div class="form-group">
			<label for="description">Description:</label>
			<textarea class="form-description" rows="4" placeholder="Input your description" id="description"></textarea>
			<span id="descChar">0</span> characters
		</div>
	</form>
        </div>
        </div>
    </div>
  )
}

export default Summary