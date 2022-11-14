import React from 'react';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';

const Card = ({name, position, description, image}) => {
    return (
      <div className="relative mt-14 md:p-12 hover:-translate-y-2 transition duration-700 ease-in-out">
        <div className="w-full mt-5 md:w-80 m-auto">
          <div
            className="absolute write-up flex flex-col bg-black duration-500
           bg-opacity-30  hover:-translate-y-2 hover:bg-opacity-7 w-76 md:w-80 space-y-2 p-2 mt-64 md:mt-52"
          >
            <p className="text-sm md:text-md hover:text-white z-10 p-1 text-white">
              {description}
            </p>
          </div>
          <img src={image} alt={image} className="shadow-xl rounded-t-lg" />
          <div className="p-4 space-y-6 rounded shadow-xl rounded-b-lg">
            <div>
              <p className="text-3xl">{name}</p>
              <p className="text-md">{position}</p>
            </div>
            {/* <p className="text-gray-500">{description}</p> */}
            <div className="flex flex-row space-x-3">
              <img src={facebook} alt={facebook} className="w-6 h-6" />
              <img src={twitter} alt={twitter} className="w-6 h-6" />
              <img src={linkedin} alt={linkedin} className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card
