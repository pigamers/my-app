import React, { useState } from 'react';
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function About() {
  // My Latitude & Longitude
  const [markerLocation, setMarkerLocation] = useState({
    lat: 22.641251,
    lng: 88.431160,
  });

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div className="bg-two py-24 font-fonty cursor-default select-none">
      <div className="mx-auto max-w-screen-xl text-center py-16">
        <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-7xl text-four">About Page</h1>
        <p className="mb-8 text-lg font-normal text-three lg:text-xl">Welcome to the Skills Page</p>
      </div>
      <hr className='h-px w-11/12 m-auto border-0 bg-five' />
      {/* Table of Details */}
      <div className="py-10 mx-8 overflow-x-auto">
        <table className="w-3/4 m-auto shadow-lg shadow-four text-lg text-center rtl:text-right text-three">
          <thead className="text-lg text-two uppercase bg-five">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-three border-b border-one">
              <th scope="row" className="px-6 py-4 font-medium text-two whitespace-nowrap">Email</th>
              <td className="px-6 py-4 text-two font-semibold">mayanksharma.teghoria@gmail.com</td>
            </tr>
            <tr className="bg-three border-b border-one">
              <th scope="row" className="px-6 py-4 font-medium text-two whitespace-nowrap">Github</th>
              <td className="px-6 py-4 text-two font-semibold">
                <a href='https://github.com/pigamers'>https://github.com/pigamers</a>
              </td>
            </tr>
            <tr className="bg-three border-b border-one">
              <th scope="row" className="px-6 py-4 font-medium text-two whitespace-nowrap">LinkedIn</th>
              <td className="px-6 py-4 text-two font-semibold">
                <a href='https://www.linkedin.com/in/mayank-kumar-sharma-636221212/'>https://www.linkedin.com/in/mayank-kumar-sharma-636221212/</a>
              </td>
            </tr>
            <tr className="bg-three border-b border-one">
              <th scope="row" className="px-6 py-4 font-medium text-two whitespace-nowrap">LeetCode</th>
              <td className="px-6 py-4 text-two font-semibold">
                <a href='https://leetcode.com/u/Sharmaji01/'>https://leetcode.com/u/Sharmaji01/</a>
              </td>
            </tr>
            <tr className="bg-three border-b border-one">
              <th scope="row" className="px-6 py-4 font-medium text-two whitespace-nowrap">Instagram</th>
              <td className="px-6 py-4 text-two font-semibold">
                <a href='https://www.instagram.com/sharma_ji_0107/'>https://www.instagram.com/sharma_ji_0107/</a>
              </td>
            </tr>
            <tr className="bg-three">
              <th scope="row" className="px-6 py-4 font-medium text-two whitespace-nowrap">Youtube</th>
              <td className="px-6 py-4 text-two font-semibold">Search PI GAMERS on Youtube.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className='h-px w-11/12 m-auto border-0 bg-five' />
      {/* Contact Me form */}
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl py-12 md:py-16">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* Contact form */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-four md:text-4xl">Get in touch</p>
                <h2 className='text-xl py-4 md:text-2xl text-three'>NOTE: THIS FORM IS NOT FUNCTIONAL</h2>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full items-center gap-1.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-five bg-three text-two px-3 py-2 text-lg placeholder:text-one shadow shadow-four focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-five bg-three text-two px-3 py-2 text-lg placeholder:text-one shadow shadow-four focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-five bg-three text-two px-3 py-2 text-lg placeholder:text-one shadow shadow-four focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-five bg-three text-two px-3 py-2 text-lg placeholder:text-one shadow shadow-four focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <textarea
                      className="flex h-16 w-full rounded-md border border-five bg-three text-two px-3 py-2 text-lg placeholder:text-one shadow shadow-four focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Leave me a message"
                      cols="3"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-one px-3 py-2 text-lg font-semibold text-three hover:bg-three hover:text-two focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-one"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            {/* Google Maps Api data */}
            <APIProvider apiKey={apiKey}>
              <div className="h-96 my-5 w-4/5 shadow-four rounded-xl overflow-hidden shadow-lg">
                <Map
                  className='w-full h-full'
                  defaultZoom={15}
                  defaultCenter={markerLocation}
                  gestureHandling={"greedy"}
                  disableDefaultUI
                >
                  <Marker position={markerLocation} />
                </Map>
              </div>
              <h1>I live here..</h1>
            </APIProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
