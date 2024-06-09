import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  function handleClick() {
    alert("Hi, my email is mayanksharma.teghoria@gmail.com");
  }
  return (
    <footer class=" bg-one font-fonty">
      <div class="flex flex-row m-auto space-x-3 justify-center md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-center text-three">© 2023 <a href="./" class="hover:underline">Mynk™</a>. All Rights Reserved.
        </span>
        <ul class="sm:flex items-center hidden space-x-3 text-sm text-three">
          <li>
            <a href='https://github.com/pigamers'>
              <FaGithub className='mr-4 hover:text-four md:mr-6' size={30} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/mayank-kumar-sharma-636221212/'>
              <FaLinkedin className='mr-4 hover:text-four md:mr-6' size={30} />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/sharma_ji_0107/'>
              <FaInstagram className='mr-4 hover:text-four md:mr-6' size={30} />
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/@pi-gamers'>
              <FaYoutube className='mr-4 hover:text-four md:mr-6' size={30} />
            </a>
          </li>
          <li onClick={handleClick}>
            <FiMail className='mr-4 hover:text-four md:mr-6' size={30} />
          </li>
        </ul>
      </div>
      <ul class="flex place-content-center sm:hidden py-5 items-center space-x-3 text-sm text-three">
          <li>
            <a href='https://github.com/pigamers'>
              <FaGithub className='mr-4 hover:text-four md:mr-6' size={30} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/mayank-kumar-sharma-636221212/'>
              <FaLinkedin className='mr-4 hover:text-four md:mr-6' size={30} />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/sharma_ji_0107/'>
              <FaInstagram className='mr-4 hover:text-four md:mr-6' size={30} />
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/@pi-gamers'>
              <FaYoutube className='mr-4 hover:text-four md:mr-6' size={30} />
            </a>
          </li>
          <li onClick={handleClick}>
            <FiMail className='mr-4 hover:text-four md:mr-6' size={30} />
          </li>
        </ul>
    </footer>

  )
}

export default Footer