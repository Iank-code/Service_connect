import React from 'react'
import './ProviderOrders.css'
function ProviderOrders() {
  return (
    <div>
        <table className='table'>
    <thead>
      <tr>
        <th>Status</th>
        <th>Location</th>
        <th>Date</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pending</td>
        <td>Uganda</td>
        <td>12/12/2023</td>
        <td>1000KSH</td>
        <td><button>Details</button></td>
      </tr>
      <tr>
        <td>Ongoing</td>
    
      </tr>
      <tr>
        <td>Cancelled</td>
  
      </tr>
    </tbody>
  </table>
  </div>
  )
}

export default ProviderOrders