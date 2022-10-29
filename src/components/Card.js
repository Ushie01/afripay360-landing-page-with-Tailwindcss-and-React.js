import React from 'react';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg'

const Card = ({name, position, description, image}) => {
    return (
      <div className='flex items-center justify-center'>
        <div className="w-full mt-5 md:w-80 m-auto">
          <img src={image} alt={image} />
          <div className="p-4 space-y-3 rounded shadow-xl">
            <p className="text-3xl">{name}</p>
            <p className="text-xl">{position}</p>
            <p className="text-gray-500">{description}</p>
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
