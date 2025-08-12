import { Controller, useForm } from "react-hook-form";
import { GoUpload } from "react-icons/go";
import { useUploadAssignment } from "../hook/useUploadAssignment";

export default function AssignmentForm() {
	//values from useForm
	const { handleSubmit, register, reset, formState, control } = useForm();
	//Destructured the formState to get the errors object
	const { errors } = formState;

	//Values from a custom hook
	const { mutate, isPending } = useUploadAssignment();

	const courses = [
		{
			id: 1,
			courseTitle: "Advanced Mathematics (MATH301)",
		},
		{
			id: 2,
			courseTitle: "Computer Science Fundamentals(CS201)",
		},
		{
			id: 3,
			courseTitle: "Data Structures(CS101)",
		},
	];

	const types = [
		{
			id: 1,
			type: "Project",
		},
		{
			id: 2,
			type: "Lab",
		},
		{
			id: 3,
			type: "Essay",
		},
	];

	const statuses = [
		{
			id: 1,
			status: "Completed",
		},
		{
			id: 2,
			status: "Pending",
		},
	];

	//The function responsible for calling the mutation function
	function onSubmit(formData) {
		console.log(formData);
		if (!formData) return;
		mutate(formData);
	}

	//This function is responsible for calling the callback function
	function handleCancel() {
		reset();
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-full md:max-w-[45.875rem] md:min-h-[39.75rem] mb-6 bg-white rounded-md shadow-4xl shadow-white pb-3 flex flex-col items-center sm:min-w-[37.875rem] "
		>
			<div className="pl-[1.5rem] pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] md:min-w-full md:min-h-[3.125rem] font-lato md:pl-[1.5rem] md:pt-[1.5rem] md:pr-[1.5rem] md:pb-[1.5rem] sm:min-w-full">
				<h2 className="font-semibold text-[1.5rem] text-[#020817]">
					Upload Assignment
				</h2>
				<h3 className="text-[0.875rem] text-[#64748B]">
					Create and distribute assignments to students
				</h3>
			</div>

			<div className="md:min-w-full md:pl-[1.5rem] md:pt-[1.5rem] md:pr-[1.5rem] md:pb-[1.5rem] md:min-h-[32.125rem]">
				{/* Assignment Title */}
				<div className="md:min-w-[42.875rem] md:min-h-[10rem] sm:max-w-[34.875rem] font-lato sm:flex sm:flex-col sm:items-center sm:mx-auto ">
					<div className="md:min-w-full md:min-h-[4.5rem] flex flex-col gap-2 sm:min-w-[34.875rem] ">
						<label
							htmlFor="assignmentTitle"
							className="text-[0.875rem] text-[#020817] font-semibold"
						>
							Assignment Title <span className="text-red-500">*</span>
						</label>
						<input
							{...register("assignmentTitle", {
								required: "This field is required",
							})}
							disabled={isPending || formState.isSubmitting}
							placeholder="Enter assignment title"
							type="text"
							name="assignmentTitle"
							id="assignmentTitle"
							className="outline-none hover:ring-1 hover:ring-[#020817] border-[#64748B] sm:max-w-[34.875rem] min-w-full rounded-md md:min-w-full min-h-[2.5rem] pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] pb-[0.75rem] border"
						/>
						<small className="font-lato text-red-500">
							{errors && errors?.assignmentTitle?.message}
						</small>
					</div>

					{/* Select Course */}
					<div className="md:min-w-full md:min-h-[4.5rem] flex flex-col gap-2 pt-3  sm:min-w-[34.875rem] ">
						<label
							htmlFor="selectCourse"
							className="text-[0.875rem] text-[#020817] font-semibold"
						>
							Select Course <span className="text-red-500">*</span>
						</label>
						<select
							{...register("selectCourse", {
								required: "Select a course",
							})}
							name="selectCourse"
							disabled={isPending || formState.isSubmitting}
							id="selectCourse"
							className="outline-none hover:ring-1 hover:ring-[#020817] border-[#64748B] sm:min-w-[34.875rem] min-w-full rounded-md md:min-w-full min-h-[2.5rem] pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] pb-[0.75rem] border"
						>
							<option value="" className="text-xs">
								Select Course
							</option>
							{courses.map((course) => (
								<option
									key={course.id}
									value={course.courseTitle}
									className="text-xs"
								>
									{course.courseTitle}
								</option>
							))}
						</select>
						<small className="font-lato text-red-500">
							{errors?.selectCourse?.message}
						</small>
					</div>
				</div>

				{/* Select Type*/}
				<div className="md:min-w-full md:min-h-[4.5rem] flex flex-col gap-2 pt-3 sm:max-w-[34.875rem] mx-auto">
					<label
						htmlFor="selectType"
						className="text-[0.875rem] text-[#020817] font-semibold"
					>
						Select Type <span className="text-red-500">*</span>
					</label>
					<select
						{...register("selectType", {
							required: "Select a type",
						})}
						name="selectType"
						disabled={isPending || formState.isSubmitting}
						id="selectType"
						className="outline-none hover:ring-1 hover:ring-[#020817] border-[#64748B] sm:min-w-[34.875rem] min-w-full rounded-md md:min-w-full min-h-[2.5rem] pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] pb-[0.75rem] border"
					>
						<option value="" className="text-xs">
							Select type
						</option>
						{types.map((type) => (
							<option key={type.id} value={type.type} className="text-xs">
								{type.type}
							</option>
						))}
					</select>
					<small className="font-lato text-red-500">
						{errors?.selectType?.message}
					</small>
				</div>

				{/* Select Status*/}
				<div className="md:min-w-full md:min-h-[4.5rem] flex flex-col gap-2 pt-3 sm:max-w-[34.875rem] mx-auto">
					<label
						htmlFor="selectStatus"
						className="text-[0.875rem] text-[#020817] font-semibold"
					>
						Select Status <span className="text-red-500">*</span>
					</label>
					<select
						{...register("selectStatus", {
							required: "Select a type",
						})}
						name="selectStatus"
						disabled={isPending || formState.isSubmitting}
						id="selectStatus"
						className="outline-none hover:ring-1 hover:ring-[#020817] border-[#64748B]  min-w-full rounded-md md:min-w-full min-h-[2.5rem] pt-[0.5rem] pl-[0.75rem] pr-[0.75rem] pb-[0.75rem] border"
					>
						<option value="" className="text-xs">
							Select status
						</option>
						{statuses.map((status) => (
							<option key={status.id} value={status.type} className="text-xs">
								{status.type}
							</option>
						))}
					</select>
					<small className="font-lato text-red-500">
						{errors?.selectStatus?.message}
					</small>
				</div>

				{/* Assignment Description */}
				<div className="min-w-full md:min-w-full min-h-[8.125rem] font-lato flex flex-col gap-2 pt-3 sm:max-w-[34.875rem] mx-auto">
					<label htmlFor="description" className="min-w-full font-semibold">
						Assignment Description <span className="text-red-500">*</span>
					</label>
					<textarea
						{...register("description", {
							required: "This field is required",
						})}
						disabled={isPending || formState.isSubmitting}
						id="description"
						placeholder="Describe the assignment requirements, objectives, and instructions..."
						name="description"
						minLength="4"
						maxLength="500"
						className="min-w-full md:min-w-full min-h-[6.125rem] border outline-none hover:ring-1 hover:ring-[#020817] border-[#64748B] pl-[0.75rem] pt-[0.5rem] pr-[0.75rem] pb-[0.5rem] rounded-md sm:max-w-[34.875rem] mx-auto"
					></textarea>
					<small className="font-lato text-red-500">
						{errors && errors?.description?.message}
					</small>
				</div>

				{/* Due date and Assignment File (optional) */}
				<div className="min-w-full md:min-w-full flex gap-2 mt-[1.5rem] min-h-[7rem] sm:max-w-[34.875rem] mx-auto sm:flex sm:flex-col">
					{/* Due date */}
					<div className="min-w-full md:min-w-[20.9375rem] min-h-full flex flex-col gap-2 ">
						<label
							htmlFor="dueDate"
							className="text-[0.875rem] text-[#020817] font-semibold"
						>
							Due Date <span className="text-red-500">*</span>
						</label>
						<input
							{...register("dueDate", {
								required: "This field is required",
							})}
							disabled={isPending || formState.isSubmitting}
							type="date"
							name="dueDate"
							id="dueDate"
							className="min-w-[20.9375rem] md:min-w-[20.9375rem] pt-[0.5rem] pl-[0.75rem] pr-[0.5rem] pb-[0.5rem] min-h-[2.5rem] rounded-md outline-none hover:ring-1 hover:ring-[#020817] border-[#64748B] border "
						/>
						<small className="font-lato text-red-500">
							{errors && errors?.dueDate?.message}
						</small>
					</div>

					{/* Assignment file */}
					<div className="min-w-full md:min-w-[20.9375rem] min-h-full flex flex-col gap-2 sm:min-w-[34.875rem] ">
						<label
							htmlFor="optionalFile"
							className="text-[0.875rem] font-lato text-[#020817] font-semibold"
						>
							Assignment File <span>Optional</span>
						</label>
						<div className="min-w-[19.3125rem] flex gap-1 sm:min-w-[34.875rem]">
							<Controller
								name="optionalFile"
								control={control}
								render={({
									field: { onChange, onBlur, name, ref },
									fieldState: { error },
								}) => (
									<div>
										<input
											type="file"
											id="optionalFile"
											disabled={isPending || formState.isSubmitting}
											accept=".pdf,.doc,.docx"
											onChange={(e) => {
												// Handle file selection
												const file = e.target.files?.[0];
												onChange(file); //updating the input field to the RHF
											}}
											onBlur={onBlur}
											name={name}
											ref={ref} //connect to the DOM input to the RHF
											className="min-w-[10rem] placeholder sm:min-w-[34.875rem] md:min-w-[10rem] min-h-[2.5rem] text-[0.75rem] font-semibold pt-[0.5rem] pl-[0.75rem] pr-[0.5rem] pb-[0.5rem] rounded-md outline-none hover:ring-1 hover:ring-[#020817] border-[#64748B] text-[#020817] font-lato border"
										/>
										{error && (
											<small className="text-[0.875rem] font-lato mt-1 text-red-500 block">
												{error.message}
											</small>
										)}
									</div>
								)}
							/>
							{/* <button type="button" className="md:min-w-[10rem] min-w-full border rounded-md"></button> */}
						</div>
						<small className="font-lato font-medium text-[#64748B]">
							Supported format: PDF, DOC, DOCS, TXT, JPG, PNG (Max 10MB)
						</small>
					</div>
				</div>
			</div>

			<div className="min-w-full md:min-w-[42.875rem] mt-5 min-h-[2.5rem] pl-[0.75rem] pt-[0.5rem] pr-[0.75rem] pb-[0.5rem] flex items-center gap-4 justify-end ">
				<button
					onClick={handleCancel}
					type="button"
					className="min-h-[2.5rem] w-[7rem] pl-[1rem] pt-[0.5rem] pr-[1rem] pb-[0.5rem] text-[#020817] font-medium whitespace-nowrap rounded-md border flex items-center justify-center "
				>
					Clear Form
				</button>
				<button
					type="submit"
					disabled={isPending || formState.isSubmitting}
					className="flex items-center whitespace-nowrap gap-3 w-[15rem] min-h-[2.5rem] font-medium bg-[#020817] text-white pl-[1rem] pt-[0.5rem] pr-[1rem] pb-[0.5rem] rounded-md border"
				>
					<span>
						<GoUpload />
					</span>
					{isPending ? "Uploading Assignment..." : "Upload Assignment"}
				</button>
			</div>
		</form>
	);
}
