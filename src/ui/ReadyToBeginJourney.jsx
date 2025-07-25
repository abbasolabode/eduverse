import UtiliButton from "./UtiliButton";

export default function ReadyToBeginJourney({
	academicProgramStyleForReadyToBegin,
}) {
	//UseNavigate for navigating programatically

	return (
		<div
			className={`sm:max-w-[40rem] sm:min-h-[15.25rem] mt-[4rem] md:max-w-full flex flex-col items-center overflow-hidden max-auto bg-gradient-to-r from-blue-600 to-purple-700 ${academicProgramStyleForReadyToBegin} `}
		>
			<div className="sm:w-[37rem] sm:min-h-[8.5rem] md:max-w-[48rem] flex flex-col gap-2 sm:pt-10">
				<h2 className="text-[2.25rem] font-semibold md:max-w-[45rem] md:min-h-[2.25rem] font-poppins text-center text-white">
					Ready to Begin Your Journey
				</h2>
				<p className="sm:w-full min-h-[3.5rem] md:w-[43rem]  md:min-h-[3.5rem] md:pl-[1rem] md:pr-[1rem] text-[1.25rem] text-center font-lato text-white">
					Join thousands of students who have transformed their lives through
					their quality education
				</p>
			</div>

			{/* Button */}
			<div className="sm:w-[37rem] sm:min-h-[8.5rem] ">
				<div
					className="sm:w-[37rem] sm:min-h-[8.5rem] flex items-center justify-center gap-3
                "
				>
					{/* Apply Today button */}
					<UtiliButton moveToApply="/apply">
						<p className="font-semibold">Apply Today</p>
					</UtiliButton>

					{/* View programs button */}
					<UtiliButton
						classViewProgramStyle="bg-blue-200 opacity-70 hover:bg:bg-blue-500"
						moveToPrograms="/programs"
					>
						<p className="font-semibold">View Programs</p>
					</UtiliButton>
				</div>
			</div>
		</div>
	);
}
