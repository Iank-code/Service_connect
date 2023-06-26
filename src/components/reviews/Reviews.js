import React from 'react'
import './Reviews.css'
import Navbar from '../Navbar'
function Reviews() {
  return (
    <>
    <Navbar />
    <div className='review-form-container'>
        <form className='review-form' action="">
        <h2>Leave a Review</h2>
    <label for="accuracy">Arrival Time:</label>
    <input type="radio" name="accuracy" value="1"/>1
    <input type="radio" name="accuracy" value="2"/>2
    <input type="radio" name="accuracy" value="3"/>3
    <input type="radio" name="accuracy" value="4"/>4
    <input type="radio" name="accuracy" value="5"/>5
    <label for="communication">Communication:</label>
    <input type="radio" name="communication" value="1"/>1
    <input type="radio" name="communication" value="2"/>2
    <input type="radio" name="communication" value="3"/>3
    <input type="radio" name="communication" value="4"/>4
    <input type="radio" name="communication" value="5"/>5
    <label for="value">Value of service:</label>
    <input type="radio" name="value" value="1"/>1
    <input type="radio" name="value" value="2"/>2
    <input type="radio" name="value" value="3"/>3
    <input type="radio" name="value" value="4"/>4
    <input type="radio" name="value" value="5"/>5
    <label for="comment">Comment:</label>
    <textarea name="comment"></textarea>
    <input type="submit" value="Submit Review"/>
        </form>
    </div>
    </>
  )
}

export default Reviews