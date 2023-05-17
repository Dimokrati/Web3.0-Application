import React from "react";
import ReactApexChart from "react-apexcharts";

const Pie = () => {
    const series = [44];
    const options = {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 400,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'top'
            }
          }
        }]
      };
    return(
        <div>
            <ReactApexChart options={options} series={series} type="donut"  height={153}/>
        </div>
    )
}

export default Pie;