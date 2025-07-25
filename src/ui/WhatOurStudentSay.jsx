import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const slides = [
	{
		id: 1,
		image: "/images/testimonial1.webp",
		name: "Sarah Johnson",
		course: "Computer Science Graduate",
		quote:
			"The program exceeded my expectations. The faculty support and research opportunities were incredible.",
	},
	{
		id: 2,
		image: "/images/testimonial2.webp",
		name: "Michael Chen",
		course: "Business Administration Student",
		quote:
			"Campus Pathways provided me with the skills and network I needed for my career.",
	},
	{
		id: 3,
		image: "/images/testimonial3.webp",
		name: "Peter Craig",
		course: "Banking Finance Student",
		quote:
			"Campus Pathways provided me with the skills and network I needed for my career.",
	},
	{
		id: 4,
		image: "/images/testimonial4.webp",
		name: "Abbas Olabode",
		course: "Software Engineering student",
		quote:
			"Campus Pathways provided me with the skills and network I needed for my career.",
	},
];

export default function WhatOurStudentSay() {
	//The state storing the index of the current element.. The state has 0 by default
	const [currentIndex, setCurrentIndex] = useState(0);

	//The function responsible for previous sliding
	const goToPrevious = () => {
		//Checking if the value of the currentIndex is === 0
		const isFirstSlide = currentIndex === 0;
		//If the value of the currentIndex is TRUE i.e first slide (which is 0), then move to the last slide otherwise go to previous slide
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		//update the state with the new value
		setCurrentIndex(newIndex);
	};

	//The function responsible for moving to the next slide
	const goToNext = () => {
		//If the value of the currentSlide is === to the last slide move to the first slide
		const isLastSlide = currentIndex === slides.length - 1;
		//Checking if isLastSlide is TRUE(if the )
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		//update the state with the new value
		setCurrentIndex(newIndex);
	};

	return (
		<div className="max-w-[40rem] sm:h-[30rem] max-auto md:max-w-full md:min-h-[24.5rem] items-center flex flex-col gap-14 bd-gradient-to-r from-cyan-200 to-blue-100">
			<div className="max-w-[37.4rem] sm:min-h-[7rem]  md:max-w-full flex flex-col justify-center items-center gap-4 ">
				<h2 className="sm:w-full text-[2.25rem] font-semibold sm:pt-[2rem] font-lato text-[#111827] min-h-[2.5rem] text-center">
					What Our Students Say
				</h2>
				<p className="text-[#4B5563] max-w-[37.4rem] md:max-w-[45rem]  text-[1.25rem] text-center">
					Hear from our community of successful graduates and current students
				</p>
			</div>

			{/* Slider */}
			<div className="relative sm:w-[33.4rem] sm:min-h-[13.25rem] md:max-w-[40rem] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-xl p-6 shadow-lg">
				{/* Left Arrow Button */}
				<button
					onClick={goToPrevious}
					className="absolute left-4 sm:left-[-1rem]  z-50 md:left-1 lg:left-12 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/40 dark:hover:bg-white/40 text-white dark:text-zinc-200 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-300"
					aria-label="Previous slide"
				>
					<MdOutlineKeyboardArrowLeft size={24} />
				</button>

				{/* Slide Content */}
				<div className="sm:w-full p-4">
					<div className="flex justify-center items-center min-h-[5rem] sm:w-full">
						<img
							src={slides[currentIndex].image}
							alt={slides[currentIndex].name}
							className="w-[4rem] h-[4rem] rounded-full object-cover"
						/>
					</div>
					<div className="text-[0.875rem] flex flex-col gap-3 sm:w-full min-h-[6rem]">
						<p className="font-medium text-center sm:pt-3 text-white font-poppins">
							"{slides[currentIndex].quote}"
						</p>
						<div className="text-center">
							<p className="font-medium text-black">
								{slides[currentIndex].name}
							</p>
							<p className="font-medium text-[#4B5563]">
								{slides[currentIndex].course}
							</p>
						</div>
					</div>
				</div>

				{/* Right Arrow Button */}
				<button
					onClick={goToNext}
					className="absolute right-4 bg-black/30 sm:right-[-1rem] z-50 md:right-1 lg:right-12 top-1/2 transform -translate-y-1/2 hover:bg-black/40 dark:hover:bg-white/40 text-white dark:text-zinc-200 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-300"
					aria-label="Next slide"
				>
					<MdOutlineKeyboardArrowRight size={24} />
				</button>
			</div>
		</div>
	);
}
