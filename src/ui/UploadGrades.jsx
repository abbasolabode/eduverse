/* eslint-disable no-unused-vars */
import { GoUpload } from "react-icons/go";
import { useBiodata } from "../hook/useBiodata";
import { useForm } from "react-hook-form";
import { useUploadGrades } from "../hook/useUploadGrades";


const selectCourses = [
	{
		id: 1,
		title: "Advanced Mathematics (Math301)",
	},
	{
		id: 2,
		title: "Computer Science Fundamentals (CS201)",
	},
	{
		id: 3,
		title: "Data Structure (CS101)",
	},
];

const selectStudents = [
	{
		id: 1,
		title: "John Smith",
	},
	{
		id: 2,
		title: "Sarah Johnson",
	},
	{
		id: 3,
		title: "Mike Chan",
	},
	{
		id: 4,
		title: "Emma Davis",
	},
	{
		id: 5,
		title: "Abbas Olabode",
	},
];




const grades = [
	{
		id: 1,
		title: "A+",
	},
	{
		id: 2,
		title: "A",
	},
	{
		id: 3,
		title: "A-",
	},
	{
		id: 4,
		title: "B+",
	},
	{
		id: 5,
		title: "B",
	},

	{
		id: 6,
		title: "B-",
	},
	{
		id: 7,
		title: "C+",
	},
	{
		id: 8,
		title: "C",
	},
	{
		id: 9,
		title: "C-",
	},
	{
		id: 10,
		title: "D",
	},
	{
		id: 11,
		title: "F",
	},

];


export default function UploadGrades() {
	const {handleSubmit, register, reset, formState} = useForm();
	const {errors} = formState;
	console.log(errors);
	const {mutate, isPending} = useUploadGrades()

	const onSubmit = (formData) => {
		if (!formData) return;
		mutate(formData)
		console.log(formData)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="min-w-full md:min-w-[44.875rem] md:min-h-[25.625rem]"
		>
			<div className="min-h-full md:min-h-[29.625rem] md:min-w-full min-w-full rounded-lg bg-white shadow-lg md:pl-[1.5rem] md:pr-[1.5rem] md:pt-[1.5rem] md:pb-[1.5rem]">
				<div className="md:min-w-[44.875rem] min-w-full min-h-[6.125rem] lato flex flex-col ">
					<h3 className="min-w-full md:Min-w-[41.875rem] min-h-[1.5rem] font-semibold text-[#020817] text-[1.5rem] ">
						Upload Grades
					</h3>
					<p className="text-[#64748B] text-[0.875rem]">
						Submit grades for your students
					</p>
				</div>

				{/* Input fields */}
				<div className="md:min-w-[44.875rem] min-w-full md:min-h-[21rem] flex flex-col gap-6">
					<div className="md:min-w-[44.875rem] md:min-h-[4.5rem] min-w-full flex items-center gap-3">
						{/* Select Course */}
						<div className="flex flex-col justify-center gap-2 md:min-w-[20.4375rem] md:min-h-[4.5rem]">
							<label
								htmlFor="selectCourse"
								className="text-[0.875rem] font-medium text-[#020817]"
							>
								Select Course
							</label>
							<select
								{...register("selectCourse", {
									required: "Please select a course",
								})}
								className="min-w-full md:min-w-[20.4375rem] border border-gray-50 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 min-h-[2.5rem] pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] pb-[0.5rem]"
								id="selectCourse"
							>
								<option value="" className="text-xs">
									Select a course
								</option>
								{selectCourses.map((course) => (
									<option key={course.id} value={course.title} className="text-xs">
										{course.title}
									</option>
								))}
							</select>
							{errors?.selectCourse && (
								<small className="text-red-500 font-medium font-lato">
									{errors.selectCourse.message}
								</small>
							)}
						</div>

						{/* Select Student */}
						<div className="flex flex-col justify-center gap-2 md:min-w-[20.4375rem] md:min-h-[4.5rem]">
							<label
								htmlFor="selectStudent"
								className="text-[0.875rem] font-medium text-[#020817]"
							>
								Select Student
							</label>
							<select
								{...register("selectStudent", {
									required: "Please select a student",
								})}
								id="selectStudent"
								className="min-w-full md:min-w-[20.4375rem] border border-gray-50 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500  min-h-[2.5rem] pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] pb-[0.5rem]"
							>
								<option value="" className="text-xs">
									Select a student
								</option>
								{selectStudents.map((student) => (
									<option
										key={student.id}
										value={student.title}
										className="text-xs"
									>
										{student.title}
									</option>
								))}
							</select>
							{errors?.selectStudent && (
								<small className="text-red-500 font-medium font-lato">
									{errors.selectStudent.message}
								</small>
							)}
						</div>
					</div>

					{/* Grade */}
					<div className="flex flex-col justify-center gap-2 md:min-w-[41.875rem] md:min-h-[4.5rem]">
						<label
							htmlFor="selectGrade"
							className="text-[0.875rem] font-medium text-[#020817]"
						>
							Select grade
						</label>
						<select
							{...register("selectGrade", {
								required: "Please select a grade",
							})}
							id="selectGrade"
							className="w-full md:w-[41.875rem] min-h-[2.5rem] border border-gray-100 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] pb-[0.5rem]"
						>
							<option value="" className="text-xs">
								Select grade
							</option>
							{grades.map((grade) => (
								<option
									key={grade.id}
									value={grade.title}
									className="text-xs py-1"
								>
									{grade.title}
								</option>
							))}
						</select>
						{errors?.selectGrade && (
							<small className="text-red-500 font-medium font-lato">
								{errors.selectGrade.message}
							</small>
						)}
					</div>

					<div className="flex flex-col gap-2 justify-center">
						<label
							htmlFor="optionalFeedBack"
							className=" text-[0.875rem] font-medium text-[#020817]"
						>
							Feedback (Optional)
						</label>
						<textarea
							id="optionalFeedBack"
							className="w-full md:w-[41.875rem] md:min-h-[3.875rem] border rounded-md border-gray-100 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 min-h-[2.5rem] pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] pb-[0.5rem]"
							{...register("optionalFeedBack", {
								required: "This field is required",
							})}
							minLength="4"
							disabled=""
							maxLength="300"
							placeholder="Enter feedback for the student..."
						></textarea>
						<small className="text-red-500 font-medium font-lato">
							{errors && errors?.optionalFeedBack?.message}
						</small>
					</div>
				</div>

				<button className="border mt-7 flex items-center gap-2 md:w-[41.875rem] min-h-[2.5rem] bg-[#0F172A]  text-white rounded-md justify-center pt-[0.5rem] pb-[0.5rem]  pl-[1rem] pr-[1rem] font-lato font-semibold">
					<span className="w-[]">
						<GoUpload />
					</span>
					{isPending ? "Submitting Grades..." : "Submit Grades" }
					
				</button>
			</div>
		</form>
	);
}
