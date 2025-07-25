/* eslint-disable no-unused-vars */
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GoBook } from "react-icons/go";
import { PiNoteThin } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";



const menuVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1], }
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1], }
  }
};

/* Nav Links */
const mobileNavItems = [
  { id: 1, title: "Home", url: "/", icon: <AiOutlineHome /> },
  { id: 2, title: "Programs", url: "/programs", icon: <GoBook /> },
  { id: 3, title: "About", url: "/about", icon: <FcAbout /> },
  { id: 4, title: "Apply", url: "/apply", icon: <PiNoteThin /> },
  { id: 5, title: "Login", url: "/login", icon: <CiLogin /> },
  { id: 6, title: "Sign Up", url: "/signup", icon: <FiUserPlus /> },
];

export default function Navbar() {
  //useState for the opening & closing of the mobile menu 
  const [isOpen, setIsOpen] = useState(false);
  
  
  return (
    <header className="w-full min-h-[4.25rem] bg-white fixed top-0 left-0 right-0 max-auto ring-2 ring-white/30 shadow-2xl transition-shadow duration-300 z-50">
      {/* Container For logo & button */}
      <div className="min-h-[2.25rem] px-[2rem] py-[2rem] flex justify-between max-auto items-center">
        <Logo />
        <button
          className="flex w-[2rem] min-h-[2rem]"
          onClick={() => setIsOpen(true)}
        >
          {isOpen ? (
            <MdClose className="w-full min-h-full text-[2rem] transition-transform duration-300 hover:rotate-80" />
          ) : (
            <CiMenuBurger className="w-full min-h-full text-[2rem] transition-transform duration-300 hover:rotate-90" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial={{opacity: 0}}
            animate="visible"
            exit="exit"
            transition={{duration: 0.4}}
            className="w-[20.9375rem] min-h-screen z-50 flex flex-col gap-6 fixed right-0 top-0 sm:shadow-md bg-gradient-to-r from-purple-200 to-blue-200 h-screen"
          >
            <>
              <div className="flex justify-between items-center px-4">
                <Logo mobileNavLogoStyle="w-[9.5rem] min-h-[1.75rem] text-[1rem]" />
                <button 
                  onClick={() => setIsOpen(false)} 
                  className=" w-[2rem] min-h-[2rem] flex justify-center items-center hover:border hover:rounded-md hover:bg-gray-300 mt-3"
                >
                  <MdClose />
                </button>
              </div>

              <nav className="w-full min-h-full">
                <ul className="flex flex-col gap-2 items-center">
                  {mobileNavItems.map((navItem) => (
                    <li key={navItem.id} className="sm:w-[18.9275rem] min-h-[1.5rem] flex justify-center">
                      <Link 
                        to={navItem.url} 
                        className={`flex items-center hover:bg-zinc-200 gap-2 sm:w-full min-h-full rounded-[0.5rem] ${navItem.id === 1 ? "bg-[#0F172A]" : ""} sm:px-[2rem] sm:py-[1rem]`}
                      >
                        <span className={`w-[0.9375rem] min-h-[0.989375rem] ${navItem.id !== 1 ? "text-[#0F172A]" : "text-white"}`}>
                          {navItem.icon}
                        </span>
                        <p className={`text-[1rem] font-medium font-poppins ${navItem.id !== 1 ? "text-[#0F172A]" : "text-white"}`}>
                          {navItem.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}