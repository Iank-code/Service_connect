import React, { useState } from 'react'
import Chart from "react-apexcharts";
function Analytics() {
    const [barstate, setBarstate] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          
          plotOptions: {
            bar: {
              horizontal: true
            }
          },
          xaxis: {
            categories: ['Plumbing', 'Cleaning', 'Gardening', 'car wash']
          }
        },

        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50]
          },
          {
            name: "series-2",
            data: [10, 30, 66, 30]
          }
        ]
      })
  return (
    <div className="charts-container">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={barstate.options}
              series={barstate.series}
              type="bar"
              width="500"
            />
          </div>
          <div className="mixed-chart">
            <Chart
              options={barstate.options}
              series={barstate.series}
              type="line"
              width="500"
            />
          </div>
          
        </div>
      </div>
  )
}

export default Analytics