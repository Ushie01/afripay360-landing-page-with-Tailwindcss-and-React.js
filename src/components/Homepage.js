import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Card from './Card';
import cash from './assets/cash-stack.svg';
import envelope from './assets/envelope.svg';
import corevalue from './assets/core-value.png';
import kingsley from './assets/kingsley.png';
import george from './assets/george.png';
import charles from './assets/charles.png';
import app from './assets/app.webp';
import play from './assets/google-play.svg';

const Homepage = () => {
  const details = [
    {
      name: "Kingsley EKWURIBE",
      position: "Chairman",
      image: kingsley,
      description:
        "Experienced IT Professional. Certified IT EMR Trainer/Analyst (Epic ClinDoc Certified, ITIL, SCRUM MASTERS, CISM, PMP)",
    },
    {
      name: "George ONASANYA",
      position: "Chief Operations Officer",
      image: george,
      description:
        "Experienced Revenue Circle Manager, Billing specialist, Government Collection and Customization",
    },
    {
      name: "Charles UCHELOR",
      position: "Chief Executive Officer",
      image: charles,
      description:
        "Experienced Banker, Asset Manager, Business Analyst. Business Development and Business Management.",
    },
  ];
  return (
    <div>
      <Header />
      <section className="mt-24 md:p-32">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center section h-16 shadow-md w-44 bg-green-400">
            <p className="text-4xl text-white m-auto">About</p>
          </div>
          <p className="text-3xl md:text-4xl text-black mt-5 md:mt-6">
            All-In-One platform for
          </p>
          <p className="text-3xl text-black">global growth</p>
          <p className="mt-4 font text-gray-700 text-xs">
            Make more sale by giving customers the ability to
          </p>
          <p className="text-gray-700 text-xs">pay the way they love like.</p>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center space-x-24 mt-14">
          <div className="flex flex-col items-start justify-center p-4">
            <p className="md:text-3xl text-2xl">We provide simple</p>
            <div className="flex flex-row items-center justify-start space-x-6 mt-12">
              <img src={cash} alt={cash} className="h-6 w-6" />
              <p className="text-md md:text-2xl text-gray-600">
                Withdrawal and Transfer of funds
              </p>
            </div>
            <div className="flex flex-row items-center justify-start space-x-6 mt-5">
              <img src={cash} alt={cash} className="h-6 w-6" />
              <p className="text-md md:text-2xl text-gray-600">
                Your day-to-day payment of any kind
              </p>
            </div>
            <div className="flex flex-row items-center justify-start space-x-6 mt-5">
              <img src={cash} alt={cash} className="h-6 w-6" />
              <p className="text-md md:text-2xl text-gray-600">Pay your VAT</p>
            </div>
            <div className="flex flex-row items-center justify-start space-x-6 mt-5">
              <img src={cash} alt={cash} className="h-6 w-6" />
              <p className="text-md md:text-2xl text-gray-600">
                Connect with others partners
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start rounded-lg shadow-xl p-12 space-y-5">
            <div className="flex items-center justify-center bg-green-400 h-24 w-24 rounded-full">
              <img src={envelope} alt={envelope} className="h-12 w-12" />
            </div>
            <p className="text-xl">Request A payment</p>
            <p className="text-gray-600">
              We want you to have a good <br /> experience with e-commance
              online <br /> our team is dedicated to make that <br /> happen!.
            </p>
          </div>
        </div>

        <div className="w-full mt-16 mb:space-y-8 mb-8 ">
          <p className="flex items-center justify-center text-3xl">
            Core Values
          </p>
          <img src={corevalue} alt={corevalue} />
        </div>
      </section>

      <section>
        <div className="bg-gray-100">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center section h-16 shadow-md w-44 bg-green-400">
              <p className="text-4xl text-white m-auto">Team</p>
            </div>
            <div className="flex flex-col md:flex-row space-x-12 items-center justify-center p-6 md:p-6 ">
              {details.map((person, index) => (
                <Card
                  key={index}
                  name={person.name}
                  image={person.image}
                  position={person.position}
                  description={person.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-10 mb-5">
          <div className="flex flex-col items-center justify-center md:p-6 space-y-10">
            <div className="flex flex-row items-center justify-center section h-16 shadow-md w-56 bg-green-400">
              <p className="text-4xl text-white m-auto p-3">Try Out</p>
            </div>
            <div className="flex md:flex-row flex-col items-center md:items-start justify-center md:space-x-28">
              <div className="w-full md:w-1/2 mt-7">
                <img src={app} alt={app} className="md:w-80 w-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start justify-center mt-5 md:m-auto">
                <p className="text-2xl">
                  Smartly use on your
                  <br /> mobile app
                </p>
                <p className="mt-4 font text-gray-700 text-xs font-bold">
                  Make more sale by giving customers the ability to
                </p>
                <p className="text-gray-700 text-xs font-bold">
                  pay the way they love like.
                </p>
                <Link
                  to="/sign-up"
                  className="px-8 py-2 ring-offset-2 mt-12 ring ease-in duration-300 text-black 
                font-bold hover:font-bold rounded-lg 
                shadow-md hover:text-black hover:bg-white"
                >
                  <div className='flex flex-row space-x-3'>
                    <img src={play} alt={play} className="h-8 w-8" />
                    <p className='text-2xl'>Play Store</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage
