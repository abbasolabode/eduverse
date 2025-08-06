import { useMyCourses } from "../hook/useMyCourses";
import Spinner from "./Spinner";

export default function MyCourses() {
	const { data, isLoading } = useMyCourses();
	console.log(data);

	if(isLoading) return <Spinner myCourseMsg="Please wait while updating your dashboard" />

	return (
		<div className="min-w-full md:min-w-[45rem] md:min-h-[31.5rem] md:grid md:grid-cols-2 gap-3 ">
			{data?.map((item) => (
				<div
					key={item?.id}
					className="w-full bg-white md:max-w-[21.625rem] md:min-h-[6.375rem] rounded-md shadow-md hover:shadow-md"
				>
					<div className="w-full md:min-w-[18.625rem] min-h-[3.375rem] pl-[1.5rem] pr-[1.5rem] pt-[1.5rem] pb-[1.5rem] ">
						<h3 className="font-lato font-semibold text-[#020817] ">
							{item?.course}
						</h3>
						<p className="text-[#64748B] font-lato font-semibold ">
							{item.courseCode}{" "}
						</p>
					</div>

					{/*  */}
					<div className="w-full min-w-full md:min-h-[8.5rem] pl-[1.5rem] pr-[1.5rem] pt-[1.5rem] pb-[1.5rem] flex flex-col gap-3">
						<span className="flex items-center justify-between font-lato ">
							<p className="text-[#64748B] ">Total Students</p>
							<p className="w-[2rem] min-h-[2rem] flex justify-center items-center text-[0.75rem] pl-1 pr-1 pt-1 pb-1 font-semibold rounded-full bg-gray-300 text-center">
								{item?.totalStudents}
							</p>
						</span>
						<span className="flex items-center justify-between font-lato ">
							<p className="text-[#64748B] ">Present Today</p>
							<p className="w-[2rem] min-h-[2rem] text-[0.75rem] pl-1 pr-1 pt-1 pb-1 flex items-center justify-center  font-semibold rounded-full bg-gray-300 text-center">
								{item?.presentToday}
							</p>
						</span>
						<span className="flex items-center justify-between font-lato ">
							<p className="text-[#64748B] ">Attendance Rate</p>
							<p className="w-[2rem] min-h-[2rem] text-[0.75rem] flex items-center font-semibold rounded-full pl-1 pr-1 pt-1 pb-1 bg-gray-300 text-center">
								{item?.attendanceRate}
							</p>
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
