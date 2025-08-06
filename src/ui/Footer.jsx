import Logo from "./Logo";
import {
	SlSocialFacebook,
	SlSocialTwitter,
	SlSocialInstagram,
	SlSocialYoutube,
} from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useStayUpdated } from "../hook/useStayUpdated";
import { useForm } from "react-hook-form";

const socialIcons = [
	{
		id: 1,
		socialIcon: (
			<SlSocialFacebook className="w-[1.25rem] min-h-[1.25rem] text-[#D1D5DB] text-[1.25rem]" />
		),
	},
	{
		id: 2,
		socialIcon: (
			<SlSocialTwitter className="w-[1.25rem] min-h-[1.25rem] text-[#D1D5DB] text-[1.25rem]" />
		),
	},
	{
		id: 3,
		socialIcon: (
			<SlSocialInstagram className="w-[1.25rem] min-h-[1.25rem] text-[#D1D5DB] text-[1.25rem]" />
		),
	},
	{
		id: 4,
		socialIcon: (
			<FiLinkedin className="w-[1.25rem] min-h-[1.25rem] text-[#D1D5DB] text-[1.25rem]" />
		),
	},
	{
		id: 5,
		socialIcon: (
			<SlSocialYoutube className="w-[1.25rem] min-h-[1.25rem] text-[#D1D5DB] text-[1.25rem]" />
		),
	},
];

const quickLinks = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},

	{
		id: 2,
		title: "About Us",
		url: "/about",
	},

	{
		id: 3,
		title: "Programs",
		url: "/program",
	},

	{
		id: 4,
		title: "Apply Now",
		url: "/apply",
	},

	{
		id: 5,
		title: "Student Portal",
		url: "/login",
	},
];

const programs = [
	{
		id: 1,
		course: "Computer Science",
		url: "/",
	},

	{
		id: 2,
		course: "Business Admistration",
		url: "/",
	},

	{
		id: 3,
		course: "Engineering",
		url: "/",
	},

	{
		id: 4,
		course: "Data Science",
		url: "/",
	},

	{
		id: 5,
		course: "Psychology",
		url: "/",
	},

	{
		id: 6,
		course: "Medicine",
		url: "/",
	},
];

export default function Footer() {
	//Destructuring the useForm hook from react hook form
	const { handleSubmit, register, reset, formState } = useForm();
	const { errors } = formState;

	//destructuring the useStayUpdated
	const { stayUpdated, isStayingUpdated } = useStayUpdated();

	//This is the function responsible for calling the mutate function(stayUpdated) to send the data to the API function
	function onSubmit(email) {
		//Return data if the data does not exist i.e email
		if (email.email === "") return;
		//This is the mutate function that gets called by the onSubmit function with the data passed from the form input field, and then in turn calls the API function with the data received 0000
		stayUpdated(email, {
			//The onSettled function gets called either when the mutation is successful or failed
			onSettled: () => {
				//The reset function is responsible for resetting the input fields to their initial state
				reset();
			},
		});
	}

	return (
		<footer className="min-w-full min-h-[76.84375rem] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 md:min-w-full overflow-hidden lg:w-[64rem] lg:min-h-[38rem] ">
			<div className="sm:min-w-[37rem] min-h-[49.34rem] sm:pt-[4rem] sm:pb-[4rem] md:grid md:grid-cols-2 mx-auto md:gap-[10rem] md:max-w-[45rem] md:min-h-[27rem] lg:min-w-[60rem] lg:min-h-[12.75rem] lg:grid lg:grid-cols-4 gap-4	lg:pt-[4rem] lg:pb-[4rem] md:justify-start													">
				{/* Campus Pathways */}
				<div className="sm:w-[37rem] min-h-[15.28rem] md:max-w-[21.5rem] md:min-h-[12.25rem] lg:min-w-[13.5rem] lg:min-h-[12.76rem]">
					<div className="w-full min-h-full flex flex-col gap-7 md:max-w-[21.5rem] md:min-h-[12.25rem]">
						{/* Logo component */}
						<Logo footerLogoStyle="text-blue-500 min-h-[1.75rem]" />
						<p className="sm:w-full sm:min-h-[2.84375rem] text-[#D1D5DB] font-lato sm:pt-[1rem] md:min-w-[21.5rem] md:min-h-[4.265rem] lg:w-[13.5rem]">
							Empowering students to achieve their academic dreams through
							innovative programs and exceptional education.
						</p>

						{/* Social Icons */}
						<span className="flex gap-8 ">
							{socialIcons.map((item) => {
								return <Link key={item.id}>{item.socialIcon}</Link>;
							})}
						</span>
					</div>
				</div>

				{/* Quick Links */}
				<div className="sm:min-w-[37rem] min-h-[12.25rem] flex flex-col gap-5 lg:w-[13.5rem] lg:min-h-[12.75rem] lg:justify-center">
					<h3 className="min-h-[1.75rem] text-[1.125rem] font-semibold text-[#60A5FA] lg:w-[13.5rem]">
						Quick Links
					</h3>

					<nav className="sm:w-[37rem] min-h-[9.5rem] sm:p-2">
						<ul className="flex flex-col gap-4 text-[#D1D5D8]">
							{quickLinks.map((item) => {
								return (
									<li
										key={item.id}
										className="font-lato hover:underline w-[7.3125rem] min-h-[1.15625rem] "
									>
										<Link to={item.url} className="lg:text-[0.875rem]">
											{item.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>

				{/*Academic Programs */}
				<div className="sm:min-w-[37rem] min-h-[12.75rem] flex flex-col gap-5 mt-5 lg:w-[13.5rem]">
					<h3 className="sm:w-full min-h-[1.75rem] font-semibold text-[1.125rem] text-[#60A5FA] ">
						Academic Programs
					</h3>

					<nav className="sm:w-[37rem] min-h-[12.75rem]">
						<ul className="flex flex-col gap-4 sm:w-[37rem] font-lato text-[#D1D5D8]">
							{programs.map((item) => {
								return (
									<li
										key={item.id}
										className="hover:underline sm:w-[37rem] min-h-[1.25rem]"
									>
										<Link className="lg:text-[0.875rem]">{item.course}</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>

				{/* Contact Us */}
				<div className="sm:w-[37rem] min-h-[7.25rem] flex flex-col gap-3 mt-5 lg:flex lg:w-[13.5rem] lg:relative lg:right-[3.5rem]">
					<h3 className="sm:w-full min-h-[1.75rem] font-semibold text-[1.125rem] text-[#60A5FA] ">
						Contact Us
					</h3>
					<span className="sm:w-[37rem] min-h-[2.5rem] flex gap-2">
						<CiLocationOn className="w-[1rem] min-h-[1rem] sm:mt-2 text-[#60A5FA] " />{" "}
						<p className="sm:w-[9.58625rem] min-h-[2.5rem] text-[0.875rem] text-[#D1D5D8] font-lato">
							123 University Ave Academic City, AC 12345
						</p>
					</span>

					<span className="sm:w-[37rem] min-h-[2.5rem] flex gap-2">
						<CiPhone className="w-[1rem] min-h-[1rem] sm:mt-1 text-[#60A5FA] " />{" "}
						<p className="sm:w-[9.58625rem] min-h-[2.5rem] text-[0.875rem] text-[#D1D5D8] font-lato">
							+1 (5555) 123-4567
						</p>
					</span>

					<span className="sm:w-[37rem] min-h-[2.5rem] flex gap-2 ">
						<CiMail className="sm:mt-1 text-[#60A5FA]" />{" "}
						<p className="sm:w-[9.58625rem] min-h-[2.5rem] text-[0.875rem] text-[#D1D5D8] font-lato">
							info@campuspathways.edu
						</p>
					</span>
				</div>
			</div>

			{/* Horizontal rule */}
			<hr className="sm:w-[37rem] border text-[#D1D5D8] opacity-30 md:max-w-[45rem] mx-auto lg:min-w-[60rem]  " />

			{/* Stay Updated - input form for only email */}
			<div className="sm:w-[37rem] sm:min-h-[12.9375rem] flex flex-col gap-5 items-center md:items-center md:justify-center mx-auto md:max-w-[45rem] md:text-center ">
				<div className="text-center">
					<h3 className="sm-:w-[37rem] min-h-[1.75rem] mt-4 font-lato text-[1.25rem] font-semibold text-[#60A5FA] ">
						Stay Updated
					</h3>
					<p className="sm:w-[28rem] min-h-[2.5rem] text-[#D1D5D8] text-[0.875rem] font-lato">
						Subscribe to our newsletter for the latest updates on programs,
						events and opportunities.
					</p>
				</div>

				{/* Email input and button  */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="sm:w-[37rem] min-h-20 flex justify-center items-center gap-2 sm:pt-3 md:max-w-[45rem] "
				>
					<div className="flex flex-col items-center justify-center min-h-12">
						<input
							type="email"
							id="email"
							disabled={isStayingUpdated}
							className="sm:w-[20.228rem] min-h-9 focus:outline-none bg-white/10 border-white/20 focus:border-blue-400 placeholder:-gray-400 text-white  sm:pt-[0.5rem] sm:pb-[0.8rem] sm:pl-[1rem] rounded-md sm:pr-[1rem] ring-0 outline-0 flex-1 transparent-30 opacity-60"
							placeholder="Enter your email"
							{...register("email", {
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email address",
								},
							})}
						/>
						<small className="italic font-poppins font-semibold text-red-500">
							{errors && errors?.email?.message}
						</small>
					</div>
					<button
						disabled={isStayingUpdated}
						className="sm:w-[7.271875rem]  hover:bg-blue-600 sm:min-h-[2.625rem] rounded-md font-lato items-center flex justify-center font-poppins bg-gradient-to-r from-blue-600 to-purple-600 text-white "
					>
						{isStayingUpdated ? "Subscribing..." : "Subscribe"}
					</button>
				</form>
			</div>

			{/* Horizontal rule */}
			<hr className="sm:w-[37rem] border text-[#D1D5D8] opacity-30  md:max-w-[45rem] mx-auto lg:min-w-[60rem]   " />
			<div className="sm:w-[37rem] sm:min-h-[10.5rem] sm:pt-[1.5rem] sm:pb-[1.5rem] flex flex-col gap-5 items-center md:mx-auto  lg:min-w-[60rem] lg:flex-row lg:items-center lg:justify-between ">
				{/* All right reserved */}
				<p className="text-[#D1D5D8] font-lato ">
					@2024 Campus Pathways University. All right reserved
				</p>
				{/* Policy */}
				<div className="flex gap-3 text-[#D1D5D8] ">
					<Link>Privacy Policy</Link>
					<Link>Terms of Service</Link>
					<Link>Accessibility</Link>
				</div>
			</div>
		</footer>
	);
}
