import { useEffect, useState } from "react";

import Hamburger from "./Hamburger";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    if (window.innerWidth > 767){
      return setIsVisible(true)
    }
  }, []);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

 

  return (
    <nav
      id="navBar"
      className="mx-auto w-screen bg-slate-800 min-h-content sticky top-0 z-80"
    >
      <div className="container flex flex-row p-4 mx-auto items-center justify-between relative">
        <a href="" >
          Heritage
        </a>
        <button className='md:hidden' onClick={handleClick}>
          <Hamburger />
        </button>
        {isVisible && (
          <div
            className='absolute sm:right-0 sm:translate-y-20 bg-slate-500 transition-all rounded-sm md:translate-y-0 md:bg-transparent md:relative md:p-2 md:pr-12'>
            <ul className="py-4 px-6 text-white flex flex-col md:flex-row gap-4 md:justify-around md:gap-8 md:items-center">
              <li>Home</li>
              <li>About Us</li>
              <li>Book Us</li>
              <li>Schedule</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
