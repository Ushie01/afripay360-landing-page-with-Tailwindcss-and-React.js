import React from 'react';
import { Link } from 'react-router-dom';
// import { useInView } from "react-intersection-observer";
import Carousel, { CarouselItem } from './Carousel/Carousel';
import ProductCard from "./ProductCard";
import Header from './Header';
import Card from './Card';
import logo from "./assets/afripaylogo.png";
import cash from './assets/cash-stack.svg';
import envelope from './assets/envelope.svg';
import corevalue from './assets/core-value.png';
import kingsley from './assets/kingsley.png';
import george from './assets/george.png';
import charles from './assets/charles.png';
import app from './assets/app.webp';
import play from './assets/google-play.svg';
import market1 from './assets/market1.jpeg';
import market2 from './assets/market2.jpg';
import market3 from './assets/market3.jpg';
import pos2 from './assets/pos2.png';
import pos1 from './assets/pos1.jpg';
import pos6 from './assets/pos6.jpg';
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import whatsapp from "./assets/whatsapp.svg";


const Homepage = () => {
  // const { ref: sectionRef, inView: visible } = useInView();
  // const sectionRef = useRef();
  // const [visible, setVisible] = useState();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setVisible(entry.isIntersecting);
  //   });
  //   observer.observe(sectionRef.current);
  // });


  const details = [
    {
      name: "Kingsley EKWURIBE",
      position: "Chairman",
      image: kingsley,
      description:
        "Experienced IT Professional. Certified IT EMR Trainer/Analyst (Epic ClinDoc Certified, ITIL, SCRUM MASTERS, CISM, PMP)",
    },
    {
      name: "Charles UCHELOR",
      position: "Chief Executive Officer",
      image: charles,
      description:
        "Experienced Banker, Asset Manager, Business Analyst. Business Development and Business Management.",
    },
    {
      name: "George ONASANYA",
      position: "Chief Operations Officer",
      image: george,
      description:
        "Experienced Revenue Circle Manager, Billing specialist, Government Collection and Customization",
    }
  ];

  const customersComment = [
    {
      name: "Mama Abdulla",
      comment: '"With Afripay360 running my P.O.S stand together with my shop has never been this great"',
    },
    {
      name: "Oga Mike",
      comment: '"With Afripay360, I can send payment requests to my clients to pay using their card, ACH debit or bank"'
    },
    {
      name: "Chidinma Ola",
      comment: '"Big thanks to Afripay360, now my customers are rest assure when making their payment😘😘"'
    }
  ];

  const customersCommentMobile = [
      {
        name: "Mama Abdulla",
        comment:
          '"With Afripay360 running my P.O.S stand together with my shop has never been this great"',
        image: market3
      },
      {
        name: "Oga Mike",
        comment:
          '"With Afripay360, I can send payment requests to my clients to pay using their card, ACH debit or bank"',
        image: market2
      },
      {
        name: "Chidinma Ola",
        comment:
          '"Big thanks to Afripay360, now my customers are rest assure when making their payment😘😘"',
        image: market1 
      },
  ];

  const productCad = [
    {
      name: "AFRIPAY360 ANDROID POS",
      batteryLife: "15hr",
      amount: "₦30,000.00",
      image: pos1
    },
    {
      name: "AFRIPAY360 MPOS MINI",
      batteryLife: "10hr",
      amount: "₦15,000.00",
      image: pos6
    },
    {
      name: "AFRIPAY360 PALLAREX ANDROID POS",
      batteryLife: "15hr",
      amount: "₦35,000.00",
      image: pos2
    },
  ];
  
  return (
    <div>
      <Header />
      <section className="mt-24 md:p-32" name="About">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center section h-16 shadow-md md:w-48 w-32 bg-green-400">
            <p className="md:text-3xl text-xl text-white m-auto">About</p>
          </div>
          <p className="text-3xl md:text-4xl text-black mt-14 md:mt-20">
            All-In-One platform for
          </p>
          <p className="text-3xl text-black">global growth</p>
          <div className="hidden md:block flex flex-col items-center  justify-center text-center mt-4 text-gray-700 text-md">
            <p>
              Utilities and Bill Payment solution for Agents and Sub-Agents.
              Electricity bills, Cable Tv, Airtime and data
            </p>
            <p>
              recharge made simple Transfer and receive cash in seconds, make
              donations without hassle. No down-time.
            </p>
            <p>All services done with simple clicks.</p>
          </div>
          <p className="md:hidden flex flex-col text-center mt-2 font text-gray-700 p-7 text-md">
            Utilities and Bill Payment solution for Agents and Sub-Agents.
            Electricity bills, Cable Tv, Airtime and data recharge made simple
            Transfer and receive cash in seconds, make donations without hassle.
            No down-time. All services done with simple clicks.
          </p>
          {/* <p className="text-gray-700 text-xs">pay the way they love like.</p> */}
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

        <div className="w-full mt-16 md:mt-44  mb:space-y-8 mb-8">
          <p className="flex items-center justify-center text-3xl md:p-12">
            Core Values
          </p>
          <img src={corevalue} alt={corevalue} />
        </div>
      </section>

      <section>
        <div className="md:mt-44">
          <div className="flex flex-col items-center justify-center h-auto our__product">
            <div className="flex flex-row items-center justify-center section h-12 shadow-md bg-green-400 md:w-72 w-40 mb-10">
              <p className="md:text-3xl text-xl text-white m-auto">
                Our Product
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-12 mb-24 md:space-y-0">
              {productCad.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  batteryLife={product.batteryLife}
                  amount={product.amount}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-row items-center justify-center section md:h-16 h-12 shadow-md md:w-64 mt-24 w-36 bg-green-400 m-auto mb-24">
        <p className="md:text-3xl text-xl  text-white m-auto">Comment</p>
      </div>

      <section>
        <div className="md:m-40 hidden md:block md:mt-96">
          <div
            className="relative flex flex-col-reserve md:flex-row 
          items-center md:justify-between h-72 md:h-64 bg-green-400 rounded-lg mt-40 "
          >
            <div className="md:space-y-2 md:p-16 p-2 md:w-1/2">
              <Carousel>
                {customersComment.map((comment) => (
                  <CarouselItem>
                    <div className="flex flex-col space-y-10">
                      <p className="text-md md:text-2xl font-bold text-white whitespace-normal break-word">
                        {comment.comment}
                      </p>
                      <p className="text-xl text-white"> - {comment.name}</p>
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>
            <div className="relative h-72 w-1/2 ">
              <img
                src={market1}
                alt={market1}
                className="hover:relative md:h-64 md:w-80 
                md:hover:h-80 md:hover:w-96 md:-mt-36 md:ml-44 rounded-lg 
                market1 transition duration-700 
                ease-in-out "
              />
              <img
                src={market2}
                alt={market2}
                className="hover:relative md:h-64 md:w-80 
                md:hover:h-80 md:hover:w-96 md:-mt-36 md:-ml-2 rounded-lg 
                market2 transition duration-700 
                ease-in-out "
              />
              <img
                src={market3}
                alt={market3}
                className="hover:relative md:h-64 
                md:hover:h-80 md:-mt-36 md:ml-16
                rounded-lg market3"
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col h-auto rounded-lg m-2 mt-20 md:hidden">
          <div className="relative space-y-2 p-1 -mt-30">
            <Carousel>
              {customersCommentMobile.map((comment) => (
                <CarouselItem>
                  <img
                    src={comment.image}
                    alt={comment.image}
                    className="hover:relative
                h-80 w-96 md:-mt-40 md:-ml-2 rounded-lg 
                market2 transition duration-700 
                ease-in-out "
                  />
                  <div className="absolute flex flex-col mt-16 p-1 h-10 w-full">
                    <p className="text-md font-bold text-white whitespace-normal">
                      {comment.comment}
                    </p>
                    <p className="text-xl text-white"> - {comment.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section name="Team">
        <div className="bg-gray-100 leaf mt-48 md:mt-96">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center section h-16 shadow-md md:w-64 w-40 bg-green-400">
              <p className="text-3xl text-white m-auto">Team</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-12 items-center justify-center md:p-6 pb-28">
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

      <section name="TryOut">
        <div className="mt-10 mb-5">
          <div className="flex flex-col items-center justify-center md:p-6 space-y-10">
            <div className="flex flex-row items-center justify-center section md:h-16 h-12 shadow-md md:w-64 w-32 bg-green-400 -mt-10 md:-mt-16">
              <p className="md:text-3xl text-xl text-white m-auto p-3">
                Try Out
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center md:items-start justify-center md:space-x-28">
              <div className="w-full md:w-1/2 md:mt-44">
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
                  <div className="flex flex-row space-x-3">
                    <img src={play} alt={play} className="h-8 w-8" />
                    <p className="text-2xl">Play Store</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-60" name="Contact">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b shadow-lg from-green-400 to-green-700 p-3 md:p-24">
          <div className="flex flex-row items-center justify-center section h-16 shadow-lg md:w-64 w-40 bg-green-400 -mt-10 md:-mt-16">
            <p className="md:text-3xl text-xl text-white m-auto p-1 md:p-3">
              Contact Us
            </p>
          </div>
          <div className="hidden md:block map w-full flex flex-row w-full md:m-10 h-full shadow-lg m-24">
            <div className="flex flex-col items-start justify-start contact__section space-y-8 bg-opacity-60 bg-white h-auto md:w-1/2 w-full p-3 md:p-12">
              <h2 className="text-5xl text-green-500">
                We are open for buisness
              </h2>
              <input
                type="text"
                className="w-full md:w-96 p-4 border-b-2 hover:border-opacity-0 "
                placeholder="Full name"
              />
              <input
                type="email"
                className="w-full md:w-96 p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full md:w-96 p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Subject"
              />
              <textarea
                type="message"
                className="w-full md:w-96 border-b hover:border-opacity-0 mb-3 text-lg p-4 h-36"
                placeholder="Message"
              />
              <Link
                to="/"
                className="px-8 py-4 bg-green-700 md:bg-green-400
                shadow-lg rounded-full text-white text-md text-3xl z-60
                hover:transition hover:duration-700 hover:ease-in-out hover:px-10 hover:py-6
                "
              >
                Send Message
              </Link>
            </div>
          </div>
          <div className="md:hidden map w-full flex flex-row w-full md:m-10 h-full shadow-lg m-24">
            <div className="flex flex-col items-start justify-start space-y-8 bg-opacity-60 bg-white h-auto md:w-1/2 w-full p-3 md:p-12">
              <h2 className="text-5xl text-green-500">
                We are open for buisness
              </h2>
              <input
                type="text"
                className="w-full md:w-96 p-4 border-b-2 hover:border-opacity-0 "
                placeholder="Full name"
              />
              <input
                type="email"
                className="w-full md:w-96 p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full md:w-96 p-4 border-b-2 hover:border-opacity-0 mb-3"
                placeholder="Subject"
              />
              <textarea
                type="message"
                className="w-full md:w-96 border-b hover:border-opacity-0 mb-3 text-lg p-4 h-36"
                placeholder="Message"
              />
              <Link
                to="/"
                className="px-8 py-4 bg-green-700 md:bg-green-400
                shadow-lg rounded-full text-white text-md text-3xl z-60
                hover:transition hover:duration-700 hover:ease-in-out hover:px-10 hover:py-6
                "
              >
                Send Message
              </Link>
            </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center  bg-gradient-to-b shadow-lg from-green-400 to-green-700"></div> */}
        </div>
      </section>

      <section>
        <div className="p-24 bg-gray-900 h-auto">
          <div className="flex flex-col md:flex-row items-start justify-between md:p-6 space-y-10">
            <div className="flex flex-col items-start justify-start space-y-10">
              <img src={logo} alt={logo} className="w-52 h-20" />
              <div className="space-y-7">
                <div className="flex flex-row space-x-4">
                  <img src={facebook} alt={facebook} className="w-8 h-8" />
                  <img src={twitter} alt={twitter} className="w-8 h-8" />
                  <img src={linkedin} alt={linkedin} className="w-8 h-8" />
                  <img src={whatsapp} alt={whatsapp} className="w-8 h-8" />
                </div>
                <div className="text-white text-md">
                  <p className="">Follow our social</p>
                  <p>media.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start space-y-5 text-white">
              <p className="text-2xl">Support</p>
              <p>FAQ</p>
              <p>How it works</p>
              <p>Features</p>
              <p>Contact</p>
            </div>
            <div className="flex flex-col items-start justify-start space-y-5 text-white">
              <p className="text-2xl">Links</p>
              <p>FAQ</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
            <div className="flex flex-col items-start justify-start space-y-5 text-white">
              <p className="text-2xl">Get In Touch</p>
              <div>
                <p>African Vogue Nigeria Limited 21 Fulfillment Avenue,</p>
                <p>Rumuolumeni, Port Harcourt, Rivers State.</p>
              </div>
              <div>
                <p>customercare@afripay360.com</p>
                <p>info@africanvogueng.com</p>
                <p>info@afripay360.com</p>
              </div>
              <p>+234-906-254-7088</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage
