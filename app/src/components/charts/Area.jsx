import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Area = () => {
    const series = [{
            name: 'Balance',
            data: [31, 40, 28, 51, 42, 109, 100]
        },];
    const options = {
        chart: {
          height: 350,
          type: 'area',
          
        },
        dataLabels: {
          enabled: false,
        },
        
        
       
        
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            "2018-09-19T00:00:00.000Z", 
            "2018-09-19T01:30:00.000Z", 
            "2018-09-19T02:30:00.000Z", 
            "2018-09-19T03:30:00.000Z", 
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"],
          
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      };
    return (
        <div>
            <ReactApexChart options={options} series={series} type="area"  height={"540px"}/>
        </div>
    )
};
export default Area;