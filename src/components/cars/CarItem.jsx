import React from 'react'

const CarItem = ({car}) => {
    const {id, title, brand, year, price, isPremium} = car;
  return (
    <>
        <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 border'>
        
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <div className="text-gray-700">
                <p>
                <span className="font-semibold">Brand:</span> {brand}
                </p>
                <p>
                <span className="font-semibold">Year:</span> {year}
                </p>
                <p>
                <span className="font-semibold">Price:</span> ${price.toLocaleString()}
                </p>
                <p>
                <span className="font-semibold">Premium:</span>{" "}
                {isPremium ? (
                    <span className="text-green-600 font-semibold">Yes</span>
                ) : (
                    <span className="text-red-600 font-semibold">No</span>
                )}
                </p>
            </div>
        </div>
    </>
  )
}

export default CarItem;