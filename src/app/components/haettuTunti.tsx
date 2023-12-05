
import moment from 'moment';

export default function sendData({hakuData}){

    const dataKlo = hakuData.map(item=>moment(item.startDate).format('HH'));
    const dataPrice = hakuData.map(item=>item.price);
    
    
    return (<>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p className='text-sm'>syötä klo muodossa (14 tai  05 tai 00)</p>
        <h1>Klo: {dataKlo[0]}</h1>
        <p>Tänään : {dataPrice[1]} C/kwh</p>
        <p>Huomenna : {dataPrice[0]} C/kwh</p>
    </h5>
    </div>
    </>)
}
