import React, {useState , useEffect ,useContext} from 'react'
import ReactApexChart from 'react-apexcharts';
import Papa from 'papaparse';
import * as tf from '@tensorflow/tfjs';
import { saveAs } from 'file-saver';

const Predchart = () => {
  
    const [series, setSeries] = useState([
      {
        name: 'STOCK ABC',
        data: [],
      },
    ]);
        
    const fetchData = async () => {
      const response = await fetch('/src/assets/data/Solana-data.csv');
      const csv = await response.text();
      const results = Papa.parse(csv, { header: true });
      const rows = results.data;
      const prices = rows.map((row) => Number(row.Price));
      const dates = rows.map((row) => new Date(row.Date));
    
      const price_prediction = [];
      for (let index = 0; index < 12; index++) {
        price_prediction.push([prices[prices.length - index - 1]]);
      }
    
      const prediction = await loadModel([price_prediction]);
      const next_day = new Date(
        dates[dates.length - 1].getTime() + 24 * 60 * 60 * 1000
      ).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
      }).replace(/ /g, '-');
      

      const new_row = [next_day, prediction];
      // send data to the server
      fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(new_row),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        }
        )
        .catch((error) => {
          console.error('Error:', error);
        }
        );

    }

    
    
    useEffect(() => {
      fetchData();
    }, []);
       

    const options = {
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        xaxis: {
          type: 'datetime',
          tickAmount: 6,
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
        <>
        <div>
            <ReactApexChart options={options} series={series} type="area"  height={"810px"}/>
        </div>
        </>
    )
}

const loadModel = async (input) => {
  const model = await tf.loadLayersModel('/src/assets/tfjs_model/model.json');
  const scaled_input = tf.tensor(input).div(255.0);
  const prediction = model.predict(scaled_input);
  const realPrediction = prediction.mul(255.0);
  return Number(realPrediction.dataSync()[0]).toFixed(3);
}

export default Predchart