import { MdLogout } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { GiOpenBook } from "react-icons/gi";
import BackHomeButton from "../../ui/BackHomeButton";
import Navbar from "../../ui/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";
import { useBiodata } from "../../hook/useBiodata";
import { useAuthContext } from "../../context/AuthContextProvider";
import LogoutButton from "../../ui/LogoutButton";
import { useEffect } from "react";

export default function StudentDashboard() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	//This is an array of object that contains all the students biodata
	const { biodata = [] } = useBiodata();

	//This is the data of the logged in user coming from a contextAPI
	const { user } = useAuthContext();

	//Find the first element that matches the data of the logged in user using the find method()...
	//The biodata consists of all students data (an array of objects). On it, we call the find method to search the first element that passes the condition. Then stores the result in the variable.
	const authenticatedUser = biodata?.find((item) => item.email === user.email);
	console.log(authenticatedUser);

	const fullName = authenticatedUser?.fullName;
	// Split the full name into parts and take the first two initials
	const initials = fullName
		?.split(" ")
		.map((name) => name.slice(0, 1))
		.join("")
		.toUpperCase()
		.slice(0, 2);

	const studentDashboardLinks = [
		{
			id: 1,
			icon: <FaGraduationCap />,
			link: "biodata",
			title: "Biodata",
		},
		{
			id: 2,
			icon: <GiOpenBook />,
			link: "courses",
			title: "Courses",
		},
		{
			id: 3,
			icon: <LuFileSpreadsheet />,
			link: "grades",
			title: "Grades",
		},
		{
			id: 4,
			icon: <CiCalendar />,
			link: "assignments",
			title: "Assignments",
		},
	];

	return (
		<>
			<div className="w-full sm:w-[40rem] min-h-screen flex flex-col md:w-[48rem] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
				<header className="fixed w-full z-50">
					<Navbar />
				</header>

				{/* Header */}
				<div className="w-full md:w-[48rem] md:min-h-[8.5rem] md:pl-[1.5rem] md:pr-[1.5rem] mt-[6.5rem] flex items-center bg-indigo-100 sm:min-w-[40rem] sm:min-h-[8.25rem]">
					<div className="w-full md:max-w-full min-h-full flex items-center justify-between gap-4 sm:gap-2">
						{/* Student dashboard header */}
						<div className="flex items-center md:min-w-[15.9675rem] md:min-h-[6.5rem] gap-1 sm:w-[16rem]">
							<div className="flex items-center sm:min-w-[]">
								<FaGraduationCap className="min-w-[1.95375rem] min-h-[2rem] text-indigo-400" />
							</div>
							<div className="md:min-w-[13.26375rem] flex flex-col gap-1 sm:">
								<h3 className="text-[1.5rem] min-w-full md:min-w-full text-[#111827] font-lato font-bold flex flex-wrap">
									Student Dashboard
								</h3>
								<p className="min-w-full font-medium md:min-w-full text-[0.875rem] text-[#4B5563] min-h-[2.5rem]">
									Welcome back,
									<span className="pl-1 font-lato font-semibold text-indigo-500">
										{authenticatedUser?.fullName || "Student"}!
									</span>
								</p>
							</div>
						</div>

						<div className="flex items-center gap-3 sm:gap-2 sm:justify-evenly sm:w-[40rem]">
							{/* Avatar & Initials */}
							<div className="md:min-w-[10.375rem] md:min-h-[3.5rem] flex items-center gap-1">
								<p className="min-w-[2.5rem] min-h-[2.5rem] rounded-full border text-indigo-400 bg-white font-bold justify-center flex items-center shadow-xl">
									{initials}
								</p>
								<div className="min-w-full md:min-w-[10rem] md:min-h-[2.5rem] flex flex-col justify-center">
									<p className="font-medium font-lato text-[0.875rem] text-[#111827] md:min-w-[9rem]">
										<span className="font-lato font-semibold text-indigo-500">
											{authenticatedUser?.fullName || "Student"}
											{/* Display full name */}
										</span>
									</p>
									<p className="text-[0.75rem] font-lato font-normal text-indigo-400">
										{authenticatedUser?.studentId} {/* Display student ID */}
									</p>
								</div>
							</div>

							{/* Back home button */}
							<div className="w-full md:min-w-[7.55766875rem] md:ml-[1rem] sm:w-[6.7rem] sm:min-h-[2.25rem]">
								<BackHomeButton studentDashboardStyle="shadow-sm sm:font-medium sm:text-[0.75rem] bg-white border-indigo-300 sm:max-w-[6.7rem] sm:min-h-[2.25rem] hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-indigo-400 animation-all ">
									<CiHome className="font-bold" />
								</BackHomeButton>
							</div>

							{/* Logout button */}
							<div className="w-full md:min-w-[4.55766875rem] md:min-h-[1.5rem] sm:max-w-[6.4375rem] sm:min-h-[2.25rem]">
								<LogoutButton stuLogoutStyle="sm:min-h-[2.25rem]" />
							</div>
						</div>
					</div>
				</div>

				{/* Links for navigation */}
				<div className="w-full md:w-[48rem] md:min-h-[2.5rem] md:pl-[1.5rem] md:pr-[1.5rem] md:pt-[2rem] md:pb-[2rem] sm:w-[40rem] sm:min-h-[9.25rem] sm:flex sm:items-center sm:justify-center">
					{/* Mapped Links */}
					<div className="flex gap-2 items-center justify-between md:min-w-[28rem] md:min-h-[2.5rem] min-w-full md:pl-[0.25rem] md:pr-[0.25rem] md:pt-[0.25rem] md:pb-[0.25rem] bg-indigo-50 rounded-sm sm:w-[40rem] sm:min-h-[9.25rem] sm:grid sm:grid-cols-2 sm:justify-center text-center sm:ml-4 ">
						{studentDashboardLinks.map((link) => (
							<div
								key={link?.id}
								className="w-full md:min-w-[8.125rem] md:min-h-[2rem] sm:w-[18.625rem] sm:min-h-[2.75rem] "
							>
								<Link
									to={link?.link}
									className={`flex text-white gap-2 items-center justify-center bg-gradient-to-r from-blue-300 to-purple-600 md:min-h-[2rem] sm:pl-[0.75rem] sm:pt-[0.75rem] sm:pr-[0.75rem] sm:pb-[0.75rem] sm:rounded-md ${
										link.id === 4 ? "md:min-w-[11rem]" : "md:min-w-[8.125rem]"
									} active:text-gray-500 bg-white active:bg-indigo-400 rounded-sm active:shadow-lg active:ring-2`}
								>
									{link?.icon}
									<p className="font-bold text-[0.875rem] font-lato">
										{link?.title}
									</p>
								</Link>
							</div>
						))}
					</div>
				</div>

				{/* Content area for nested routes */}
				{/* Render all children routes here */}
				<div className="content-area">
					<Outlet />
				</div>

				<Footer />
			</div>
		</>
	);
}
