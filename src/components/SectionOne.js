import React from 'react';
import { AiFillCode } from 'react-icons/ai';
import { MdDeveloperMode, MdSchool } from 'react-icons/md';
import { SiAdobeindesign } from 'react-icons/si';
import { FaSchool } from 'react-icons/fa';
import { BsPersonBoundingBox, BsFileCodeFill } from "react-icons/bs";
import { VscVmActive } from "react-icons/vsc";
import { TbFunction } from "react-icons/tb";

function SectionOne() {
  return (
    <div>
      <div className='bg-two font-fonty px-16 py-24'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-around cursor-default select-none'>
          <h1 className='text-6xl md:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four pb-16'>
            About Me
          </h1>
          <div className='flex flex-col place-items-center text-center space-y-10'>
            <div class="max-w-md rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <BsPersonBoundingBox className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-2xl mt-2 mb-5">SharmaJi</div>
                <p class="text-sm text-two">I'm a 3rd Year student from University of Engineering & Management,Kolkata currently pursuing Bachelors of Technology in Computer Science. I am a Web Developer practicing React and Node js and I am also interested in Problem Solving and CyberSecurity. Apart from this also love to play almost every single mobile or computer games. I also love to travel with my family alot.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='h-px w-3/4 m-auto border-0 bg-five' />
      <div className='bg-two font-fonty px-16 py-24 select-none'>
        <div className='flex flex-col items-center '>
          <h1 className='text-6xl md:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four pb-16'>
            What I Know
          </h1>
          <div className='flex flex-col py-10 text-center space-y-20 lg:space-y-0 lg:space-x-10 lg:flex-row'>
            <div class="max-w-sm rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <AiFillCode className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mt-2 mb-5">Programming</div>
                <p class="text-sm text-two">I know C language and I am familiar with Java, Python & JavaScript. I have been learning Programming from my 1st year in my college.</p>
              </div>
            </div>
            <div class="max-w-sm rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <MdDeveloperMode className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mt-2 mb-5">Web Developer</div>
                <p class="text-sm text-two">I have learning and practicing web development from my start of 2nd year. And currently I am learning React for front end and Node for backend.</p>
              </div>
            </div>
            <div class="max-w-sm rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <SiAdobeindesign className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mt-2 mb-5">Graphics Designing</div>
                <p class="text-sm text-two">As I am the founder of PI GAMERS I used to make videos and thumbnails which made me a Graphics Designer. I am a content developer too.</p>
              </div>
            </div>
          </div>
          <a href="/skills" class="items-center justify-center mt-10 px-5 py-3 text-lg font-medium text-center text-three border border-gray-300 rounded-lg hover:bg-three hover:text-two">Know More</a>
        </div>
      </div>
      <hr className='h-px w-3/4 m-auto border-0 bg-five' />
      <div className='bg-two font-fonty px-16 py-24'>
        <div className='flex flex-col items-center'>
          <h1 className='text-6xl md:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four pb-16'>
            Academics
          </h1>
          <div className='flex flex-col text-center py-10 space-y-20 lg:space-y-0 lg:gap-x-28 lg:space-x-10 lg:flex-row'>
            <div class="max-w-sm rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <FaSchool className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mt-2 mb-5">School</div>
                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
            </div>
            <div class="max-w-sm rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <MdSchool className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mt-2 mb-5">College</div>
                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='h-px w-3/4 m-auto border-0 bg-five' />
      <div className='bg-two font-fonty px-16 py-24'>
        <div className='flex flex-col items-center'>
          <h1 className='text-6xl md:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four pb-16'>
            Projects
          </h1>
          <div className='flex flex-col text-center py-10 space-y-20 lg:space-y-0 lg:space-x-10 lg:flex-row'>
            <div class="max-w-sm rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <VscVmActive className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Responsive Website</div>
                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
            </div>
            <div class="max-w-sm rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <TbFunction className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Full Functional Website</div>
                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
            </div>
            <div class="max-w-sm rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
              <BsFileCodeFill className='m-auto mt-5' size={60} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Atri Framework</div>
                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
            </div>
          </div>
          <a href="/projects" class="items-center justify-center px-5 py-3 text-lg font-medium text-center text-three border border-gray-300 rounded-lg hover:bg-three hover:text-two">
            Know More
          </a>
        </div>
      </div>
    </div>
  )
}

export default SectionOne