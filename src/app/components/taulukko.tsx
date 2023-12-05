'use client'
import {  Chart as ChartJS,  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip,  Legend );
import moment from 'moment';

function Taulukko({importData}){

   const prices = importData.map(item => item.price).toReversed();
   const dates = importData.map(item => new Date(item.startDate)).toReversed();
   const hours = dates.map(item => moment(item).format('dddd HH'));
   
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        
      }, 
    },
    scales: {
      y:{
        max: 100
      }
    }
  };
  
 //Tässä voidaan antaa värit taulukon arvoille.
  const colors = prices.map(item => {
    let color = "green";
    if(item > 20 && item <40){
      color = "yellow";
    }
    else if(item > 40){
      color = "red";
    }
    return color;
  })

 
  const labels = hours;
  const data = {
    labels,
    datasets: [
      {
        label: "price",
        data: prices,
        backgroundColor: colors,   
      },
    ],
  };
  
  return (<>
    <div className="container mx-auto px-4">
    <div className="w-3/4 mx-auto">
      <Bar options={options} data={data}/>
    </div>
  </div>
  </>
  );
};

export default Taulukko;