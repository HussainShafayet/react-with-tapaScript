import React from 'react'

const Featured = () => {
  return (
    <div className='h-10 flex items-center'>
         <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label className="text-gray-700 font-medium">Show Premium Only</label>
        </div>
    </div>
  )
}

export default Featured;