import { FaUserFriends } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaBookOpen } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa6";
import { MdOutlineWifiTethering } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { GrTrophy } from "react-icons/gr";

const cards = [
	{
		id: 1,
		icon: <FaUserFriends />,
		number: 25000,
		title: "Students Enrolled",
	},
	{
		id: 2,
		icon: <FaBookOpen />,
		number: 150,
		title: "Programs Offered",
	},
	{
		id: 3,
		icon: <GiAchievement />,
		number: 75,
		title: "Years of Excellence",
	},
	{
		id: 4,
		icon: <FaGlobe />,
		number: 80,
		title: "Countries Represented",
	},
];

const schoolAim = [
	{
		id: 1,
		url: "/images/graduate2.jpg",
		header: "Our Mission",
		purpose:
			"To provide transformative educational experiences that empower students to become innovative leaders, critical thinkers, and global citizens who make meaningful contributions to society. We are dedicated to fostering an inclusive learning environment that celebrates diversity and promotes academic excellence.",
	},
	{
		id: 2,
		url: "/images/graduate1.jpg",
		header: "Our Vision",
		purpose:
			"To be recognized as a world-class institution that sets the standard for educational innovation, research excellence, and student success. We envision a future where our graduates lead positive change in their communities and industries around the globe.",
	},
];

const coreValueCards = [
	{
		id: 1,
		icon: <MdOutlineWifiTethering />,
		header: "Excellence",
		text: "We strive for academic excellence and innovation in everything we do.",
	},
	{
		id: 2,
		icon: <CiHeart />,
		header: "Integrity",
		text: "We uphold the highest standards of honesty and ethical behavior.",
	},
	{
		id: 3,
		icon: <CiStar />,
		header: "Innovation",
		text: "We embrace new ideas and technologies to enhance learning.",
	},
	{
		id: 4,
		icon: <GrTrophy />,
		header: "Achievement",
		text: "We celebrate success and support every student's journey to greatness.",
	},
];

const whyChoosePathways = [
	{
		id: 1,
		url: "/images/gym.jpg",
		header: "World-Class Faculty",
		purpose:
			"Learn from distinguished professors and industry experts who are passionate about teaching and committed to your success.",
	},
	{
		id: 2,
		url: "/images/building.jpg",
		header: "Cutting-Edge Facilities",
		purpose:
			"Access state-of-the-art laboratories, libraries, and technology that enhance your learning experience and prepare you for the future.",
	},
	{
		id: 3,
		url: "/images/graduate1.jpg",
		header: "Vibrant Campus Life",
		purpose:
			"Join a diverse community with over 200 student organizations, sports teams, and cultural activities that enrich your college experience.",
	},
];

export default function AboutCampusPathways() {
	return (
		<div className="w-full min-h-screen flex flex-col relative z-0 overflow-hidden">
			{/* Navbar - fixed with high z-index */}
			<header className="fixed w-full z-50">
				<Navbar />
			</header>

			{/* Hero Section - added margin-top to account for fixed navbar */}
			<div className="flex flex-col items-center w-full min-h-[30rem] opacity-80 bg-gradient-to-r from-blue-600 to-purple-700 mt-16 overflow-hidden">
				<div className="w-full min-w-[48rem] ">
					<div className="w-full mt-[6rem] flex flex-col items-center min-h-[12.625rem] px-4">
						{" "}
						{/* Added px-4 for mobile padding */}
						<div className="w-full flex flex-col gap-5 items-center">
							<h1 className="text-center w-full text-[3rem] min-h-[3rem] font-lato font-bold text-white">
								About Campus Pathways
							</h1>
							<p className="w-full text-center text-[1.25rem] text-white font-lato">
								For over 75 years, Campus Pathways University has been a beacon
								of academic excellence, innovation, and student success. We're
								committed to providing world-class education that prepares
								students for the challenges and opportunities of tomorrow.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Stats Cards */}
			<div className="max-w-full sm:w-[40rem] min-h-[63rem] max-auto container mx-auto z-0 md:w-[46rem] md:min-h-[26.5rem] ">
				<div className="max-w-full min-h-[55rem] z-0 sm:w-[38rem] mx-auto flex flex-col mt-6 gap-4 md:w-full md:grid md:grid-cols-2 md:gap-2 md:items-center md:container md:min-h-[26.5rem] md:mx-auto">
					{cards.map((card) => (
						<div
							key={card.id}
							className="max-w-full sm:w-[38rem] sm:min-h-[12.25rem] sm:pl-8 sm:pr-8 sm:pt-8 sm:pb-8 min-h-[8.25rem] rounded-md duration-300 transition-all translate-y-2 flex flex-col items-center md:w-[22rem] md:pt-[2rem] md:pl-[2rem] md:pr-[2rem] md:pb-[2rem] shadow-lg hover:shadow-xl md:min-h-[8.25rem]"
						>
							<small className="max-w-full w-[3rem] min-h-[3rem] text-[3rem] text-blue-500">
								{card.icon}
							</small>
							<p className="max-w-full text-[1.875rem] min-h-[2.25rem] text-[#111827] font-semibold">
								{card.number}+
							</p>
							<p className="text-[#4B5563] font-medium max-w-full">
								{card.title}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Mission & Vision */}
			<div className="w-full max-w-[48rem] min-h-[66.9rem] mx-auto px-4 sm:px-0 py-16 sm:pt-[4rem] sm:pb-[4rem] z-0">
				<section className="w-full flex flex-col items-center gap-10">
					{schoolAim.map((aim) => (
						<div
							key={aim.id}
							className="w-full max-w-[46rem] rounded-xl shadow-lg hover:shadow-xl pb-6 duration-300 transition-all"
						>
							<div className="w-full min-h-[12rem] bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
								<img
									className="w-full h-full object-cover"
									src={aim.url}
									alt=""
								/>
							</div>
							<div className="w-full min-h-[12.89rem] px-4 sm:px-8 flex flex-col gap-8">
								<h3 className="w-full font-bold text-lato text-[1.875rem] text-[#111827]">
									{aim.header}
								</h3>
								<p className="w-full text-[#4B5563] text-lato text-[1.14rem]">
									{aim.purpose}
								</p>
							</div>
						</div>
					))}
				</section>
			</div>

			{/* Our Core Values */}
			<div className="w-full sm:max-w-[38rem] min-h-[62.75rem] sm:pt-[4rem] sm:pb-[4rem] sm:pr-[1rem] sm:pl-[1rem] mx-auto flex flex-col md:items-center gap-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0 md:min-w-[48rem] md:min-h-[37.75rem]">
				<div className="sm:max-w-full min-h-20 flex flex-col items-center gap-4 md:min-h-[5.25rem]">
					<h3 className="text-[#111827] max-w-full sm:max-w-full min-h-[1.75rem] text-[2.25rem] font-bold text-center font-lato">
						Our Core Value
					</h3>
					<p className="max-w-full sm:max-w-full min-h-[1.75rem] text-[#4B5563] text-[1.25rem] font-lato">
						The principles that guide everything we do
					</p>
				</div>
				<div className="w-full sm:w-[38rem] min-h-[54.5rem] flex flex-col gap-8 md:min-w-[46rem] md:grid md:grid-cols-2 md:min-h-[29.5rem]">
					{coreValueCards.map((value) => (
						<div
							key={value.id}
							className="max-w-full sm:max-w-[38rem] min-h-[8.125rem] sm:pt-[2rem] sm:pb-[2rem] sm:pl-[2rem] sm:pr-[2rem] rounded-lg shadow-xl hover:shadow-xl pb-6 duration-300 transition-all translate-y-2 md:w-[22rem] md:min-h-[13.75rem] md:pl-[2rem] md:pr-[2rem] md:pt-[2rem] md:pb-[2rem] md:shadow-2xl md:hover:shadow-lg"
						>
							<div className="max-w-full sm:max-w-full min-h-full">
								<div className="flex flex-col items-center gap-2">
									<span className="w-[2.5rem] min-h-[2.5rem] text-[2.5rem] text-purple-700">
										{value.icon}
									</span>
									<h3 className="text-[1.25rem] font-lato max-w-full min-h-[1.75rem] font-bold">
										{value.header}
									</h3>
									<p className="text-[#4B5563] font-lato max-w-full sm:max-w-full">
										{value.text}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Our Rich History */}
			<div className="w-full sm:w-[38rem] min-h-[40rem] sm:pt-[4rem] sm:pb-[4rem] sm:pl-[1rem] sm:pr-[1rem] mx-auto md:w-[48rem] md:min-h-[46.1875rem] md:pl-[1rem] md:pr-[1rem] md:pt-[4rem] md:pb-[4rem] ">
				<div className="w-full sm:w-full min-h-full md:h-full md:w-full rounded-2xl ">
					<div className="max-w-full sm:max-w-full min-h-[16rem] bg-gradient-to-r from-blue-900/90 to-purple-900/90 bg-transparent shadow-2xl md:min-h-[13rem] rounded-md">
						<img
							src="/images/building-2.jpg"
							alt=""
							className="w-full h-full object-cover md:h-full "
						/>
					</div>

					<div className="max-w-full sm:max-w-full min-h-[18.21875rem] mx-auto bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col gap-6">
						<h3 className="max-w-full sm:max-w-full text-white font-bold min-h-[2.5rem] text-[2.25rem] font-lato text-center sm:pt-3">
							Our Rich History
						</h3>
						<p className="max-w-full sm:max-w-full min-h-[14.21875rem] text-[#DBEAFE] text-[1.25rem] text-center">
							Founded in 1949, Campus Pathways University began as a small
							liberal arts college with just 200 students. Today, we've grown
							into a comprehensive research university serving over 25,000
							students from around the world. Our journey has been marked by
							continuous innovation, academic achievement, and an unwavering
							commitment to student success.
						</p>
					</div>
				</div>
			</div>

			{/* Why Choose Campus Pathways */}
			<div className="w-full sm:w-[40rem] min-h-[79rem] sm:pt-[4rem] sm:pb-[4rem] sm:pr-[1rem] sm:pl-[1rem] flex flex-col md:items-center gap-10 md:w-[46rem] md:min-h-[42.25rem] md:pl-[1rem] md:pr-[1rem] md:pb-[4rem] md:pt-[4rem] mx-auto">
				<div className="w-full sm:w-[38rem] min-h-[5.25rem] flex flex-col items-center gap-3 md:min-h-[5.25rem] md:text-center md:w-full">
					<h2 className="w-full sm:w-full min-h-[2.5rem] font-bold font-lato text-[2.25rem] text-[#111827] ">
						Why Choose Campus Pathways
					</h2>
					<p className="text-[#4B5563] text-[1.25rem] font-lato">
						Discover what makes us special
					</p>
				</div>

				<div className="w-full sm:w-[38rem] min-h-[22.25rem] md:w-full md:min-h-[34.375rem] ">
					<div className="w-full sm:w-[38rem] min-h-[22.25rem] flex gap-5 flex-col md:w-full md:min-h-[34rem] md:flex-row ">
						{whyChoosePathways.map((item) => (
							<div
								key={item.id}
								className="w-full sm:w-full min-h-full shadow-xl hover:shadow-2xl pb-6 duration-300 transition-all translate-y-2 rounded-xl md:w-[14rem] md:min-h-full "
							>
								<div className="max-w-full sm:max-w-full min-h-[12rem] md:w-full md:min-h-[12rem] ">
									<img
										src={item.url}
										alt=""
										className="w-full h-full object-fit md:min-h-[12rem]"
									/>
								</div>

								<div className="w-full sm:w-full min-h-[10.25rem] sm:pt-[2rem] sm:pb-[2rem] sm:pr-[2rem] sm:pl-[2rem] flex flex-col md:gap-7 md:leading-8 gap-5 md:pl-[2rem] md:pr-[2rem] md:pt-[2rem] md:pb-[2rem] ">
									<h3 className="text-[1.5rem] text-[#111827] min-h-[2rem] font-bold font-lato">
										{item.header}
									</h3>
									<p className="w-full sm:w-[34rem] text-[#4B5563] md:w-[10rem] md:min-h-[18rem]">
										{item.purpose}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
