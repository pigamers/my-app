import React from 'react';
import { AiFillCode } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { SiAdobeindesign } from 'react-icons/si';
import { FaWordpress, FaWix } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";

export default function Skills() {
  return (
    <div className="bg-two py-24 font-fonty cursor-default select-none">
      <div className="mx-auto max-w-screen-xl text-center py-16">
        <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-7xl text-four">Skills</h1>
        <p className="mb-8 text-lg font-normal text-three lg:text-xl">Welcome to the Skills Page</p>
      </div>
      <hr className='h-px w-11/12 m-auto border-0 bg-five' />
      <div className='flex flex-col py-10 mx-8 items-center text-center space-y-16'>
        <div className="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <AiFillCode className='m-auto mt-5 text-five' size={60} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mt-2 mb-5">Programming</div>
            <p className="text-lg text-two">I know C language and I am familiar with Java, Python & JavaScript. I have been learning Programming from my 1st year in my college. I am practicing DSA with C and Java.</p>
          </div>
        </div>
        <div className="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <MdDeveloperMode className='m-auto mt-5 text-two' size={60} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mt-2 mb-5">Web Development</div>
            <p className="text-lg text-two">I have been learning and practicing web development from my start of 2nd year. And currently I am learning React for front end and Node for backend. I am currently working on my full stack project made with MERN.</p>
          </div>
        </div>
        <div className="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <SiAdobeindesign className='m-auto mt-5 text-five' size={60} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mt-2 mb-5">Graphics Designing</div>
            <p className="text-lg text-two">I am the founder of PI GAMERS, I used to make videos and thumbnails which made me a Graphics Designer. I am a content developer too. And along with this I have worked on Adobe Photoshop, Filmora, Adobe Premiere Pro, Canva and Figma.</p>
          </div>
        </div>
        <div className="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <FaWordpress className='m-auto mt-5 text-two' size={60} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mt-2 mb-5">Wordpress Development</div>
            <p className="text-lg text-two">I know how to develop Wordpress websites. I have worked with Elementor Pro to design the website. I have worked on Wordpress for around 1 month.</p>
          </div>
        </div>
        <div className="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <FaWix className='m-auto mt-5 text-five' size={60} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mt-2 mb-5">Wix Development</div>
            <p className="text-lg text-two">I know how to develop Wix websites. I have worked with Wix for around 2-3 months in my past freelance work. Go to projects to see the live preview.</p>
          </div>
        </div>
        <div className="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <IoExtensionPuzzle className='m-auto mt-5 text-two' size={60} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mt-2 mb-5">Ispring Powerpoint Plugin</div>
            <p className="text-lg text-two">I have also worked with a Powerpoint Plugin Ispring. I know how to develop a particular course on Powerpoint with help of Ispring.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
