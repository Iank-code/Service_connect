import React from 'react'

function ProviderCompleted() {
  return (
    <main>
    <div className='table-data'> 
              <div class="order">
                <div class="head">
                  <h3>Completed</h3>
                  <i class='bx bx-search' ></i>
                  <i class='bx bx-filter' ></i>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                     
                     
                      <th>Amount</th>
                      <th>Review</th>
                     
                      <th>More</th>
                      <th> Delete</th>
                      

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        <p>Aisha Jumwa</p>
                      </td>
                     
                    
                      <td><span class="">KSH 1</span></td>
                    
                      <td><span class="">1.5</span></td>
                      <td><span class="admin-service">Details</span></td>
                      <td className=''>
                        <span class="admin-service-action-btn"><i class="fa fa-trash" aria-hidden="true"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        <p>Larry Madowo</p>
                      </td>
                      
                  
                      <td><span class="">KSH 40</span></td>
                      <td><span class="">5.0</span></td>
                  
                      <td><span class="admin-service">Details</span></td>
                      <td className=''>
                        <span class="admin-service-action-btn"><i class="fa fa-trash" aria-hidden="true"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        <p>Onyancha Junior</p>
                      </td>
                     <td><span class="">KSH 23</span></td>
                     <td><span class="">4.6</span></td>
                     <td><span class="admin-service">Details</span></td>
                     <td className=''>
                        <span class="admin-service-action-btn"><i class="fa fa-trash" aria-hidden="true"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        <p>Alex Mwakideu</p>
                      </td>
                     
                      <td><span class="">KSH 40</span></td>
                      <td><span class="">4.6</span></td>
                      <td><span class="admin-service">Details</span></td>
                      <td className=''>
                        <span class="admin-service-action-btn"><i class="fa fa-trash" aria-hidden="true"></i></span>
                      </td>
                      
                      
                    </tr>
                
        
  
                  </tbody>
                </table>
              </div>
  </div>
  </main>
  )
}

export default ProviderCompleted