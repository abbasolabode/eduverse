/* eslint-disable no-unused-vars */
import { AiOutlineUpload } from "react-icons/ai";
import { FaFile } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import { useForm, Controller } from "react-hook-form";
import { useRef, useState } from "react";
import { useUpdateBiodataForm } from "../hook/useUpdateBiodataForm";

export default function BiodataForm() {
	const fileInputRef = useRef(null);
	const [preview, setPreview] = useState(""); //Responsible for storing the imageURL generated

	const navigate = useNavigate(); // This hook is used to navigate between routes in the application
	const { handleSubmit, register, reset, formState, control } = useForm();
	const { errors } = formState;

	const { mutate, isPending } = useUpdateBiodataForm();

	const genderOptions = [
		{
			id: 1,
			value: "Male",
		},

		{
			id: 2,
			value: "Female",
		},
		{
			id: 3,
			value: "Other",
		},

		{
			id: 4,
			value: "Preferred not say",
		},
	];

	const academicPrograms = [
		{
			id: 1,
			value: "Computer Science",
		},

		{
			id: 2,
			value: "Engineering",
		},
		{
			id: 3,
			value: "Business Administration",
		},

		{
			id: 4,
			value: "Mathematics",
		},

		{
			id: 5,
			value: "Physics",
		},
		{
			id: 6,
			value: "Other",
		},
	];

	const levels = [
		{
			id: 1,
			level: "Undergraduate",
		},

		{
			id: 2,
			level: "Graduate",
		},
		{
			id: 3,
			level: "Postgraduate",
		},
	];

	const years = [
		{
			id: 1,
			year: "1st Year",
		},

		{
			id: 2,
			year: "2th Year",
		},
		{
			id: 3,
			year: "3rd Year",
		},

		{
			id: 4,
			year: "4th Year",
		},

		{
			id: 5,
			year: "5th Year",
		},
	];

	const currentSemester = [
		{
			id: 1,
			semester: "Fall 2024",
		},

		{
			id: 2,
			semester: "Spring 2025",
		},
		{
			id: 3,
			semester: "Summer 2024",
		},
	];

	// Here you can handle the form submission, e.g., send data to an API
	function onSubmit(formData) {
		if(!formData) return;
		  //setPreview(null);
		  const file = fileInputRef.current?.files?.[0];// Access the file from the file input
		  console.log(file)
		  mutate({...formData, photo: file, }); // Call the mutation function to update the biodata form
	}

	return (
		<div className=" min-h-screen md:min-w-[48rem] ">
			<div className="flex items-center md:min-h-[4.5rem] justify-between md:pl-[1.5rem] md:pr-[1.5rem] shadow-sm bg-white">
				<span className="flex items-center gap-2">
					<FaGraduationCap className="w-[2rem] min-h-[2rem] text-indigo-500" />
					<h2 className="md:min-w-[15.45rem] text-[1.5rem] font-lato font-bold text-[#11827]">
						Student Biodata Form
					</h2>
				</span>

				<button
					onClick={() => navigate(-1)}
					className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 shadow-md"
				>
					<span>
						<FaArrowLeft />
					</span>
					Back to Dashboard
				</button>
			</div>

			{/* Form fields */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4 min-w-full md:min-w-[45rem] md:pl-[1.5rem] md:pr-[1.5rem] md:pt-[2rem] md:pb-[2rem]"
			>
				{/* Personal information */}
				<div className="min-w-full md:min-w-[44.875rem] md:min-h-[44rem] flex flex-col  md:pl-[1.5rem] md:pr-[1.5rem] shadow-md bg-white rounded-md">
					<div className="min-w-full md:min-w-full flex items-center mb-4 md:pt-[1.5rem] md:pr-[1.5rem] ">
						<span className="flex flex-col gap-1">
							<h3 className=" font-semibold text-[#020817] text-[1.5rem]">
								Personal Information
							</h3>
							<p className="text-[#64748B] font-lato text-[0.875rem] ">
								Please provide your personal details
							</p>
						</span>
					</div>

					<div className="min-w-full md:min-w-full flex flex-col gap-4 ">
						{/* Flex container for first Name and studentID*/}
						<div className="min-w-full md:min-w-full flex gap-2">
							{/* First name */}
							<div className="min-w-full md:min-w-[20.4375rem] md:min-h-[4.5rem] flex flex-col gap-1 ">
								<label
									htmlFor="fullName"
									className=" text-[#020817] w-[6rem] font-lato font-semibold flex gap-1"
								>
									Full Name
									<span className="text-red-500 font-semibold">*</span>
								</label>
								<input
									{...register("fullName", {
										required: "This field is required",
									})}
									type="text"
									id="fullName"
									name="fullName"
									disabled={formState.isSubmitting || isPending}
									placeholder="Enter your full name"
									className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								/>

								<small>
									<p className="text-red-500 font-lato ">
										{errors && errors?.fullName?.message}
									</p>
								</small>
							</div>

							{/* student ID */}
							<div className="min-w-full md:min-w-[20.4375rem] md:min-h-[4.5rem] flex flex-col gap-1 ">
								<label
									className=" text-[#020817] w-[6rem] font-lato font-semibold flex gap-1"
									htmlFor="studentId"
								>
									Student ID
									<span className="text-red-500 font-semibold">*</span>
								</label>
								<input
									{...register("studentId", {
										required: "This field is required",
									})}
									type="text"
									id="studentId"
									disabled={formState.isSubmitting || isPending}
									name="studentId"
									placeholder="Enter your student ID"
									className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								/>

								<small>
									<p className="text-red-500 font-lato">
										{errors && errors?.studentId?.message}
									</p>
								</small>
							</div>
						</div>

						{/*flex container for Email && phone number */}
						<div className="min-w-full md:min-w-full flex gap-2">
							<div className="min-w-full md:min-w-[20.4375rem] md:min-h-[4.5rem] flex flex-col gap-1 ">
								<label
									className=" text-[#020817] w-[6rem] font-lato font-semibold flex gap-1"
									htmlFor="email"
								>
									Email
									<span className="text-red-500 font-semibold">*</span>
								</label>
								<input
									{...register("email", {
										required: "This field is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Invalid email address",
										},
									})}
									type="email"
									id="email"
									disabled={formState.isSubmitting || isPending}
									name="email"
									placeholder="Enter your email address"
									className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								/>
								<small>
									<p className="text-red-500 font-lato">
										{errors && errors?.email?.message}
									</p>
								</small>
							</div>

							<div className="min-w-full md:min-w-[20.4375rem] md:min-h-[4.5rem] flex flex-col gap-1 ">
								<label
									htmlFor="phone"
									className=" text-[#020817] w-[6rem] font-lato font-semibold flex gap-1"
								>
									Phone
									<span className="text-red-500 font-semibold">*</span>
								</label>
								<input
									{...register("phone", {
										required: "This field is required",
									})}
									type="phone"
									id="phone"
									name="phone"
									disabled={formState.isSubmitting || isPending}
									placeholder="Enter your phone number"
									className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								/>
								<small>
									<span className="text-red-500 font-semibold">
										{errors && errors?.phone?.message}
									</span>
								</small>
							</div>
						</div>

						{/* Container for Date of birth and Gender */}
						<div className="min-w-full md:min-w-full flex items-center gap-2">
							<div className="min-w-full md:min-w-[20.4375rem] md:min-h-[4.5rem] flex flex-col gap-1 ">
								<label
									htmlFor="dob"
									className=" text-[#020817] w-[8rem] font-lato font-semibold flex gap-1"
								>
									Date of Birth
									<span className="text-red-500 font-semibold">*</span>
								</label>
								<input
									{...register("dob", {
										required: "This field is required",
									})}
									className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
									type="date"
									id="dob"
									name="dob"
									disabled={formState.isSubmitting || isPending}
								/>
								<small>
									<p className="text-red-500">
										{errors && errors?.dob?.message}
									</p>
								</small>
							</div>

							<div>
								<label
									htmlFor="gender"
									className=" text-[#020817] w-[6rem] font-lato font-semibold flex gap-1"
								>
									Gender
									<span className="text-red-500 font-semibold">*</span>
								</label>
								<select
									{...register("gender", {
										required: "This field is required",
									})}
									defaultValue=""
									disabled={formState.isSubmitting || isPending}
									className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								>
									<option value="" disabled>
										Select gender
									</option>
									{genderOptions.map((option) => (
										<option key={option.id} value={option.value}>
											{option.value}
										</option>
									))}
								</select>
								<small>
									<p className="text-red-500">
										{errors && errors?.gender?.message}
									</p>
								</small>
							</div>
						</div>

						{/* Nationality */}
						<div className="min-w-full md:min-w-full flex items-center gap-2">
							<div>
								<label
									className=" text-[#020817] w-[6rem] font-lato font-semibold flex gap-1"
									htmlFor="nationality"
								>
									Nationality
									<span className="text-red-500 font-semibold">*</span>
								</label>
								<input
									{...register("nationality", {
										required: "This field is required",
									})}
									type="text"
									id="nationality"
									name="nationality"
									disabled={formState.isSubmitting || isPending}
									placeholder="Enter your nationality"
									className="min-w-full md:min-w-[41.4rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								/>
								<small>
									<p className="text-red-500">
										{errors && errors?.nationality?.message}
									</p>
								</small>
							</div>
						</div>
					</div>

					{/* Profile photo */}
					<div className="min-w-full md:min-w-full md:min-h-[6rem] flex items-center gap-3 pt-4  ">
						<div>
							<p className="text-[#020817] pl-3 font-lato text-[0.875rem] font-semibold ">
								Profile Photo
							</p>
							<div className="relative w-[5.75rem] min-h-[5.75rem] flex flex-col gap-1 rounded-full bg-indigo-200">
								{preview && (
									<img
										className="w-[5.75rem] min-h-[5.75rem] rounded-full bg-indigo-200"
										src={preview}
										alt={preview}
									/>
								)}
								<p className="absolute inset-0 flex text-white items-center font-lato text-[1.5rem] justify-center">
									{preview ? "" : "PH"}
								</p>
							</div>
						</div>

						<div className="min-h-[10rem] w-[10.11rem] pt-10 flex flex-col justify-center items-center">
							<Controller
								name="photo"
								disabled={formState.isSubmitting || isPending}
								control={control} // Register the file input with react-hook-form
								rules={{ required: "Profile photo is required" }} // Validation rule for the file input
								render={({
									field: { onChange, ref }, // Access the onChange function and ref for the file input
									fieldState: { error }, // Access the error state for the file input
								}) => (
									<>
										<input
											type="file"
											accept="image/*" // Accept only image files
											ref={(e) => {
												ref(e); // Set the ref for the file input  // This is necessary for react-hook-form to manage the input
												fileInputRef.current = e; // Store the file input reference in the ref // This allows us to access the file input later // This is necessary for react-hook-form to manage the input
											}}
											onChange={(e) => {
												const file = e.target.files[0]; //The file input returns an array of files, we access the first file using [0]
												//If file exists, it creates a temporary URL for the file using URL.createObjectURL(file) and sets it to the preview state
												if (file) {
													const imageUrl = URL.createObjectURL(file); // This creates a temporary URL for the file
													setPreview(imageUrl);
													onChange(file); // pass the file to RHF // This will update the form state with the selected file //// This is react-hook-form's onChange // // This comes from the Controller's render props
												}
											}}
											className="hidden"
										/>
									</>
								)}
							/>

							<div className="flex flex-col w-[10.11rem] min-h-[4.125rem] ">
								<button
									onClick={() => fileInputRef.current?.click()}
									aria-label="Choose photo"
									className="flex gap-1 items-center justify-center  min-h-[2.125rem] text-indigo-500 bg-blue-100 font-semibold rounded-sm"
								>
									<span>
										<AiOutlineUpload className="w-[1rem] min-h-[1rem]" />
									</span>
									Upload Photo
								</button>
								<small className="font-lato text-[#64748B] whitespace-nowrap">
									JPG, PNG or GIF (max 5MB)
								</small>
								<small>
									<p className="text-red-500">
										{errors && errors?.profilePhoto?.message}
									</p>
								</small>
							</div>
						</div>
					</div>
				</div>

				{/* Academic Information */}
				<div className="min-w-full md:min-w-[44.875rem] md:min-h-[20rem] flex flex-col  md:pl-[1.5rem] md:pr-[1.5rem] shadow-md bg-white rounded-md mt-4">
					<div className="min-w-full md:min-w-full flex flex-col  mb-4 md:pt-[1.5rem] md:pr-[1.5rem]">
						<h3 className=" font-semibold text-[#020817] text-[1.5rem]">
							Academic Information
						</h3>
						<p className="text-[#64748B] font-lato text-[0.875rem] ">
							Please provide your academic details
						</p>
					</div>

					{/* Academic input fields */}
					<div className="min-w-full md:min-w-full flex gap-4">
						<div>
							<label
								htmlFor="dob"
								className=" text-[#020817] w-[6rem] whitespace-nowrap  font-lato font-semibold flex gap-1 "
							>
								program
								<span className="text-red-500 font-semibold">*</span>
							</label>
							<select
								id="program"
								defaultValue=""
								disabled={formState.isSubmitting || isPending}
								{...register("program", { required: "This field is re" })}
								className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							>
								<option value="" disabled className="text-xs py-1 font-lato ">
									Select a program
								</option>
								{academicPrograms.map((program) => (
									<option
										key={program.id}
										value={program.value}
										className="text-xs py-1 font-lato"
									>
										{program.value}
									</option>
								))}
							</select>
							<small>
								<p className="text-red-500 pb-2 pl-2 pt-1">
									{errors && errors?.program?.message}
								</p>
							</small>
						</div>

						{/* Level */}
						<div>
							<label
								htmlFor="level"
								className=" text-[#020817] w-[8rem] whitespace-nowrap  font-lato font-semibold flex gap-1 "
							>
								Level
								<span className="text-red-500 font-semibold">*</span>
							</label>

							<select
								{...register("level", {
									required: "This field is required",
								})}
								id="level"
								disabled={formState.isSubmitting || isPending}
								defaultValue=""
								className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							>
								<option value="" disabled className="text-xs py-1 font-lato ">
									Select your level
								</option>
								{levels.map((level) => (
									<option
										key={level.id}
										value={level.level}
										className="text-xs py-1 font-lato"
									>
										{level.level}
									</option>
								))}
							</select>
							<small>
								<p className="text-red-500 pl-2 pb-3 pt-1">
									{errors && errors?.level?.message}
								</p>
							</small>
						</div>
					</div>

					{/* Input field for years and current semester */}
					<div className="min-w-full md:min-w-full flex gap-4">
						{/* Year Select Input */}
						<div>
							<label
								htmlFor="year"
								className="text-[#020817] w-[8rem] whitespace-nowrap font-lato font-semibold flex gap-1"
							>
								Year <span className="text-red-500 font-semibold">*</span>
							</label>
							<select
								{...register("year", {
									required: "This field is required",
								})}
								id="year"
								disabled={formState.isSubmitting || isPending}
								defaultValue=""
								className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							>
								<option value="" disabled className="text-xs py-1 font-lato">
									Select a year
								</option>
								{years.map((year) => (
									<option
										key={year.id}
										value={year.year}
										className="text-xs py-1 font-lato"
									>
										{year.year}
									</option>
								))}
							</select>
							<small>
								<p className="text-red-500 pt-1 pl-2">
									{errors && errors?.year?.message}
								</p>
							</small>
						</div>

						{/* Semester Select Input */}
						<div>
							<label
								htmlFor="semester"
								className="text-[#020817] w-[8rem] whitespace-nowrap font-lato font-semibold flex gap-1"
							>
								Semester <span className="text-red-500 font-semibold">*</span>
							</label>

							<select
								{...register("semester", {
									required: "This field is required",
									validate: (value) => value !== "" || "This field is required",
								})}
								id="semester"
								disabled={formState.isSubmitting || isPending}
								defaultValue=""
								className="min-w-full md:min-w-[20.4375rem] md:min-h-[2.5rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							>
								<option value="" disabled className="text-xs py-1 font-lato">
									Select a semester
								</option>
								{currentSemester.map((semester) => (
									<option
										key={semester.id}
										value={semester.semester}
										className="text-xs py-1 font-lato"
									>
										{semester.semester}
									</option>
								))}
							</select>

							{/* Simplified error display */}
							{errors.semester && (
								<small className="text-red-500 block mt-1 pl-2">
									{errors.semester.message}
								</small>
							)}
						</div>
					</div>
				</div>

				{/* Contact Information */}
				<div className="min-w-full md:min-w-[44.875rem] md:min-h-[39rem] flex flex-col  md:pl-[1.5rem] md:pr-[1.5rem] shadow-md bg-white rounded-md mt-4">
					<div className="min-w-full md:min-w-full flex flex-col  mb-4 md:pt-[1.5rem] md:pr-[1.5rem]">
						<h3 className=" font-semibold text-[#020817] text-[1.5rem]">
							Contact Information
						</h3>
						<p className="text-[#64748B] font-lato text-[0.875rem] ">
							Please provide your contact details
						</p>
					</div>

					<div className="min-w-full md:min-w-full flex gap-4">
						<div className="min-w-full md:min-w-full flex flex-col gap-1">
							<label
								htmlFor="permanentAddress"
								className=" text-[#020817] w-[6rem] whitespace-nowrap  font-lato font-semibold flex gap-1 "
							>
								Permanent address
								<span className="text-red-500 pl-1 font-bold">*</span>
							</label>
							<textarea
								id="permanentAddress"
								{...register("permanentAddress", {
									required: "This field is required",
								})}
								minLength="4"
								disabled={formState.isSubmitting || isPending}
								maxLength="300"
								placeholder="Enter your permanent address"
								className="min-w-full md:min-w-[41.4rem] md:min-h-[6rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							></textarea>
							<small>
								<p className="text-red-500 pl-2 whitespace-nowrap">
									{errors && errors?.permanentAddress?.message}
								</p>
							</small>
						</div>
					</div>

					{/* Current Address */}
					<div className="min-w-full md:min-w-full flex gap-4 pt-5">
						<div className="min-w-full md:min-w-full flex flex-col gap-1">
							<label
								className=" text-[#020817] w-[6rem] whitespace-nowrap  font-lato font-semibold flex gap-1 "
								htmlFor="currentAddress"
							>
								Current address
								<span className="text-red-500 pl-1 font-bold">*</span>
							</label>
							<textarea
								id="currentAddress"
								{...register("currentAddress", {
									required: "This field is required",
								})}
								minLength="4"
								disabled={formState.isSubmitting || isPending}
								maxLength="300"
								placeholder="Enter your current address"
								className="min-w-full md:min-w-[41.4rem] md:min-h-[6rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							></textarea>
							<small>
								<p className="text-red-500 pl-2">
									{errors && errors?.currentAddress?.message}
								</p>
							</small>
						</div>
					</div>

					{/* Emergency Contact */}
					<div className="min-w-full md:min-w-full flex gap-4 pt-5">
						<div className="min-w-full md:min-w-full flex flex-col gap-1">
							<label
								className=" text-[#020817] w-[6rem] whitespace-nowrap  font-lato font-semibold flex gap-1 "
								htmlFor="emergencyContact"
							>
								Emergency Contact
								<span className="text-red-500 pl-1 font-bold">*</span>
							</label>
							<textarea
								id="emergencyContact"
								{...register("emergencyContact", {
									required: "This field is required",
								})}
								minLength="4"
								disabled={formState.isSubmitting || isPending}
								maxLength="300"
								placeholder="Name and phone number of emergency contact"
								className="min-w-full md:min-w-[41.4rem] md:min-h-[6rem] pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[0.5rem] border rounded-md placeholder:text-[#64748B] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							></textarea>

							<small>
								<p className="text-red-500 pl-2">
									{errors && errors?.emergencyContact?.message}
								</p>
							</small>
						</div>
					</div>
				</div>

				{/* Button */}
				<div className="flex justify-center min-h-[15rem] items-center  rounded-md mt-4">
					<button
						disabled={formState.isSubmitting || isPending}
						className="border min-h-[3rem] min-w-[14rem] flex justify-center gap-1 items-center rounded-md  shadow-sm font-semibold text-white bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
					>
						<span>
							<FaFile className="w-[1.5rem] min-h-[1.5rem]" />
						</span>
						Save Biodata
					</button>
				</div>
			</form>
		</div>
	);
}
