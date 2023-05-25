import React, { useContext } from 'react';
import ReactApexChart from 'react-apexcharts';
import { TransactionContext } from '../../context/TransactionsContext';

const Area = () => {
  const { ethData } = useContext(TransactionContext);
  const data = [];
  for (const dictionary of ethData) {
    // Extract the desired values and store them in a separate list
    const valuesList = [dictionary.time * 1000 , dictionary.high];
  
    // Add the new list to the list of lists
    data.push(valuesList);
  }


  const series = [{
    data: data,
    name: 'ETH Price'
  }];

 

const options = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      zoom: {
        autoScaleYaxis: true
      }
    },
    annotations: {
      yaxis: [{
        y: 30,
        borderColor: '#999',
        label: {
          show: true,
          text: 'Support',
          style: {
            color: "#fff",
            background: '#00E396'
          }
        }
      }],
      xaxis: [{
        x: new Date('13 Feb 2023').getTime(),
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Start',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }]
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('09 Jan 2022').getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
  };
    return (
        <div>
            <ReactApexChart options={options} series={series} type="area"  height={"540px"}/>
        </div>
    )
};
export default Area;