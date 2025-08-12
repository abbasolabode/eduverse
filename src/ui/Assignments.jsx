/* eslint-disable no-unused-vars */
import { formatDate } from "../helper";
import { useGetAssignment } from "../hook/useGetAssignment";
import Spinner from "./Spinner";

export default function Assignments() {

	const {data:  assignments = [], isLoading} = useGetAssignment()
	console.log(assignments);


	if (isLoading)
		return (
			<Spinner loadingAssignment="Please wait while updating your assignments" />
		);

		
	return (
		<div className="min-w-full md:min-w-[44.875rem]  flex flex-col gap-6 bg-indigo-100 items-center justify-center pl-6 pr-6 pt-8 pb-8 mt-5">
			{assignments?.map((assignment) => (
				<div
					key={assignment.id}
					className="md:min-w-[41.875rem] rounded-lg shadow-lg  bg-white"
				>
					<div className=" md:min-w-[41.875rem] md:min-h-[6.125rem] md:pl-6 md:pr-6 md:pt-6 md:pb-6  justify-between items-center p-4">
						<div className="flex items-center justify-between p-4 gap-2">
							<span>
								<h3 className="text-[1.5rem] text-[#020817] md:min-h-[1.4rem] font-lato font-semibold">
									{assignment?.selectCourse}
								</h3>
								<p className="text-[#64748B]">{assignment?.assignmentTitle}</p>
							</span>

							<p
								className={`w-[8rem] text-center min-h-[1.2rem] rounded-2xl text-[0.875rem] shadow p-0.4 bg-[#111827] text-white font-lato font-medium ${
									assignment?.status === "pending"
										? "bg-gray-300"
										: "bg-[#020817]"
								}`}
							>
								{assignment?.selectStatus}
							</p>
						</div>

						<div className="flex justify-between gap-3 p-4 font-lato">
							<span>
								<h3>Due Date:</h3>
								<p className="text-[#111827] font-lato font-medium">
									{formatDate(assignment?.created_at)}
								</p>
							</span>

							<span className="">
								<h3>Description:</h3>
								<p className="text-[#111827] font-lato font-medium  whitespace-normal">
									{assignment?.description}
								</p>
							</span>

							<span>
								<h3>Type:</h3>
								<p className="text-[#111827] font-lato font-bold">
									{assignment?.selectType}
								</p>
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
