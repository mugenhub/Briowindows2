import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>


      <Navbar transparent />
      <main>
       
       
        <div className="w-full h-screen mt-20 bg-center bg-no-repeat bg-cover" style={{
              backgroundImage:
                "url('./img/bg-hero.jpg')",
            }}>
          <div className="flex items-center justify-center w-full h-screen ">
            <div className="mx-4 text-center text-white bg-black bg-opacity-50 rounded-lg">
              <h1 className="mb-4 text-6xl font-bold">Where Luxury</h1>
              <h1 className="mb-4 text-6xl font-bold">is now Affordable</h1>
              <p className="mt-4 text-lg text-blueGray-200">
                  We are considered as One of the Best Manufacturers of Quality UPVC in the Philippines. 
                  </p>
                  <p>We are proud of our More than 15 Years of Experience in the Market.</p>
          
            </div>
           
          </div>
        </div>

        <section className="flex flex-wrap pt-10 pb-20 -mt-24 bg-blueGray-200">
          <div className="container px-4 pt-20 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                      <i className="fas fa-award"></i>
                    </div>
                    <h1 className="text-3xl font-bold">15+</h1>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 text-center md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h1 className="text-3xl font-bold">100+</h1>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Project Finished
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 pt-6 text-center md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h1 className="text-3xl font-bold">100+</h1>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <Testqwe /> */}

            {/* <Testimonial/> */}

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                  <i className="text-xl fas fa-user-friends"></i>
                </div>
                <h3 className="mb-2 text-3xl font-semibold leading-normal">
                Building more than Windows and Doors. We build "Relationships".
                </h3>
                <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-600">
                Building relationship is more than just a slogan at BRIO WINDOWS. It’s how we do business. From start to finish we take our commitment to our client seriously. By carefully listening to our clients such as ARCHITECTS, ENGINEERS INTERIOR DESIGNERS and HOME BUILDERS we get a thorough understanding of their wants, needs and expectations. That’s how we’ve built a track record of exceptional customer satisfaction over the years…QUALITY PRICE AND SERVICE (QPS).
                </p>
                
              </div>

              <div className="w-full px-4 ml-auto mr-auto md:w-6/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="./img/bg-hero2.jpg"
                    
                    className="w-1/3 align-middle rounded-t-lg "
                  />
                  <blockquote className="relative p-2 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 block w-full h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,85"
                        className="fill-current text-blueGray-700"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="mt-2 font-light text-white text-md">
                      Working with us is a pleasure.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://res.cloudinary.com/briowindows/image/upload/v1647801847/briowindows/272217052_669212947777502_7376379125253174438_n_mqnza6.jpg"
                />
              </div>
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="md:pr-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center rounded-full shadow-lg text-blueGray-500 bg-blueGray-200">
                    <i className="text-xl fas fa-rocket"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Brio Windows was founded in 2006 until the incorporation in 2019 now under the name Briocon Development Corporation on the simple value system: treating others in the same way we would want others to treat us. Truth and honesty are not just words at Brio, they are the standard we demand of everyone who makes up our team. By hiring only the qualified personnel with the strongest work experience. Brio Windows Team members are trained to operate as an extension of the owner, trusted to make decisions in the best interest of the projects.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center mb-24 align-middle">
              <div className="flex flex-wrap justify-center w-full px-4 lg:w-8/12">
                <h2 className="text-4xl font-semibold">Advantages of Briowindows UPVC</h2>
                <p className="pt-6 m-4 text-lg leading-relaxed text-center text-blueGray-500">
                Unfortunately, not all windows and doors are made the same. We use the most advanced pneumatic machines in our fabrication ─ No Screws and Sealants in all internal connections unlike majority of Upvc and Aluminum manufacturers.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              

              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                 
                  <div className="pt-6 text-center">
                    <h5 className="pb-4 text-xl font-bold">Increase Property Value</h5>
                    <h5 className="pb-4 text-xl font-bold">Impressive durability</h5>
                    <h5 className="pb-4 text-xl font-bold">Weather Resistant</h5>
                    <h5 className="text-xl font-bold">Fire Retardant</h5>
                  </div>
                </div>
              </div>
              
              
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                 
                  <div className="pt-6 text-center">
                    <h5 className="pb-4 text-xl font-bold">Aesthetically Pleasing</h5>
                    <h5 className="pb-4 text-xl font-bold">Corrosion proof</h5>
                    <h5 className="pb-4 text-xl font-bold">Safety and Security</h5>
                    <h5 className="text-xl font-bold">Low Maintenance</h5>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                 
                  <div className="pt-6 text-center">
                    <h5 className="pb-4 text-xl font-bold">Durable Mechanism</h5>
                    <h5 className="pb-4 text-xl font-bold">Eco Friendly</h5>
                    <h5 className="pb-4 text-xl font-bold">Value for Money</h5>
                    <h5 className="text-xl font-bold">Great Insulation</h5>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>

        <section className="relative block pb-20 bg-blueGray-800">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-blueGray-800"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4 mx-auto lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold text-white">
                  Contact Us
                </h2>
                {/* <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-12">
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 bg-white rounded-full shadow-lg text-blueGray-800">
                  <i className="text-xl fa fa-map-marker"></i>
                </div>
                <h6 className="mt-5 text-xl font-semibold text-white">
                Address​
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Las Piñas, Philippines
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 bg-white rounded-full shadow-lg text-blueGray-800">
                  <i className="text-xl fas fa-envelope"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                Email Us
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                briocon888@hotmail.com
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 bg-white rounded-full shadow-lg text-blueGray-800">
                  <i className="text-xl fas fa-phone"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                Call Us
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                0918-858-8888
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center -mt-48 lg:-mt-64">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="mt-1 mb-4 leading-relaxed text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mt-8 mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="w-full px-3 py-3 text-sm bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
