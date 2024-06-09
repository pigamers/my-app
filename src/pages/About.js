import React from 'react'

export default function About() {
  return (
    <div className="bg-two py-24 font-fonty cursor-default select-none">
      <div className="mx-auto max-w-screen-xl text-center py-16">
        <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-7xl text-four">About Page</h1>
        <p className="mb-8 text-lg font-normal text-three lg:text-xl">Welcome to the Skills Page</p>
      </div>
      <hr className='h-px w-11/12 m-auto border-0 bg-five' />
      {/* Table of Details */}
      <div class="py-10 mx-8 overflow-x-auto">
        <table class="w-3/4 m-auto shadow-lg shadow-five text-lg text-center rtl:text-right text-three">
          <thead class="text-lg text-two uppercase bg-four">
            <tr>
              <th scope="col" class="px-6 py-3">

              </th>
              <th scope="col" class="px-6 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-three border-b border-one">
              <th scope="row" class="px-6 py-4 font-medium text-two whitespace-nowrap">
                Email
              </th>
              <td class="px-6 py-4 text-two font-semibold">
                mayanksharma.teghoria@gmail.com
              </td>
            </tr>
            <tr class="bg-three border-b border-one">
              <th scope="row" class="px-6 py-4 font-medium text-two whitespace-nowrap">
                Github
              </th>
              <td class="px-6 py-4 text-two font-semibold">
                <a href='https://github.com/pigamers'>
                  https://github.com/pigamers
                </a>
              </td>
            </tr>
            <tr class="bg-three border-b border-one">
              <th scope="row" class="px-6 py-4 font-medium text-two whitespace-nowrap">
                LinkedIn
              </th>
              <td class="px-6 py-4 text-two font-semibold">
                <a href='https://www.linkedin.com/in/mayank-kumar-sharma-636221212/'>
                  https://www.linkedin.com/in/mayank-kumar-sharma-636221212/
                </a>
              </td>
            </tr>
            <tr class="bg-three border-b border-one">
              <th scope="row" class="px-6 py-4 font-medium text-two whitespace-nowrap">
                LeetCode
              </th>
              <td class="px-6 py-4 text-two font-semibold">
                <a href='https://leetcode.com/u/Sharmaji01/'>
                  https://leetcode.com/u/Sharmaji01/
                </a>
              </td>
            </tr>
            <tr class="bg-three border-b border-one">
              <th scope="row" class="px-6 py-4 font-medium text-two whitespace-nowrap">
                Instagram
              </th>
              <td class="px-6 py-4 text-two font-semibold">
                <a href='https://leetcode.com/u/Sharmaji01/'>
                  https://www.instagram.com/sharma_ji_0107/
                </a>
              </td>
            </tr>
            <tr class="bg-three">
              <th scope="row" class="px-6 py-4 font-medium text-two whitespace-nowrap">
                Youtube
              </th>
              <td class="px-6 py-4 text-two font-semibold">
                Search PI GAMERS on Youtube.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Google Maps Api data */}
    </div>
  )
}
