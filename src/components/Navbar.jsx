import React, { useState } from 'react'
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { RiMenuLine } from 'react-icons/ri';
// import { BsDisplay } from 'react-icons/bs';
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  
  const handleChange = () => {
    setMenu(!menu);
  };
  //

  return (
    <header className="bg-slate-700  z-10 text-white py-2 ">
      <nav className="container  flex justify-between items-center">
        <div className="flex items-center gap-5">
          <MdOutlineFamilyRestroom size={35} className="text-white-900" />
          <a href="/" className="font-bold text-2xl">
            HomePlunning
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-lg">
          <a
            href="/"
            className=" hover:text-primary transition duration-200 end-0"
          >
            Home
          </a>
          <a
            href="/"
            className=" hover:text-primary transition duration-200 end-0"
          >
            About
          </a>
          <a
            href="/expenslist"
            className=" hover:text-primary transition duration-200 end-0"
          >
            Expense-List
          </a>
          <a
            href="/contact"
            className=" hover:text-primary transition duration-200 end-0"
          >
            Contack
          </a>

          <a
            href="/signup"
            size={10}
            className="hidden md:flex px-4  border-2 rounded-md hover:bg-primary transition duration-200 ease-linear bg-indigo-500 shadow-lg shadow-indigo-500/50"
          >
            SignUp
          </a>
        </div>
        <div className="md:hidden  flex items-center ">
          {menu ? (
            <IoCloseSharp size={25} onClick={handleChange} />
          ) : (
            <RiMenuLine size={25} onClick={handleChange} />
          )}
        </div>
        {/* responsive section */}
        <div
          className={`${
            menu ? 'translate-x-0' : ' scale-0 duration-150 '
          } md:hidden flex flex-col absolute bg-secondary text-white right-0    top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-5 w-56 h-fit rounded-br-xl transform duration-300 rounded-md`}
        >
          <a
            href="/"
            className=" hover:text-primary transition duration-200 end-0"
          >
            Home
          </a>
          <a
            href="/"
            className=" hover:text-primary transition duration-200 end-0"
          >
            About
          </a>
          <a
            href="/a"
            className=" hover:text-primary transition duration-200 end-0"
          >
            Our Care
          </a>
          <a
            href="/"
            className=" hover:text-primary transition duration-200 end-0"
          >
            Services
          </a>

          <a
            href="/signup"
            className=" hover:text-primary transition duration-200 end-0"
          >
            SignUp
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
