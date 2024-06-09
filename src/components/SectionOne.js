import React from 'react';
import { AiFillCode } from 'react-icons/ai';
import { MdDeveloperMode, MdSchool } from 'react-icons/md';
import { SiAdobeindesign } from 'react-icons/si';
import { FaSchool } from 'react-icons/fa';
import { BsPersonBoundingBox } from "react-icons/bs";
import { VscVmActive } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { IoConstruct } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function SectionOne() {

  return (
    <div>
      {/* About Me section of Home page */}
      <div className='bg-two font-fonty px-16 py-24'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-around cursor-default select-none'>
          <h1 className='text-6xl md:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four pb-16'>
            About Me
          </h1>
          <div className='flex flex-col place-items-center text-center space-y-10'>
            <div class="max-w-lg rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <BsPersonBoundingBox className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-2xl mt-2 mb-5">SharmaJi</div>
                <p class="text-base lg:text-lg text-two">I'm a 3rd Year student from University of Engineering & Management,Kolkata currently pursuing Bachelors of Technology in Computer Science. I am a Web Developer, practicing React and Node js. I am also interested in Problem Solving and CyberSecurity. Apart from this I also love to play almost every single mobile or computer games. I also love to travel with my family alot.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='h-px w-3/4 m-auto border-0 bg-five' />
      {/* What I know Section of Home page */}
      <div className='bg-two font-fonty px-16 py-24 select-none'>
        <div className='flex flex-col items-center '>
          <h1 className='text-6xl md:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four pb-16'>
            What I Know
          </h1>
          <div className='flex flex-col py-10 text-center space-y-20 lg:space-y-0 lg:space-x-10 lg:flex-row'>
            <div class="max-w-md rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <AiFillCode className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mt-2 mb-5">Programming</div>
                <p class="text-lg text-two">I know C language and I am familiar with Java, Python & JavaScript. I have been learning Programming from my 1st year in my college.</p>
              </div>
            </div>
            <div class="max-w-md rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <MdDeveloperMode className='m-auto mt-5 text-five' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mt-2 mb-5">Web Development</div>
                <p class="text-lg text-two">I have been learning and practicing web development from my start of 2nd year. And currently I am learning React for front end and Node for backend.</p>
              </div>
            </div>
            <div class="max-w-md rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <SiAdobeindesign className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mt-2 mb-5">Graphics Designing</div>
                <p class="text-lg text-two">As I am the founder of PI GAMERS I used to make videos and thumbnails which made me a Graphics Designer. I am a content developer too.</p>
              </div>
            </div>
          </div>
          <Link to="/skills" className="items-center justify-center mt-10 px-5 py-3 text-lg font-medium text-center text-three border border-gray-300 rounded-lg hover:bg-three hover:text-two">View More</Link>
        </div>
      </div>
      <hr className='h-px w-3/4 m-auto border-0 bg-five' />
      {/* Academics Section of Home page */}
      <div className='bg-two font-fonty px-16 py-24 select-none cursor-default'>
        <div className='flex flex-col items-center'>
          <h1 className='text-6xl md:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four pb-16'>
            Academics
          </h1>
          <div className='flex flex-col text-center py-10 space-y-20 lg:space-y-0 lg:gap-x-28 lg:space-x-10 lg:flex-row'>
            <div className="max-w-md rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <FaSchool className='m-auto mt-5' size={60} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mt-2 mb-5">School</div>
                <p className="text-two text-base">I completed my schooling from Sudhir Memorial Institute Liluah which was CBSE. In my class 10th I got 84% and in 12th I secured 71%</p>
              </div>
            </div>
            <div className="max-w-md rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <MdSchool className='m-auto mt-5' size={60} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mt-2 mb-5">College</div>
                <p className="text-two text-base">I'm a 3rd Year student from University of Engineering & Management,Kolkata currently pursuing Bachelors of Technology in Computer Science. My average CGPA is 8.4 (uptil 5th sem)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='h-px w-3/4 m-auto border-0 bg-five' />
      {/* Projects Sections of Home page */}
      <div className='bg-two font-fonty px-16 py-24 select-none cursor-default'>
        <div className='flex flex-col items-center'>
          <h1 className='text-6xl md:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four pb-16'>
            Projects
          </h1>
          <div className='flex flex-col text-center py-10 space-y-20 lg:space-y-0 lg:space-x-10 lg:flex-row'>
            <div class="max-w-md rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <VscVmActive className='m-auto mt-5 text-five' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Responsive Website</div>
                <p class="text-two text-base">I know how to make a full responsive website with a framework. I know Tailwind CSS a CSS framework and I know React also. This website is made with React and Tailwind together.</p>
              </div>
              <div className='flex flex-row justify-center items-center gap-8'>
                <a href='https://github.com/pigamers/my-app.git'>
                  <button className='border border-two py-2 px-3 rounded hover:bg-four hover:text-two duration-100'>
                    Code
                  </button>
                </a>
                <a href='/'>
                  <button className='border flex gap-2 items-center border-two py-2 px-3 rounded hover:bg-four hover:text-two duration-100'>
                    Live Preview
                    <FaEye size={25} />
                  </button>
                </a>
              </div>
            </div>
            <div class="max-w-md rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <RiLockPasswordLine className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Password Generator</div>
                <p class="text-two text-base">I have created my own Password Generator Web App in React Js with the help of youtube tutorial. Click on the code button to view the Code or Click on Live Preview to see the website live below.</p>
              </div>
              <div className='flex flex-row justify-center items-center gap-8'>
                <a href='https://github.com/pigamers/passwordGenerator.git'>
                  <button className='border border-two py-2 px-3 rounded hover:bg-four hover:text-two duration-100'>
                    Code
                  </button>
                </a>
                <a href='https://password-generator-eight-murex.vercel.app/'>
                  <button className='border flex gap-2 items-center border-two py-2 px-3 rounded hover:bg-four hover:text-two duration-100'>
                    Live Preview
                    <FaEye size={25} />
                  </button>
                </a>
              </div>
            </div>
            <div class="max-w-md rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <IoConstruct className='m-auto mt-5 text-five' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Infra Project</div>
                <p class="text-two text-base">This project was for an Infrastucture company. This is the front end client side view of the project. This website is too Responsive in almost every device.</p>
              </div>
              <div className='flex flex-row justify-center items-center gap-8'>
                <a href='https://github.com/pigamers/buildingnew.git'>
                  <button className='border border-two py-2 px-3 rounded hover:bg-four hover:text-two duration-100'>
                    Code
                  </button>
                </a>
                <a href='https://buildingnew.vercel.app/'>
                  <button className='border flex gap-2 items-center border-two py-2 px-3 rounded hover:bg-four hover:text-two duration-100'>
                    Live Preview
                    <FaEye size={25} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <Link to="/projects" class="items-center justify-center my-4 px-5 py-3 text-lg font-medium text-center text-three border border-gray-300 rounded-lg hover:bg-three hover:text-two">
            View More
          </Link>
        </div>
      </div>
    </div>
  )
}
