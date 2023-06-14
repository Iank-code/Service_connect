import React from 'react'

function ProviderOngoing() {
  return (
    <div>    <main>
    <div className='table-data'> 
              <div class="order">
                <div class="head">
                  <h3>Ongoing</h3>
                  <i class='bx bx-search' ></i>
                  <i class='bx bx-filter' ></i>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                     
                     
                      <th>Total Amount</th>

                     
                      <th>Payment</th>
                      <th> Details</th>
                      

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        <p>Aisha Jumwa</p>
                      </td>
                     
                    
                      <td><span class="">KSH 1x00</span></td>
                    
                      <td><span class="status process" style={{color:'black'}}>Pending</span></td>
                      <td><span class="admin-service">Details</span></td>

                    </tr>

        
          
                
        
  
                  </tbody>
                </table>
              </div>
  </div>
  </main></div>
  )
}

export default ProviderOngoing