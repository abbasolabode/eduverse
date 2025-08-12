/* eslint-disable no-unused-vars */
import { useBiodata } from "../hook/useBiodata";

export default function StudentsBiodata() {

 const  {biodata: studentBiodata =[], isLoading} = useBiodata();
 console.log(studentBiodata)
 

	return (
		<div className="md:min-w-[44.875rem] min-w-full flex flex-col gap-4 sm:max-w-[40rem] mx-auto items-center overflow-hidden">
			{studentBiodata?.map((studentData) => (
				<div
					key={studentData.id}
					className="md:min-w-full min-w-full md:min-h-[14.5rem] rounded-lg shadow-lg bg-white sm:max-w-[38rem] sm:min-h-[24.6rem] pl-[1rem] pr-[1rem] pt-[1rem] pb-[1rem]"
				>
					{/* Top Container */}
					<div className=" md:min-h-[6.125rem] flex items-center justify-between md:pl-[1.5rem] md:pr-[1.5rem] md:pt-[1.5rem] md:pb-[1.5rem] sm:min-w-[36.75rem] sm:gap-7 ">
						<span className="flex flex-col justify-center font-lato sm:min-w-[27rem]">
							<h3 className="min-w-full md:min-w-[7.22875rem] font-semibold text-[1.5rem] text-[#020817] ">
								{studentData?.fullName}
							</h3>
							<p className="text-[0.875rem] font-normal text-[#64748B]">
								Student Biodata and academic information
							</p>
						</span>

						<p className="min-w-full md:min-w-[5.165rem] text-[0.75rem] shadow-gray-100 bg-green-500 shadow-2xl font-semibold rounded-2xl md:min-h-[1rem] md:pt-[0.125rem] md:pb-[0.125rem] md:pl-[0.625rem] md:pr-[0.625rem] text-white sm:min-w-[6rem] pl-1.5 pr-1.5 pt-0.5 pb-0.5 text-center">
							{studentData?.studentId}
						</p>
					</div>

					{/* Bottom container */}
					<div className="md:min-w-[44.875rem] min-w-full">
						<div className=" md:min-h-[8.375rem] flex items-center justify-between md:pl-[1.5rem] md:pr-[1.5rem] md:pb-[1.5rem] sm:flex sm:flex-col">
							{/* Personal Information */}
							<div className="min-w-full md:min-w-[12.958125rem] md:min-h-[6.875rem] flex flex-col gap-3">
								<h4 className="font-lato font-medium min-w-full md:min-w-full text-[#020817] mt-3">
									Personal Information
								</h4>

								{/* Flex container */}
								<div className="md:min-h-[4.75rem] flex flex-col gap-1 min-w-full font-lato md:min-w-[12.958125rem] ">
									<span className="flex items-center justify-between">
										<p className="text-[0.875rem] text-[#4B5563] ">
											Student ID:
										</p>
										<p className="text-[0.875rem] text-[#020817]  font-medium">
											{studentData?.studentId}
										</p>
									</span>
									<span className="flex items-center justify-between">
										<p className="text-[0.875rem] text-[#4B5563] ">Email:</p>
										<p className="text-[0.75rem] text-[#020817]  font-medium">
											{studentData?.email}
										</p>
									</span>

									<span className="flex items-center justify-between">
										<p className="text-[0.875rem] text-[#4B5563] ">Phone:</p>
										<p className="text-[0.75rem] text-[#020817]  font-medium">
											{studentData?.phone}
										</p>
									</span>
								</div>
							</div>

							{/* Academic Information */}
							<div className=" md:min-h-[4.75rem] flex flex-col gap-1 min-w-full font-lato md:min-w-[12.958125rem] mt-5">
								<h4 className="font-lato font-medium min-w-full md:min-w-full text-[#020817]">
									Academic Information
								</h4>

								{/* Flex container */}
								<div className="md:min-h-[4.75rem] flex flex-col gap-1 min-w-full font-lato md:min-w-[12.958125rem] ">
									<span className="flex items-center justify-between">
										<p className="text-[0.875rem] text-[#4B5563] ">Program:</p>
										<p className="text-[0.875rem] text-[#020817]  font-medium">
											{studentData?.program}
										</p>
									</span>
									<span className="flex items-center justify-between">
										<p className="text-[0.875rem] text-[#4B5563] ">Year:</p>
										<p className="text-[0.875rem] text-[#020817]  font-medium">
											{studentData?.year}
										</p>
									</span>

									<span className="flex items-center justify-between">
										<p className="text-[0.875rem] text-[#4B5563] ">
											Overall GPA:
										</p>
										<p className="text-[0.75rem] min-w-[1.375rem] min-h-[1.375rem] text-center rounded-full pl-[0.625rem] pr-[0.625rem] pb-[0.125rem] pt-[0.125rem] bg-gray-50 shadow  text-[#020817]  font-medium">
											3.7
										</p>
									</span>
								</div>
							</div>

							{/* Performance*/}
							<div className=" md:min-h-[4.75rem] flex flex-col gap-1 min-w-full font-lato md:min-w-[12.958125rem] mt-5">
								<h4 className="font-lato font-medium min-w-full md:min-w-full text-[#020817]">
									Performance
								</h4>

								{/* Flex container */}
								<div className="md:min-h-[4.75rem] flex flex-col gap-1 min-w-full font-lato md:min-w-[12.958125rem] ">
									<span className="flex items-center justify-between">
										<p className="text-[0.875rem] text-[#4B5563] ">
											Current Grade:
										</p>
										<p className="text-[0.75rem] min-w-[1.375rem] min-h-[1.375rem] text-center rounded-full pl-[0.625rem] pr-[0.625rem] pb-[0.125rem] pt-[0.125rem] bg-gray-50 shadow  text-[#020817]  font-medium">
											A-
										</p>
									</span>
									<span className="flex items-center justify-between">
										<p className="text-[0.875rem] text-[#4B5563] ">
											Attendance:
										</p>
										<p className="text-[0.875rem] text-[#020817] font-medium">
											92%
										</p>
									</span>

									<span className="flex items-center justify-between">
										<p lassName="text-[0.875rem] text-[#4B5563] ">
											Assignments:
										</p>
										<p className="text-[0.875rem] text-[#020817] font-medium">
											8/10 completed
										</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
