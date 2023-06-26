import React from "react";
import "./AdminHome.css";
function Users() {
  return (
    <main>
      <div className="table-data">
        <div class="order">
          <div class="head">
            <h3>Customers</h3>
            <i class="bx bx-search"></i>
            <i class="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>

                <th>Ongoing Orders</th>

                <th>More</th>
                <th className="admin-action-btn">
                  <span>Edit</span> <span>Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                  <p>Aisha Jumwa</p>
                </td>

                <td>
                  <span class="status process">1</span>
                </td>

                <td>
                  <span class="admin-service">Details</span>
                </td>
                <td className="admin-action-btn">
                  <span class="admin-service-action-btn">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                  <span class="admin-service-action-btn">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                  <p>Larry Madowo</p>
                </td>

                <td>
                  <span class="status process">40</span>
                </td>

                <td>
                  <span class="admin-service">Details</span>
                </td>
                <td className="admin-action-btn">
                  <span class="admin-service-action-btn">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                  <span class="admin-service-action-btn">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                  <p>Onyancha Junior</p>
                </td>
                <td>
                  <span class="status process">23</span>
                </td>
                <td>
                  <span class="admin-service">Details</span>
                </td>
                <td className="admin-action-btn">
                  <span class="admin-service-action-btn">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                  <span class="admin-service-action-btn">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                  <p>Alex Mwakideu</p>
                </td>

                <td>
                  <span class="status process">40</span>
                </td>
                <td>
                  <span class="admin-service">Details</span>
                </td>
                <td className="admin-action-btn">
                  <span class="admin-service-action-btn">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                  </span>
                  <span class="admin-service-action-btn">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Users;
