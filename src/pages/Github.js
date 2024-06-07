import axios from 'axios'
import React, { useState } from 'react'
import { BsFillFileCodeFill } from 'react-icons/bs'
import { TbFunction } from 'react-icons/tb'
import { VscVmActive } from 'react-icons/vsc'

export default function Github() {
  const [data,setData] = useState({});
  const githubApi = "https://api.github.com/users/pigamers"

  axios.get(githubApi)
    .then((res) => {
      setData(res.data);
    })

  return (
    <div className="bg-two pt-24 pb-10 font-fonty">
      <div className='flex flex-col items-center lg:flex-row my-10 lg:justify-around cursor-default select-none'>
        <h1 className='text-6xl md:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four pb-16'>
          Github Info
        </h1>
        <div className='flex flex-col place-items-center text-center space-y-10'>
          <div class="max-w-sm rounded p-5 bg-three lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
            <img className='' src={data.avatar_url} />
            <div class="px-6 py-4">
              <div class="font-bold text-2xl mt-2 mb-5">{data.login}</div>
              <p class="text-sm text-two">I also love to travel</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='h-px w-3/4 m-auto border-0 bg-five' />
      <div className='flex flex-col items-center py-10 space-y-20'>
        <div className="max-w-fit rounded p-5 bg-three text-center lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <VscVmActive className='m-auto mt-5' size={60} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Responsive Website</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
        </div>
        <div className="max-w-fit rounded p-5 bg-three text-center lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <TbFunction className='m-auto mt-5' size={60} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Full Functional Website</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
        </div>
        <div className="max-w-fit rounded p-5 bg-three text-center lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <BsFillFileCodeFill className='m-auto mt-5' size={60} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Atri Framework</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
