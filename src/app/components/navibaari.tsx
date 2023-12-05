

import React from 'react';

function Navbar() {


  return (<>
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-xl font-semibold">Pörssisähkö</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
          <a href="today" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Tämän päivän hinnat</a>
          <a href="tomorrow" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Huomisen hinnat</a>
        </div>
      </div>   
    </nav>

    </>
  );
}

export default Navbar;