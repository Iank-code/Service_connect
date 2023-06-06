import React from 'react'
import './ServiceSelect.css'
import plumbing from '../../../assets/plumbing.png'
import painting from '../../../assets/paint-roller.png'
import catering from '../../../assets/catering.png'
import errand from '../../../assets/bag.png'
import gardening from '../../../assets/gardening.png'
import cleaning from '../../../assets/basket.png'
import { useNavigate } from 'react-router-dom'
function ServiceSelect() {
    const navigate = useNavigate()
  return (
    <div className='service-select-body'>
        <div className="service-select-container">
            <h1>Choose a category that best represents your offered services</h1>
            <div className='service-choice'>
                <div> 
                    <img src={cleaning} alt="" srcset="" />
                    <p>cleaning</p>
                </div>
                <div> 
                    <img src={plumbing} alt="" srcset="" />
                    <p>Plumbing</p>
                </div>                <div> 
                    <img src={gardening} alt="" srcset="" />
                    <p>Gardening</p>
                </div>            </div>
            <div className='service-choice'>
               <div> 
                    <img src={catering} alt="" srcset="" />
                    <p>Catering</p>
                </div> 
                <div> 
                    <img src={errand} alt="" srcset="" />
                    <p>Errand Running</p>
                </div>                <div> 
                    <img src={painting} alt="" srcset="" />
                    <p>Painting</p>
                </div>            </div>
        </div>
        <div className='next-back-btn'>

<button className='back' onClick={()=> navigate('/provider')}>back</button>
<button className='next' onClick={()=> navigate('/skills')}>next</button>
</div>
    </div>
  )
}

export default ServiceSelect