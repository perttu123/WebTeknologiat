
import React from 'react';
import moment from 'moment';

const YourTableComponent = ({ importData }) => {  

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {importData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{moment(item.startDate).format('HH:mm')}</td>
              <td className="px-6 py-4 whitespace-nowrap">{moment(item.endDate).format('HH:mm')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourTableComponent;
