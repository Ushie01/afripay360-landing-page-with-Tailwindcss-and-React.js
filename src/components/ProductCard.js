import React from 'react';
import { Link } from 'react-router-dom';

const productCard = ({image, batteryLife, amount, name }) => {
  return (
    <div>
      <div className="hidden md:block flip-card">
        <div className="flip-card-inner">
          <div className="relative flip-card-front">
            <img
              src={image}
              alt={image}
              className="w-full h-96 inner__section"
            />
            <div className="absolute p-4 text-white bg-green-600 bg-opacity-40 top-64 ">
                <p className="text-3xl">{name}</p>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center text-xl text-gray-700">
                <p>{batteryLife}</p>
              <hr className="border-gray-400 w-72 " />
              <p>Fast Connection</p>
              <hr className="border-gray-400 w-72 " />
              <p>Internet access: 4G</p>
              <hr className="border-gray-400 w-72 " />
              <p>Pottable</p>
              <hr className="border-gray-400 w-72 " />
              <p>Operation: Simple</p>
            </div>
          </div>
          <div className="flip-card-back">
            <h1 className="mt-24 text-3xl">ONLY</h1>
            <p className="mt-48 text-5xl">{amount}</p>
            <div className="mt-48">
              <Link
                to="/"
                className="px-8 py-4 bg-green-700 md:bg-green-400
                shadow-lg rounded-full text-white text-md text-3xl "
              >
                Get Item
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden small__medium__card w-96 ">
        <div className="flip-card-inner">
          <div className="relative">
            <img
              src={image}
              alt={image}
              className="w-full h-96 inner__section"
            />
            <div className="absolute p-4 text-white bg-green-600 bg-opacity-40 top-64 right-5 ">
                <p className="text-xl">{name}</p>
            </div>
            <div className="flex flex-col space-y-3 items-center justify-center text-md text-black">
                <p>{batteryLife}</p>
              <hr className="border-gray-400 w-72 " />
              <p>Fast Connection</p>
              <hr className="border-gray-400 w-72 " />
              <p>Internet access: 4G</p>
              <hr className="border-gray-400 w-72 " />
              <p>Pottable</p>
              <hr className="border-gray-400 w-72 " />
              <p>Operation: Simple</p>
            </div>
          </div>
          <div className="p-5">
            <h1 className="mt-6 text-3xl">ONLY</h1>
            <p className="mt-6 text-5xl">{amount}</p>
            <div className="mt-12 mb-12">
              <Link
                to="/"
                className="px-8 py-4 bg-green-700 md:bg-green-400
                shadow-lg rounded-full text-white text-md text-3xl "
              >
                Get Item
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default productCard
