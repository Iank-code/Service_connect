import React from 'react'
import './AdminHome.css'
function Users() {
  return (
    <main>
    <div className='table-data'> 
              <div class="order">
                <div class="head">
                  <h3>Customers</h3>
                  <i class='bx bx-search' ></i>
                  <i class='bx bx-filter' ></i>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                     
                      <th>Email Address</th>
                      <th>Email Address</th>
                      <th>Cancelled Orders</th>
                      <th>Total Orders</th>

                      <th>Action</th>
                      

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        <p>Aisha Jumwa</p>
                      </td>
                     
                      <td><span class="status completed">aisha@gmai.com</span></td>
                      <td><span class="status process">1</span></td>
                      <td><span class="status cancelled">1</span></td>
                      <td>3</td>
                      <td><span class="admin-service">Details</span></td>
                      
                    </tr>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        <p>Larry Madowo</p>
                      </td>
                      
                      <td><span class="status completed">1</span></td>
                      <td><span class="status process">40</span></td>
                      <td><span class="status cancelled">15</span></td>
                      <td>56</td>
                      <td><span class="admin-service">Details</span></td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        <p>Onyancha Junior</p>
                      </td>
                     
                      <td><span class="status completed">10</span></td>
                      <td><span class="status process">23</span></td>
                      <td><span class="status cancelled">7</span></td>
                      <td>44</td>
                      <td><span class="admin-service">Details</span></td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        <p>Alex Mwakideu</p>
                      </td>
                     
                      <td><span class="status completed">50</span></td>
                      <td><span class="status process">40</span></td>
                      <td><span class="status cancelled">9</span></td>
                      <td>99</td>
                      <td><span class="admin-service">Details</span></td>
                      
                    </tr>
                
        
  
                  </tbody>
                </table>
              </div>
  </div>
  </main>
  )
}

export default Users