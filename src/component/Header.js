import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"
const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
          {/* desktop */}
        <div className='flex items-center'>
              <Link to={""}>
              <div className='h-12'>
                <img src={logo}  className="h-full"/>
              </div>
              </Link>
        </div>
          {/* mobile */}
          
    </header>
  )
}

export default Header