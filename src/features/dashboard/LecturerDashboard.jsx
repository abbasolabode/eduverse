import Navbar from "../../ui/Navbar";
import { CiHome } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import { GoUpload } from "react-icons/go";
import { IoKey } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import BackHomeButton from "../../ui/BackHomeButton";
import LogoutButton from "../../ui/LogoutButton";
import Footer from "../../ui/Footer";
import { useEffect } from "react";

const lecturerDashboardLinks = [
	{
		id: 1,
		icon: <FaBookOpen />,
		link: "myCourses",
		title: "My Courses",
	},
	{
		id: 2,
		icon: <FaUserFriends />,
		link: "students",
		title: "Students",
	},
	{
		id: 3,
		icon: <FaGraduationCap />,
		link: "studentsBiodata",
		title: "Student Biodata",
	},
	{
		id: 4,
		icon: <GoUpload />,
		link: "uploadGrades",
		title: "Upload Grades",
	},

	{
		id: 5,
		icon: <IoKey />,
		link: "password",
		title: "Password",
	},
];

export default function LecturerDashboard() {
	useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
	return (
		<div className="w-full sm:w-[40rem] min-h-screen flex flex-col md:w-[48rem] bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
			<header className="fixed w-full z-50">
				<Navbar />
			</header>

			{/* Dashboard header */}
			<div className="min-w-full md:min-w-[48rem] md:min-h-[4.5rem] flex items-center md:pl-[1.5rem] md:pr-[1.5rem] border border-gray-300 mt-[6.5rem]   ">
				<div className="flex min-w-full md:min-w-full justify-between">
					{/* Logo */}
					<div className="min-w-full md:min-w-[16.588rem] md:min-h-[2rem] flex items-center gap-1">
						<span className="">
							<FaGraduationCap className="w-[2rem] min-h-[2rem] " />
						</span>
						<h3 className="min-w-full md:min-w-[13.838125rem] md:min-h-[2rem] font-lato font-bold text-[#111827] text-[1.5rem]">
							Lecturer Dashboard
						</h3>
					</div>

					{/* Buttons - home & logout */}
					<div className="min-w-full md:min-w-[14.483125rem]">
						<div className="flex items-center justify-center gap-3 md:min-h-[2.5rem]">
							<BackHomeButton lectBackHomeStyle="min-w-full font-semibold rounded-sm font-lato md:min-w-[5.53125rem] flex items-center text-center md:min-h-[2.2rem]">
								<span className="flex items-center gap-2">
									<CiHome className="" />
									Home
								</span>
							</BackHomeButton>

							<div className="min-w-full font-semibold rounded-sm font-lato gap-2 md:min-w-[6.53125rem] flex items-center md:min-h-[2.5rem]">
								<LogoutButton />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Links */}
			<div className="min-w-full md:min-w-[44.5rem] min-h-[2rem] md:min-h-[6rem] flex flex-col justify-center md:pl-[0.25rem] md:pr-[0.25rem] md:pt-[0.25rem] mdLpb-[0.25rem] ">
				<div className="min-w-full md:min-w-[44.5rem] flex justify-center items-center gap-3 min-h-[2rem] md:min-h-[2rem] md:pl-[0.25rem] md:pr-[0.25rem] md:pt-[0.25rem] mdLpb-[0.25rem] ">
					{lecturerDashboardLinks?.map((item) => (
						<Link
							to={item.link}
							key={item.id}
							className="flex items-center hover:shadow-lg hover:transition-all hover:duration-300 hover:bg-gray-600  pl-[0.75rem] text-[#64748B] rounded-sm pr-[0.75rem] pt-[0.375rem] pb-[0.375rem]    min-h-[1.25rem] justify-center gap-1 border min-w-full md:min-w-[7.399rem]"
						>
							{item.icon}
							<p className="text-sm font-lato font-semibold ">{item.title}</p>
						</Link>
					))}
				</div>
			</div>

			{/* Outlets */}
			{/* Content area for nested routes */}
			{/* Render all children routes here */}
			<div className="content-area md:min-w-[45rem] md:pl-[1.5rem] md:pr-[1.5rem] md:pt-[2rem] md:pb-[2rem]">
				<Outlet />
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}
