import React, {useState , useEffect ,useContext} from 'react'
import ReactApexChart from 'react-apexcharts';

const Predchart = () => {
  
    const [series, setSeries] = useState([
      {
        name: 'STOCK ABC',
        data: [],
      },
    ]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();

          const formattedData = data.map((item) => [
            new Date(item.Date).getTime(),
            Number(item.Price),
          ]);
          setSeries([
            {
              name: 'STOCK ABC',
              data: formattedData,
            },
          ]);

        } catch (error) {
          console.log('Error:', error.message);
        }
      };
      fetchData();

      // Fetch data every 3 seconds
      const interval = setInterval(fetchData, 6000);
      return () => clearInterval(interval);
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
export default Predchart