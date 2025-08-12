/* eslint-disable no-unused-vars */
import { useBiodata } from "../hook/useBiodata";
import { useStudentList } from "../hook/useStudentList";

export default function StudentsList() {
	const { data: studentList = [] } = useStudentList();

	const { biodata } = useBiodata();

	return (
		<div className="min-h-[38.5rem] min-w-full md:min-w-[45rem] md:pl-[1.5rem] bg-white rounded-md shadow-md md:pr-[1.5rem] md:pt-[2rem] md:pb-[2rem] sm:pl-[1.5rem] sm:pt-[1.5rem] sm:pr-[1.5rem] sm:pb-[1.5rem]">
			<div className="min-w-full md:min-w-full flex flex-col gap-5">
				<div className="min-w-full font-lato flex flex-col gap-1 md:min-w-[41.875rem] md:min-h-[1.5rem] ">
					<h3 className="font-semibold text-2xl text-[#020817]">
						Student List
					</h3>
					<p className="text-sm text-[#64748B] font-medium">
						View and manage your students
					</p>
				</div>

				{/* Map item */}
				{/* List */}
				<div className="min-w-full flex flex-col gap-8 md:min-w-[41.875rem] bg-gray-50">
					{/* Flex container */}
					{biodata?.map((list) => (
						<div
							key={list.id}
							className="flex items-center justify-between min-w-full md:min-w-full"
						>
							{/* Right container */}
							<div className="font-lato">
								<span className="flex flex-col gap-0.5 ">
									<p className="text-[#020817] font-semibold ">
										{list?.fullName}
									</p>
									<p className="text-sm text-[#4B5563] font-medium">
										{list?.email}
									</p>
									<p className="text-sm text-[#4B5563] font-medium">
										{list?.program} - {list?.year}
									</p>
								</span>
							</div>

							{/*Left Container  */}
							<div className="min-w-[14rem] min-h-[2.5rem] gap-1 font-lato flex items-center">
								<span className="shadow-sm text-xs  bg-gray-50 flex items-center font-semibold min-w-[6rem] md:min-w-[6rem] min-h-[1rem] pl-[0.625rem] pr-[0.625rem] pt-[0.125rem]  pb-[0.125rem] rounded-xl">
									Current Grade: {list?.studentGrade || "Not yet graded"}
								</span>
								<span className=" min-w-[2.7998125rem] font-semibold text-xs pl-[0.625rem] shadow-sm pr-[0.625rem] bg-gray-50 rounded-2xl pt-[0.125rem] pb-[0.125rem]">
									{list?.studentGp || "Not yet graded"}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
