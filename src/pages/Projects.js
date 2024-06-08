import React from 'react';
import { VscVmActive } from 'react-icons/vsc';
import { RiLockPasswordLine } from "react-icons/ri";
import { IoConstruct } from "react-icons/io5";
import { FaEye, FaWix } from "react-icons/fa";
import { TbAppWindow } from "react-icons/tb";
import { BsApp } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="bg-two font-fonty cursor-default select-none py-24">
      <div className=" mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-semibold text-four md:text-5xl lg:text-6xl">Projects</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Welcome to the Projects Page</p>
      </div>
      <hr className='h-px w-3/4 m-auto border-0 bg-five' />
      <div className='flex flex-col py-10 mx-8 items-center text-center space-y-16'>
        <div class="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <VscVmActive className='m-auto mt-5 text-two' size={60} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Responsive Website</div>
            <p class="text-two text-base">I know how to make a full responsive website with a framework. I know Tailwind CSS a CSS framework and I know React also. This website is made with React and Tailwind together.</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-8'>
            <a href='https://github.com/pigamers/my-app.git'>
              <button className='border border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Code
              </button>
            </a>
            <a href='/'>
              <button className='border flex gap-2 items-center border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Live Preview
                <FaEye size={25} />
              </button>
            </a>
          </div>
        </div>
        <div class="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <RiLockPasswordLine className='m-auto mt-5 text-five' size={60} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Password Generator</div>
            <p class="text-two text-base">I have created my own Password Generator Web App in React Js with the help of youtube tutorial. Click on the code button to view the Code or Click on Live Preview to see the website live below.</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-8'>
            <a href='https://github.com/pigamers/passwordGenerator.git'>
              <button className='border border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Code
              </button>
            </a>
            <a href='https://password-generator-eight-murex.vercel.app/'>
              <button className='border flex gap-2 items-center border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Live Preview
                <FaEye size={25} />
              </button>
            </a>
          </div>
        </div>
        <div class="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <IoConstruct className='m-auto mt-5 text-two' size={60} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Infra Project</div>
            <p class="text-two text-base">This project was for an Infrastucture company. This is the front end client side view of the project. This website is too Responsive in almost every device.</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-8'>
            <a href='https://github.com/pigamers/buildingnew.git'>
              <button className='border border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Code
              </button>
            </a>
            <a href='https://buildingnew.vercel.app/'>
              <button className='border flex gap-2 items-center border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Live Preview
                <FaEye size={25} />
              </button>
            </a>
          </div>
        </div>
        <div class="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <FaWix className='m-auto mt-5 text-five' size={60} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Wix Website</div>
            <p class="text-two text-base">This project was for an Infrastucture company. This is the front end client side view of the project. This website is too Responsive in almost every device.</p>
          </div>
          <div className='flex place-content-center'>
            <a href='https://www.practionpr.in/'>
              <button className='border flex gap-2 items-center border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Live Preview
                <FaEye size={25} />
              </button>
            </a>
          </div>
        </div>
        <div class="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <TbAppWindow className='m-auto mt-5 text-two' size={60} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Two Screen App</div>
            <p class="text-two text-base">This project was an assignment given by company on Internshala. This website is not Responsive but I have handled an api here in this project. And for handling API I have used axios as a dependency.</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-8'>
            <a href='https://github.com/pigamers/two-screen.git'>
              <button className='border border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Code
              </button>
            </a>
            <a href='https://two-screen.vercel.app/'>
              <button className='border flex gap-2 items-center border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Live Preview
                <FaEye size={25} />
              </button>
            </a>
          </div>
        </div>
        <div class="max-w-4xl rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <BsApp className='m-auto mt-5 text-five' size={60} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Leaderboard Page</div>
            <p class="text-two text-base">This project was also an Internship assignment. This is also a front end project. This website is not Responsive it would be best viewed at bigger screens.</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-8'>
            <a href='https://github.com/pigamers/unfluke-page.git'>
              <button className='border border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Code
              </button>
            </a>
            <a href='https://unfluke-page-leaderboard.vercel.app/'>
              <button className='border flex gap-2 items-center border-two py-2 px-5 rounded hover:bg-four hover:text-two duration-100'>
                Live Preview
                <FaEye size={25} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}