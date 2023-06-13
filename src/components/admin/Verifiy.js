import React from 'react'

function Verifiy() {
  return (
    <main>
    <div className='table-data'> 
              <div class="order">
                <div class="head">
                  <h3>Provider Verification</h3>
                  <i class='bx bx-search' ></i>
                  <i class='bx bx-filter' ></i>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                     
                      <th>Name</th>
                      <th>Service Name</th>
                      <th>Documents</th>
                      <th>More</th>
                      <th className='admin-action-btn'><span>Approve</span> <span>Deny</span></th>
                      

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    
                      </td>
                     
                      <td><span class="st">Aish Jumwa</span></td>
                      <td><span class="st">Car wash</span></td>
                      <td><span class="status completed">Uploaded</span></td>
                    
                     
                      <td><span class="admin-service">Details</span></td>
                      <td className='admin-action-btn'>
                        <span class="admin-service-action-btn"><i class="fas fa-check" aria-hidden="true"></i></span>
                        <span class="admin-service-action-btn"><i class="fa fa-times" aria-hidden="true"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                        
                      </td>
                      
                      <td><span class="st">Larry Madowo</span></td>
                      <td><span class="st">Car wash</span></td>
                      <td><span class="status completed">Uploaded</span></td>
                  
                      <td><span class="admin-service">Details</span></td>
                      <td className='admin-action-btn'>
                      <span class="admin-service-action-btn"><i class="fas fa-check" aria-hidden="true"></i></span>
                        <span class="admin-service-action-btn"><i class="fa fa-times" aria-hidden="true"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                      
                      </td>
                      <td><span class="st">Onyancha Junior</span></td>
                      <td><span class="st">Cleaning</span></td>
                     <td><span class="status process">Uploading</span></td>
        
                     <td><span class="admin-service">Details</span></td>
                   
                     <td className='admin-action-btn'>
                     <span class="admin-service-action-btn"><i class="fas fa-check" aria-hidden="true"></i></span>
                        <span class="admin-service-action-btn"><i class="fa fa-times" aria-hidden="true"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    
                      </td>
                      <td><span class="st">Alex Mwakideu</span></td>
                      <td><span class="st">Painting</span></td>
                      <td><span class="status cancelled">id Missing</span></td>
                     
                      <td><span class="admin-service">Details</span></td>
                      <td className='admin-action-btn'>
                      <span class="admin-service-action-btn"><i class="fas fa-check" aria-hidden="true"></i></span>
                        <span class="admin-service-action-btn"><i class="fa fa-times" aria-hidden="true"></i></span>
                      </td>
                      
                      
                    </tr>
                
        
  
                  </tbody>
                </table>
              </div>
  </div>
  </main>
  )
}

export default Verifiy