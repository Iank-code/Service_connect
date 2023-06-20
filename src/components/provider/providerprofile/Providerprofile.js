import React, { useState } from 'react'
import ProviderCompleted from './ProviderCompleted';
import ProviderOngoing from './ProviderOngoing';
import ReviewsProvider from './ReviewsProvider';
import ProviderMessage from './ProviderMessage';
import ServiceDetail from '../../../pages/servicePage/ServiceDetail';
function Providerprofile() {
    const [selected, setSelected] = useState('providerhome')
    
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
      setActive(!isActive);
    };
  return (
    <div className="App">
    
    <section id="sidebar"  className={isActive ? 'hide': null} >
      <a href="#" class="brand">
        <i class='bx bxs-smile'></i>
        <span class="text">Ruto Odinga</span>
      </a>
      <ul class="side-menu top">
        <li class="active" onClick={()=>setSelected('providerhome')}>
          <a href="#">
            <i class='bx bxs-dashboard' ></i>
            <span class="text">Profile</span>
          </a>
        </li>
        <li class="activ" onClick={()=>setSelected('message')}>
          <a href="#">
            <i class='bx bxs-message-dots' ></i>
            <span class="text">Message</span>
          </a>
        </li>
        <li onClick={()=>setSelected('ongoing')}>
          <a href="#">
            <i class='bx bx-loader'></i>
            <span class="text">Ongoing</span>
          </a>
        </li>
        <li onClick={()=>setSelected('completed')}>
          <a href="#">
            <i class='bx bx-list-check'></i>
            <span class="text">Completed</span>
          </a>
          
        </li>

        <li onClick={()=>setSelected('reviews')}>
          <a href="#">
            <i class='bx bxs-star-half'></i>
            <span class="text">Reviews</span>
          </a>

        </li>
        {/* <li  onClick={()=>setSelected('users')}>
          <a href="#">
            <i class='bx bxs-group'></i>
            <span class="text">Customers</span>
          </a>
        </li> */}
      </ul>
      <ul class="side-menu">
        <li>
          <a href="#">
            <i class='bx bxs-cog' ></i>
            <span class="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" class="logout">
            <i class='bx bxs-log-out-circle' ></i>
            <span class="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
   
    <section id="content">
     
      <nav>
        <i  class='bx bx-menu'  onClick={toggleClass}  ></i>
        <a href="#" class="nav-link">Categories</a>
        <form action="#">
          <div class="form-input">
            <input type="search" placeholder="Search..." />
            <button type="button" class="search-btn"><i class='bx bx-search' ></i></button>
          </div>
        </form>
        <a href="#" class="notification">
          <i class='bx bxs-bell' ></i>
          <span class="num">8</span>
        </a>
        <a href="#" class="profile" onClick={()=>setSelected('profileview')}>
          <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
        </a>
      </nav>
      {selected === 'completed' && <ProviderCompleted /> }
      {selected === 'ongoing' &&  <ProviderOngoing /> }
      {selected === 'reviews' && <ReviewsProvider /> }
      {selected === 'message' && <ProviderMessage /> }
      {selected === 'profileview' && <ServiceDetail /> }
      {selected === 'providerhome' && 
      <>  
      <main>
        <div class="head-title">
          <div class="left">
            <h1>Fresh request</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Amount</a>
              </li>
              <li><i class='bx bx-chevron-right' ></i></li>
              <li>
                <a class="active" href="#">20,000KSH</a>
              </li>
            </ul>
          </div>
          <a href="#" class="btn-download">
            {/* <i class='bx bxs-cloud-download' ></i> */}
            <span class="text">Cleaning</span>
          </a>
        </div>
        <ul class="box-info">
          <li>
            <i class='bx bxs-time' style={{color:'#1d36f7' }} ></i>
            <span class="text">
              <h3>Time: 40 mins</h3>
            
              <button className='accept-request'>Accept</button> <button className='reject-request'>Reject</button>
            </span>
          </li>
          <li>
          <i><img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" /></i>
            <span class="text">
              <h3>StateHouse</h3>
              <p>Odinga William</p>
            </span>
          </li>
          <li>
            <i class='bx bxs-dollar-circle' ></i>
            <span class="text">
              <h3>4 Microservices</h3>
              <p>20,000KSH</p>
            </span>
          </li>
        </ul>
        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>Microservice</h3>
              <i class='bx bx-search' ></i>
              <i class='bx bx-filter' ></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                 
                  <th>Quantity</th>
                  <th>Action</th>
            
             
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>Windows</p>
                  </td>
                 
                  <td><span class=" completed">1</span></td>
              
                  <td><span class="admin-service">Details</span></td>
                  
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>Kitchen</p>
                  </td>
                  
                  <td><span class=" completed">1</span></td>
             
                  <td><span class="admin-service">Details</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>Rooms</p>
                  </td>
                 
                  <td><span class=" completed">10</span></td>
               
                  <td><span class="admin-service">Details</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>Bathrooms</p>
                  </td>
                 
                  <td><span class=" completed">5</span></td>
        
                  <td><span class="admin-service">Details</span></td>
                </tr>
            
    

              </tbody>
            </table>
          </div>
          <div class="todo">
            <div class="head">
              <h3>Future Requests</h3>
              <i class='bx bx-plus' ></i>
              <i class='bx bx-filter' ></i>
            </div>
            <ul class="todo-list">
              <li class="not-completed">
                <p>Customer name</p>
                <p>Date</p>
                <i class='bx bx-info-circle' ></i>
              </li>
              <li class="not-completed">
                <p>Customer name</p>
                <p>Date</p>
                <i class='bx bx-info-circle' ></i>
              </li>
              <li class="not-completed">
                <p>Customer name</p>
                <p>Date</p>
                <i class='bx bx-info-circle' ></i>
              </li>
              <li class="not-completed">
                <p>Customer name</p>
                <p>Date</p>
                <i class='bx bx-info-circle' ></i>
              </li>
              <li class="not-completed">
                <p>Customer name    </p>
                <p>Date</p>
                <i class='bx bx-info-circle' ></i>
              </li>
              
            </ul>
          </div>
        </div>
      </main></>
      }
    
  
     
    </section>
   
  </div>
  )
}

export default Providerprofile