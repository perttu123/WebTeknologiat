
import React from 'react';
import moment from 'moment';

function Kortti({importData}) {

  //lasketaan importdatasta ensin eri tuntien hinnat. 
  const currentHour = moment().format('YYYY-MM-DD, HH')
  const currentItem = importData.find(item=>{
    const now = moment(item.startDate).format('YYYY-MM-DD, HH');
    return now === currentHour;
  })
  let currentHourPrice = null;
  if (currentItem) {
    currentHourPrice = currentItem.price;
  }

  const nextHour = moment().add(1,'hour').format('YYYY-MM-DD, HH');
  const nextHourItem = importData.find(item=>{
    const next = moment(item.startDate).format('YYYY-MM-DD, HH');
    return next === nextHour;
  })
 let nextHourPrice = null;
 if(nextHourItem){
  nextHourPrice = nextHourItem.price;
 }

 const tomorrow = moment().add(1,'day').format('YYYY-MM-DD');
 const tommorowData = importData.filter(item => {
   const StartDate = moment(item.startDate).format('YYYY-MM-DD'); // Get date from the item
   return StartDate === tomorrow;
 });
 const tomorrowPrices = tommorowData.map(item => item.price);
 const tomorrowAverage = tomorrowPrices.reduce((a,b)=>a+b,0) / tomorrowPrices.length;
 
 const today = moment().format('YYYY-MM-DD');
 const todaysData = importData.filter(item=>{
  const StartDate = moment(item.startDate).format('YYYY-MM-DD'); // Get date from the item
   return StartDate === today;
 })
 const todaysPrices = todaysData.map(item=>item.price);
 const todaysAverage = todaysPrices.reduce((a,b)=>a+b,0) / todaysPrices.length;



  return (<>
  <div className='flex'>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tämän päivän keskiarvo: {todaysAverage.toLocaleString()} C/kwh 
        </h5> 
    </div>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Huomisen keskiarvo: {tomorrowAverage.toLocaleString()} C/kwh 
        </h5>
    </div>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Tämän hetken tuntihinta: {currentHourPrice} C/kwh 
      </h5>
  </div>
  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">    
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Seuraavan tunnin hinta: {nextHourPrice} C/kwh 
      </h5>
  </div>
  </div>
    </>
  );
};

export default Kortti;

