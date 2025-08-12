/* eslint-disable no-unused-vars */
import { FaGraduationCap } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import Navbar from "./Navbar";
import UtiliButton from "./UtiliButton";
import Footer from "./Footer";
import ReadyToBeginJourney from "./ReadyToBeginJourney";
import { useAcademicPrograms } from "../hook/useAcademicPrograms";
import Spinner from "./Spinner";

export default function AcademicPrograms() {
	const { academicPrograms = [], isLoadingAcademicPrograms } = useAcademicPrograms();

	if (isLoadingAcademicPrograms)
		return (
			<Spinner academicPrograms="Loading Academic Programs, Please wait..." />
		);

	return (
		<div className="w-full min-h-screen flex flex-col lg:items-center lg:min-w-[64rem] overflow-hidden ">
			{/* Navbar & Hero Section - Now takes full width up to 48rem at md breakpoint */}
			<div className="w-full bg-gradient-to-r from-blue-900/80 to-purple-900/80 md:max-w-[48rem] md:min-h-[13rem] md:mx-auto md:pt-[4rem] md:pb-[4rem] lg:min-w-[64rem] lg:min-h-[19.25rem]">
				<header>
					<Navbar />
				</header>

				{/* Hero Section */}
				<section className="mt-[10rem] w-full sm:w-[37rem] sm:min-h-[15rem] mx-auto md:min-h-[13rem] lg:min-w-[60rem] ">
					<div className="w-full sm:min-h-full flex flex-col items-center justify-start lg:items-center gap-5 md:max-w-[45rem] lg:min-w-[60rem] lg:justify-center lg:h-[11.25rem] ">
						<div>
							<FaGraduationCap className="w-[4rem] min-h-[4rem] text-yellow-500 mt-2" />
						</div>
						<h1 className="text-[3rem] font-bold font-lato text-white md:max-w-[45rem] md:min-h-[3rem]  lg:min-w-[60rem] text-center">
							Academic Programs
						</h1>
						<p className="text-[1.25rem] font-lato sm:pb-[4rem] sm:w-[37rem] text-center text-white lg:min-w-[60rem] ">
							Discover world-class education programs designed to shape the
							leaders of tomorrow
						</p>
					</div>
				</section>
			</div>

			{/* Main Content - Courses Section */}
			<main className="min-w-full sm:w-[37rem] flex-1 sm:min-h-[30.75rem] flex flex-col items-center gap-4  mx-auto mt-6 md:min-w-[48rem] md:pt-[4rem] md:pb-[4rem] md:pl-[1.5rem] lg:grid md:pr-[1.5rem] md:grid md:grid-cols-2 md:gap-5 lg:gap-10 lg:min-w-[64rem]  lg:grid-cols-3 lg:items-center lg:pl-[2rem] lg:pr-[2rem] pt-[4rem] lg:pb-[4rem] ">
				{academicPrograms?.map((program) => (
					<div
						key={program.id}
						className="sm:min-h-[22.75rem] sm:w-[37rem] flex flex-col items-center shadow-xl rounded-md md:max-w-[21.5rem] md:pr-[1.5rem] md:pl-[1.5rem] md:pt-[1.5rem] md:pb-[1rem] border-8 border-white/40 md:min-h-[20rem] lg:max-w-[18.66625rem] lg:min-h-[19rem] lg:pb-[3rem] hover:shadow-xl hover:duration-300 hover:animation hover:transition-all "
					>
						<div className="sm:w-[34rem] md:max-w-[18.5rem] sm:min-h-[2.375rem] md:min-h-[1.375rem] flex justify-between items-center lg:min-w-[18.66625rem] lg:gap-1 lg:min-h-[1.375rem] lg:px-2 ">
							<div className="flex gap-1 sm:w-[12.294375rem] sm:py-2 lg:min-w-[12.294375rem] lg:min-h-[1.375rem] md:max-w-[12.294375rem] md:min-h-[1.375rem] md:gap-1">
								<p
									className={`sm:pl-4 sm:w-[5.625rem] sm:pr-4 sm:pt-1 rounded-full text-xs whitespace-nowrap sm:pb-1 md:font-normal flex justify-center font-lato lg:text-xs lg:flex lg:items-center lg:justify-center lg:min-w-[5.26625rem] md:w-[5.26615rem] md:items-center md:min-h-[1.375rem] md:pt-[0.125rem] md:pb-[0.125rem] md:pr-[0.625rem] md:pl-[0.625rem] ${
										program.field !== "Technology"
											? "bg-gradient-to-r from-blue-100 to-purple-100 font-medium text-purple-300"
											: "bg-gradient-to-r from-blue-100 to-yellow-100 font-medium text-blue-500"
									}`}
								>
									{program.field}
								</p>
								<p className="sm:pl-4 sm:pr-4 sm:pt-1 md:text-x lg:text-xs md:font-normal whitespace-nowrap rounded-full sm:pb-1 font-lato sm:w-[20rem] flex justify-center items-center text-center bg-gradient-to-r from-blue-300 to-purple-300 font-medium text-xs lg:min-w-[6.528125rem] text-purple-500 md:w-[6.528125rem] md:min-h-[1.375rem]">
									{program.program}
								</p>
							</div>

							<div className="flex justify-end gap-2 items-center sm:py-2 sm:w-[6rem] sm:pr-1">
								<span>
									<FaStar className="text-yellow-500" />
								</span>
								<p className="font-lato font-medium">
									{Number((program.rating / 10).toFixed(1))}
								</p>
							</div>
						</div>
						<div className="sm:w-[37rem] sm:pt-[1.5rem] sm:pr-[1.5rem] sm:pl-[1.5rem] sm:pb-[1rem] md:max-w-[18.5rem] md:min-h-[10.75rem] lg:min-w-[15.66625rem]">
							<p className="sm:min-h-[1.75rem] font-lato text-[#020817] sm:w-full text-[1.25rem] font-bold md:max-w-full md:min-h-[1.75rem] md:text-[1.25rem] md:font-semibold">
								{program.course}
							</p>
							<p className="text-[#4B5563] text-[0.875rem] font-lato sm:max-w-[43rem] md:min-h-[3.75rem] md:max-w-[18.5rem] ">
								{program.detail}
							</p>
							<div className="flex sm:w-[34rem] sm:min-h-[1.25rem] mt-2 md:max-w-[18.5rem] md:justify-start">
								<span className="sm:w-[16.5rem] sm:min-h-[2.5rem] flex items-center gap-2 md:max-w-[8.75rem]">
									<IoMdTime className="w-[1rem] min-h-[1rem] text-[#4B5563]" />
									<p className="text-[0.875rem] font-lato font-medium text-[#020817]md:max-w-[8.75rem] md:min-h-[1.25rem]  ">
										{program.duration}{" "}
										{program.duration >= 18 ? "months" : "years"}
									</p>
								</span>
								<span className="flex gap-2 items-center md:max-w-[8.75rem] md:min-h-[1.25rem] md:mr-6 lg:pr-[5rem]">
									<FaUserFriends className="w-[1rem] min-h-[1rem] text-[#4B5563]" />
									<p className="text-[0.875rem] font-lato font-medium text-[#020817]">
										{program.numEnrollment}+
									</p>
								</span>
							</div>

							<div className="sm:full sm:min-h-[3.375rem] mt-[1rem] flex flex-col gap-3 md:max-w-[21.5rem] md:min-h-[8.25rem] ">
								<p className="sm:w-[37rem] sm:min-h-[1.5rem] font-medium font-lato text-[#111827]  md:max-w-[18.5rem] md:min-h-[1.5rem] md:font-semibold">
									{program.programHeader}:
								</p>
								<span className="flex gap-2 flex-wrap md:max-w-[21.5rem] md:min-h-[3rem]">
									<p className="sm:max-w-[9.115rem] whitespace-nowrap border-2 border-white text-[0.75rem] md:max-w-[9.115rem] md:min-h-[1.375rem] md:font-normal text-[#020817] rounded-full sm:px-2 sm:py-1 font-semibold shadow-lg">
										{program.highlight1}
									</p>
									<p className="sm:max-w-[9.115rem] whitespace-nowrap border-2 border-white text-[0.75rem] md:max-w-[9.115rem] md:min-h-[1.375rem] md:font-normal text-[#020817] rounded-full sm:px-2 sm:py-1 font-semibold shadow-lg">
										{program.highlight2}
									</p>
									<p className="sm:max-w-[9.115rem] whitespace-nowrap border-2 border-white text-[0.75rem] text-[#020817] md:max-w-[9.115rem] md:min-h-[1.375rem] md:font-normal rounded-full sm:px-2 sm:py-1 font-semibold shadow-lg">
										{program.highlight3}
									</p>
									<p className="sm:max-w-[9.115rem] whitespace-nowrap border-2 border-white text-[0.75rem] text-[#020817] md:max-w-[9.115rem] md:min-h-[1.375rem] md:font-normal rounded-full sm:px-2 sm:py-1 font-semibold shadow-lg">
										{program.highlight4}
									</p>
								</span>
							</div>
						</div>

						<div className="flex sm:w-[34rem] min-h-[5rem] items-center md:max-w-[16.5rem] md:min-h-[1.5rem] lg:[">
							<UtiliButton
								academicProgramStyle="sm:w-full rounded-md flex justify-center text-white hover:bg-purple-700 cursor transition-all bg-gradient-to-r from-blue-600 to-purple-700 md:max-w-[16.5rem] md:min-h-[1.5rem]"
								moveToApply="/apply"
							/>
						</div>
					</div>
				))}
			</main>

			{/* Footer Section */}
			<div className="mt-auto w-full sm:w-[40rem] mx-auto md:w-[48rem] lg:min-w-[64rem] lg:overflow-hidden ">
				<ReadyToBeginJourney academicProgramStyleForReadyToBegin="bg-gradient-to-r from-green-600 to-blue-600 " />
				<Footer />
			</div>
		</div>
	);
}
