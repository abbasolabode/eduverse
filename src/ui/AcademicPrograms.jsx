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
	const { academicPrograms = [], isLoadingAcademicPrograms } =
		useAcademicPrograms();

	if (isLoadingAcademicPrograms) return <Spinner />;

	return (
		<div className="w-full min-h-screen flex flex-col">
			{/* Navbar & Hero Section - Now takes full width up to 48rem at md breakpoint */}
			<div className="w-full bg-gradient-to-r from-blue-900/80 to-purple-900/80 md:max-w-[48rem] md:min-h-[13rem] md:mx-auto md:pt-[4rem] md:pb-[4rem] border">
				<header>
					<Navbar />
				</header>

				{/* Hero Section */}
				<section className="mt-[10rem] w-full sm:w-[37rem] sm:min-h-[15rem] mx-auto md:min-h-[13rem]">
					<div className="w-full sm:min-h-full flex flex-col items-center justify-start gap-5 md:max-w-[45rem]">
						<div>
							<FaGraduationCap className="w-[4rem] min-h-[4rem] text-yellow-500 mt-2" />
						</div>
						<h1 className="text-[3rem] font-bold font-lato text-white md:max-w-[45rem] md:min-h-[3rem]">
							Academic Programs
						</h1>
						<p className="text-[1.25rem] font-lato sm:w-[37rem] text-center text-white">
							Discover world-class education programs designed to shape the
							leaders of tomorrow
						</p>
					</div>
				</section>
			</div>

			{/* Main Content - Courses Section */}
			<main className="w-full sm:w-[37rem] flex-1 sm:min-h-[30.75rem] mx-auto mt-6 md:w-[48rem] md:pt-[4rem] md:pb-[4rem] md:pl-[1.5rem] md:pr-[1.5rem] md:grid md:grid-cols-2">
				{academicPrograms?.map((program) => (
					<div
						key={program.id}
						className="sm:min-h-[22.75rem] border-4 sm:w-[37rem] flex flex-col items-center border-white shadow-xl rounded-md mb-4 md:max-w-[21.5rem] md:pb-[1rem]"
					>
						<div className="sm:w-[34rem] sm:min-h-[2.375rem] flex justify-between items-center md:max-w-[18.5rem] md:min-h-[3.875rem]">
							<div className="flex gap-5 sm:w-[20rem] sm:py-2 md:max-w-[18.5rem]">
								<p
									className={`sm:pl-4 sm:pr-4 sm:pt-1 rounded-full whitespace-nowrap sm:pb-1  md:font-normal  font-lato md:max-w-[6.891125rem] md:flex md: md:min-h-[1rem] md:pl-[0.625rem] md:pr-[0.625rem] md:pt-[2px] md:pb-[2px] md:text-xs ${
										program.field !== "Technology"
											? "bg-gradient-to-r from-blue-100 to-purple-100 font-medium text-purple-300"
											: "bg-gradient-to-r from-blue-100 to-yellow-100 font-medium text-blue-500"
									}`}
								>
									{program.field}
								</p>
								<p className="sm:pl-4 sm:pr-4 sm:pt-1 md:max-w-[6.5rem] md:text-xs md:font-normal md:min-h-[1.375rem] whitespace-nowrap rounded-full sm:pb-1 font-lato sm:w-[20rem] text-center bg-gradient-to-r from-blue-300 to-purple-300 font-medium text-purple-500">
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
						<div className="sm:w-[37rem] sm:pt-[1.5rem] sm:pr-[1.5rem] sm:pl-[1.5rem] sm:pb-[1rem] md:max-w-[18.5rem] md:min-h-[10.75rem]">
							<p className="sm:min-h-[1.75rem] font-lato text-[#020817] sm:w-full text-[1.25rem] font-bold md:max-w-full md:min-h-[1.75rem] md:text-[1.25rem] md:font-semibold">
								{program.course}
							</p>
							<p className="text-[#4B5563] text-[0.875rem] font-lato sm:max-w-[43rem] md:min-h-[3.75rem] md:max-w-[18.5rem]">
								{program.detail}
							</p>
							<div className="flex sm:w-[34rem] sm:min-h-[1.25rem] mt-2 md:justify-evenly md:max-w-[18.5rem]">
								<span className="sm:w-[16.5rem] sm:min-h-[2.5rem] flex items-center gap-2">
									<IoMdTime className="w-[1rem] min-h-[1rem] text-[#4B5563]" />
									<p className="text-[0.875rem] font-lato font-medium text-[#020817]md:max-w-[8.75rem] md:min-h-[1.25rem]  ">
										{program.duration}{" "}
										{program.duration >= 18 ? "months" : "years"}
									</p>
								</span>
								<span className="flex gap-2 items-center md:max-w-[8.75rem] md:min-h-[1.25rem] md:mr-6">
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
									<p className="sm:max-w-[9.115rem] whitespace-nowrap border border-gray-400 text-[0.75rem] md:max-w-[9.115rem] md:min-h-[1.375rem] md:font-normal text-[#020817] rounded-full sm:px-2 sm:py-1 font-semibold shadow-lg">
										{program.highlight1}
									</p>
									<p className="sm:max-w-[9.115rem] whitespace-nowrap border border-gray-400 text-[0.75rem] md:max-w-[9.115rem] md:min-h-[1.375rem] md:font-normal text-[#020817] rounded-full sm:px-2 sm:py-1 font-semibold shadow-lg">
										{program.highlight2}
									</p>
									<p className="sm:max-w-[9.115rem] whitespace-nowrap border border-gray-400 text-[0.75rem] text-[#020817] md:max-w-[9.115rem] md:min-h-[1.375rem] md:font-normal rounded-full sm:px-2 sm:py-1 font-semibold shadow-lg">
										{program.highlight3}
									</p>
									<p className="sm:max-w-[9.115rem] whitespace-nowrap border border-gray-400 text-[0.75rem] text-[#020817] md:max-w-[9.115rem] md:min-h-[1.375rem] md:font-normal rounded-full sm:px-2 sm:py-1 font-semibold shadow-lg">
										{program.highlight4}
									</p>
								</span>
							</div>
						</div>

						<div className="flex sm:w-[34rem] min-h-[5rem] items-center md:max-w-[16.5rem] md:min-h-[1.5rem]">
							<UtiliButton
								academicProgramStyle="sm:w-full rounded-md flex justify-center text-white hover:bg-purple-700 cursor transition-all bg-gradient-to-r from-blue-600 to-purple-700 md:max-w-[16.5rem] md:min-h-[1.5rem]"
								moveToApply="/apply"
							/>
						</div>
					</div>
				))}
			</main>

			{/* Footer Section */}
			<div className="mt-auto w-full sm:w-[40rem] mx-auto md:w-[48rem] ">
				<ReadyToBeginJourney academicProgramStyleForReadyToBegin="bg-gradient-to-r from-green-600 to-blue-600" />
				<Footer />
			</div>
		</div>
	);
}
