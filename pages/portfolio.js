import React, { useState, useCallback, useRef } from "react";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from "simple-react-lightbox";
import HeroB from 'components/Headers/HeroB.js';


const options = {
  settings: {},
  caption: {},
  buttons: {showDownloadButton: false},
  thumbnails: {},
  progressBar:{},

}


const itemData = [
  {
    img: './img/1.jpg',
    title: '',
  },
  {
    img: './img/2.webp',
    title: '',
  },
  {
    img: './img/3.webp',
    title: '',
  },
  {
    img: './img/4.jpg',
    title: '',
  },
  {
    img: './img/5.webp',
    title: '',
  },
  {
    img: './img/6.webp',
    title: '',
  },
  {
    img: './img/7.webp',
    title: '',
  },
  {
    img: './img/8.webp',
    title: '',
  },
  {
    img: './img/9.webp',
    title: '',
  },
  {
    img: './img/10.webp',
    title: '',
  },
  {
    img: './img/11.webp',
    title: '',
  },
  {
    img: './img/12.webp',
    title: '',
  },
];


// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";



export default function Landing() {

  return (
    <>


      <Navbar transparent />
      <main>
       
       
        <HeroB />

        <section className="flex flex-wrap pt-10 pb-20 -mt-24 bg-blueGray-200">
          <div className="container px-4 pt-20 mx-auto">

          
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
              <ImageList sx={{ width: 'auto', height: 'auto', py: 5 }} cols={3} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            
          />
          
        </ImageListItem>
      ))}
    </ImageList>
              </SRLWrapper>
            
            </SimpleReactLightbox>

           
    

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
