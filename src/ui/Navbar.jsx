/* eslint-disable no-unused-vars */
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
const navItems = [
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
		<header className="w-full min-h-[4.25rem]  bg-white fixed top-0 left-0 right-0 max-auto ring-2 ring-white/30 shadow-lg transition-shadow duration-300 z-50 lg:min-w-[64rem] lg:flex lg:justify-between lg:items-center lg:h-[4rem]">
			{/* Container For logo & button */}
			<div className="min-h-[2.25rem] px-[2rem] py-[2rem] flex justify-between max-auto items-center">
				<Logo />

				{/* Button to open the menu for mobile */}
				<button
					className="flex w-[2rem] min-h-[2rem] lg:hidden lg:text-[1.25rem] lg:min-h-[1.75rem]"
					onClick={() => setIsOpen(true)}>
				<CiMenuBurger className="w-full min-h-full text-[2rem] transition-transform duration-300 hover:rotate-90" />
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={menuVariants}
						initial={{ opacity: 0 }}
						animate="visible"
						exit="exit"
						transition={{ duration: 0.4 }}
						className="w-[20.9375rem] min-h-screen z-50 flex flex-col gap-6 fixed right-0 top-0 sm:shadow-md bg-gradient-to-r from-purple-200 to-blue-200 h-screen lg:hidden"
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
									{navItems.map((navItem) => (
										<li
											key={navItem.id}
											className="sm:w-[18.9275rem] min-h-[1.5rem] flex justify-center"
										>
											<Link
												to={navItem.url}
												className={`flex items-center hover:bg-zinc-200 gap-2 sm:w-full min-h-full rounded-[0.5rem] ${
													navItem.id === 1 ? "bg-[#0F172A]" : ""
												} sm:px-[2rem] sm:py-[1rem]`}
											>
												<span
													className={`w-[0.9375rem] min-h-[0.989375rem] ${
														navItem.id !== 1 ? "text-[#0F172A]" : "text-white"
													}`}
												>
													{navItem.icon}
												</span>
												<p
													className={`text-[1rem] font-medium font-poppins ${
														navItem.id !== 1 ? "text-[#0F172A]" : "text-white"
													}`}
												>
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

			{/* Desktop navigation */}
			<div className="hidden lg:flex items-center justify-end w-full max-w-5xl ml-8 xl:ml-12 lg:min-h-[4rem] lg:pr-4">
				<div className=" lg:flex items-center justify-between lg:min-w-[34.869375rem]">
					{navItems.map((item) => (
						<Link
						key={item.id}
						to={item.url}
							className={`${
								item.id == 1
									? "min-w-[5.9rem] font-medium rounded-md bg-black text-white flex justify-center items-center pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem]"
									: ""
							} ${
								item.id == 2
									? "min-w-[7.310625rem] pl-[1rem] pr-[1rem] flex justify-center items-center font-medium  pt-[0.5rem] pb-[0.5rem]"
									: ""
							}     flex items-center gap-1 min-w-[5rem] min-h-[2rem] text-[0.875rem] text-[#374151] font-lato  pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] font-medium`}
						>
							<span>{item.icon}</span>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}