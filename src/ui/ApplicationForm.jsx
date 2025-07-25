
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { GoUpload } from "react-icons/go";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import { useApplicationForm } from "../hook/useApplicationForm";
import { useForm, Controller } from "react-hook-form";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

const preferredPrograms = [
	{
		id: 1,
		option: "Computer Science",
	},
	{
		id: 2,
		option: "Psychology",
	},
	{
		id: 3,
		option: "Nursing",
	},
	{
		id: 4,
		option: "Business Administration",
	},
	{
		id: 5,
		option: "Medicine and Surgery",
	},
];

export default function ApplicationForm() {
	//useForm Hook from react
	const { handleSubmit, register, reset, control, formState } = useForm();
	//Extracting errors
	const { errors } = formState;
	//useState for managing date input
	const [selectedDate, setSelectedDate] = useState();
	const [confirmed, setConfirmed] = useState(false);
	//Custom Hook
	const { applyForm, isApplyingForm } = useApplicationForm();
	//useNavigate hook
	const navigate = useNavigate();
      
	//The function responsible for the sending data to the API function
	function onSubmit(data) {
		console.log(data);
		if (!confirmed)
			return toast.error("Please tick the checkbox for confirmation");
		//mutate function that calls the mutation function
		applyForm({ ...data, confirmed: confirmed}, {
		onSettled: () => reset(), // The reset function is called if the mutation is either successful or failed
		});
		setSelectedDate("");
	}

	return (
		<div className="w-full sm:w-[40rem] min-h-screen flex flex-col md:w-[48rem]">
			{/* Navbar*/}
			<div className="fixed w-full z-50">
				<Navbar />
			</div>

			<div className="min-h-[6.75rem] w-full sm:w-[40rem] mt-[6.5rem] shadow-sm sm:pt-[1.5rem] sm:pb-[1.5rem] sm:pr-[1rem] sm:pl-[1rem] md:w-[48rem] md:min-h-[6.75rem]">
				<div className="flex justify-between items-center w-full ">
					<div className="flex gap-6 items-center w-full sm:w-[26.323125rem] min-h-[3.75rem] ">
						{/* Go to home button */}
						<button
							onClick={() => navigate("/")}
							className="flex justify-around items-center shadow-2xl rounded-lg ring-1 ring-gray-300 duration-300 transition-all hover:shadow-2xl sm:w-[8.5766875rem] min-h-[2.125rem] sm:pl-[0.75rem] sm:pr-[0.75rem] "
						>
							<IoIosArrowRoundBack className="text-[0.9rem] font-bold max-w-full sm:max-w-[1rem]" />
							<p className="text-[0.875rem] whitespace-nowrap font-bold text-[#020817]">
								Back to Home
							</p>
						</button>

						<div className="w-full sm:w-[16.121875rem] ">
							<h3 className="w-full sm:w-[16.121875rem] font-lato font-bold whitespace-nowrap text-[1.875rem] min-h-[2.25rem]">
								Apply to EduVerse
							</h3>
							<p className="text-[0.875rem] w-full sm:w-full text-[#4B5563] tracking-wider font-lato">
								Start your journey with use today
							</p>
						</div>
					</div>

					{/* School logo */}
					<div className="flex items-center full sm:w-[8.92625rem] min-h-[2rem] gap-2 ">
						<FaGraduationCap className="w-full sm:w-[2rem] min-h-[2rem] text-[2rem] text-blue-500" />
						<p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 max-w-full sm:w-[6.425rem] min-h-[2rem] font-lato font-semibold text-[1.5rem]   ">
							EduVerse
						</p>
					</div>
				</div>
			</div>

			{/* Form */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full sm:w-[38rem] mt-[2rem] min-h-[119.1875rem] container mx-auto z-0  shadow-2xl md:w-[48rem] md:min-h-[91.5625rem] md:pl-[1rem] md:pr-[1rem] md:pt-[2rem] md:pb-[2rem]"
			>
				{/* Form Header */}
				<div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 min-h-[6.625rem] sm:w-full sm:pr-[1.5rem] sm:pl-[1.5rem] sm:pt-[1.5rem] sm:pb-[1.5rem] text-center md:w-[46rem] md:pl-[1.5rem]  md:pr-[1.5rem] md:pt-[1.5rem] md:pb-[1.5rem]">
					<h3 className="max-w-full sm:w-[35rem] text-[1.5rem] text-[#020817] min-h-[2rem] font-semibold font-lato md:text-center md:w-full ">
						Application Form
					</h3>
					<p className="text-[0.875rem] mt-[0.375rem] font-medium font-lato text-[#64748B]">
						Please fill out all required fields to complete your application
					</p>
				</div>

				{/* Form body */}
				<div className="w-full sm:w-[34rem] mx-auto  sm:pr-[2rem] sm:pl-[2rem] sm:pb-[2rem] sm:pt-[2rem] md:w-[46rem] md:pl-[1.5rem] md:pr-[1.5rem] md:pt-[1.5rem] md:pb-[1.5rem] ">
					<div className="w-full sm:w-full">
						{/* Personal Information */}
						<div className="w-full sm:w-full min-h-[12.25rem] md:w-[42rem] md:min-h-[7rem] ">
							<div className="min-h-[1.75rem] w-full sm:max-w-[34rem] gap-2 flex items-center">
								<CiUser className="w-[1.25rem] min-h-[1.25rem] text-[1.25rem] text-blue-800" />
								<p className="w-full sm:w-full min-h-full  text-[1.125rem] text-[#020817] font-semibold font-lato  ">
									Personal Information
								</p>
							</div>
							<div className="w-full min-h-full md:w-full md:min-h-full md:flex md:items-center md:gap-2">
								{/* input fields for personal information... 1 First Name*/}
								<div className="max-w-full sm:max-w-full min-h-[4.25rem] mt-5 flex justify-center flex-col md:w-[20.5rem]">
									<label
										className="max-w-full sm:max-w-[8.92rem] font-lato font-semibold min-h-[1.15625rem]"
										htmlFor="firstName"
									>
										First Name <span className="text-red-500">*</span>
									</label>
									<input
										className="max-w-full sm:max-w-[32.375rem] ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem] mt-[0.5rem] mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] "
										type="text"
										id="firstName"
										disabled={isApplyingForm}
										{...register("firstName", {
											required: "This field is required",
											minLength: {
												value: 2,
												message: "Minimum 2 characters",
											},
										})}
									/>
									<small className="text-[0.875rem] font-lato mt-1 text-red-500">
										{errors && errors?.firstName?.message}
									</small>
								</div>

								{/* input fields for personal information... 2 Last Name*/}
								<div className="max-w-full sm:max-w-full min-h-[4.25rem] mt-5 flex justify-center flex-col md:w-[20.5rem] ">
									<label
										className="max-w-full sm:max-w-[8.92rem] font-lato font-semibold min-h-[1.15625rem]"
										htmlFor="firstName"
									>
										Last Name <span className="text-red-500">*</span>
									</label>
									<input
										className="max-w-full sm:max-w-[32.375rem] ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem] mt-[0.5rem]  mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] "
										type="text"
										id="lastName"
										disabled={isApplyingForm}
										{...register("lastName", {
											required: "This field is required",
											minLength: {
												value: 2,
												message: "Minimum of 2 characters",
											},
										})}
									/>
									<small className="text-[0.875rem] font-lato mt-1 text-red-500">
										{errors && errors?.lastName?.message}
									</small>
								</div>
							</div>
						</div>

						{/* Contact Information */}
						<div className="w-full sm:w-full min-h-[12.25rem] mt-4 md:w-[42rem] ">
							<div className="min-h-[1.75rem] max-w-full sm:max-w-[34rem] gap-2 flex items-center">
								<CiMail className="w-[1.25rem] min-h-[1.25rem] text-[1.25rem] text-blue-800" />
								<p className="max-w-full sm:max-w-full min-h-full  text-[1.125rem] text-[#020817] font-semibold font-lato  ">
									Contact Information
								</p>
							</div>
							<div className="w-full min-h-full md:w-full md:min-h-full md:flex md:items-center md:gap-2">
								{/* input fields for personal information... 2 First Name*/}
								<div className="w-full sm:w-full min-h-[4.25rem] mt-5 flex justify-center flex-col md:w-[20.5rem]">
									<label
										className="max-w-full sm:max-w-[8.92rem] font-lato font-semibold min-h-[1.15625rem]"
										htmlFor="email"
									>
										Email Address<span className="text-red-500 ml-1">*</span>
									</label>
									<input
										className="w-full sm:w-[32.375rem] ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem] mt-[0.5rem] mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] md:w-[20.5rem]"
										type="text"
										id="email"
										disabled={isApplyingForm}
										{...register("email", {
											required: "This field is required",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Invalid email address",
											},
										})}
									/>
									<small className="text-[0.875rem] font-lato mt-1 text-red-500">
										{errors && errors?.email?.message}
									</small>
								</div>

								{/* input fields for personal information... 2 Last Name*/}
								<div className="w-full sm:w-full min-h-[4.25rem] mt-5 flex justify-center flex-col md:w-[20.5rem]">
									<label
										className="max-w-full sm:max-w-[9.92rem]  font-lato font-semibold min-h-[1.15625rem]"
										htmlFor="phone"
									>
										Phone <span className="text-red-500 ">*</span>
									</label>
									<input
										className="max-w-full sm:max-w-[32.375rem] ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem]   mt-[0.5rem] mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] md:w-[20.5rem]"
										type="text"
										id="phoneNumber"
										disabled={isApplyingForm}
										{...register("phoneNumber", {
											required: "This field is required",
										})}
									/>
									<small className="text-[0.875rem] font-lato mt-1 text-red-500">
										{errors && errors?.phoneNumber?.message}
									</small>
								</div>
							</div>
						</div>

						{/* Address */}
						<div className="w-full sm:w-full min-h-[22.75rem] mt-4 md:w-[42rem] md:min-h-[10.25rem] md:mt-0">
							<div className="min-h-[1.75rem] w-full sm:w-[34rem] gap-2 flex items-center">
								<CiMail className="w-[1.25rem] min-h-[1.25rem] text-[1.25rem] text-blue-800" />
								<p className="w-full sm:w-full min-h-full  text-[1.125rem] text-[#020817] font-semibold font-lato  ">
									Address
								</p>
							</div>

							{/*Home Address */}
							<div className="w-full sm:w-full min-h-[4.25rem] mt-4 flex justify-center flex-col md:w-full md:min-h-[4.25rem]">
								<label
									className="w-full sm:w-[8.92rem] font-lato font-semibold min-h-[1.15625rem]"
									htmlFor="address"
								>
									Street Address <span className="text-red-500">*</span>
								</label>
								<input
									className="w-full sm:w-[32.375rem] ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem] mt-[0.5rem] mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] md:w-full"
									type="text"
									id="streetAddress"
									disabled={isApplyingForm}
									{...register("streetAddress", {
										required: "This field is required",
									})}
								/>
								<small className="text-[0.875rem] font-lato mt-1 text-red-500">
									{errors && errors?.streetAddress?.message}
								</small>
							</div>

							{/* For City, State, Zip code */}
							<div className="w-full sm:w-full min-h-[4.25rem] mt-5 flex justify-center flex-col gap-3 md:w-[42rem] md:flex-row  md:items-center md:min-h-[4.25rem]">
								{/* City */}
								<div className="w-full sm:w-full flex flex-col md:mt-4.5">
									<label
										className="w-full sm:w-[8.92rem] font-lato font-semibold min-h-[1.15625rem]"
										htmlFor="city"
									>
										City <span className="text-red-500">*</span>
									</label>
									<input
										className="w-full sm:w-[32.375rem] ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem] mt-[0.5rem] mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] md:w-[13.3333rem]"
										type="text"
										id="city"
										disabled={isApplyingForm}
										{...register("city", {
											required: "This field is required",
										})}
									/>
									<small className="text-[0.875rem] font-lato mt-1 text-red-500">
										{errors && errors?.city?.message}
									</small>
								</div>

								{/* State */}
								<div className="w-full sm:w-full min-h-[4.25rem] mt-5 flex justify-center flex-col ">
									<label
										className="w-full sm:w-[8.92rem] font-lato font-semibold min-h-[1.15625rem]"
										htmlFor="state"
									>
										State <span className="text-red-500">*</span>
									</label>
									<input
										className="w-full sm:w-[32.375rem] ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem] mt-[0.5rem] mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] md:w-[13.3333rem]"
										type="text"
										id="state"
										disabled={isApplyingForm}
										{...register("state", {
											required: "This field is required",
										})}
									/>
									<small className="text-[0.875rem] font-lato mt-1 text-red-500">
										{errors && errors?.state?.message}
									</small>
								</div>

								{/* Zip code */}
								<div className="w-full sm:w-full min-h-[4.25rem] mt-5 flex justify-center flex-col ">
									<label
										className="w-full sm:w-[8.92rem] font-lato font-semibold min-h-[1.15625rem]"
										htmlFor="ZipCode"
									>
										Zip Code <span className="text-red-500">*</span>
									</label>
									<input
										className="w-full sm:w-[32.375rem] ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem] mt-[0.5rem] mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] md:w-[13.3333rem]"
										type="text"
										id="zipCode"
										disabled={isApplyingForm}
										{...register("zipCode", {
											required: "This field is required",
										})}
									/>
									<small className="text-[0.875rem] font-lato mt-1 text-red-500">
										{errors && errors?.zipCode?.message}
									</small>
								</div>
							</div>
						</div>
					</div>

					{/* Academic Information */}
					<div className="w-full sm:w-full min-h-[20rem md:min-h-[14.75rem] md:w-[42rem] ">
						<div className="min-h-[1.75rem] w-full sm:w-[34rem] mt-3 gap-2 flex items-center md:w-full">
							<FaGraduationCap className="w-[1.25rem] min-h-[1.25rem] text-[1.25rem] text-blue-800" />
							<p className="w-full sm:w-[12.92rem] font-lato font-semibold min-h-[1.15625rem] md:w-full">
								Academic Information
							</p>
						</div>

						{/*Preferred program & Preferred start date  */}
						<div className="w-full sm:w-full min-h-[9.5rem]">
							<div className="w-full md:w-full md:flex md:items-center md:gap-2">
								{/* 1 */}
								<div className="w-full sm:w-full min-h-[4.25rem] mt-5 flex justify-center flex-col md:min-h-[4.25rem] md:w-[20.5rem]">
									<label
										className="w-full sm:w-[12.92rem] font-lato font-semibold min-h-[1.15625rem]"
										htmlFor="preferredProgram"
									>
										{" "}
										Preferred Program <span className="text-red-500">*</span>
									</label>

									<select
										id="preferredProgram"
										disabled={isApplyingForm}
										{...register("preferredProgram", {
											required: "Select a program",
										})}
										className=" w-[32.375rem] px-2 sm:w-full ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem] mt-[0.5rem] mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] md:w-[20.5rem]"
									>
										<option value="" className="text-xs py-1 font-lato">
											Select a program
										</option>
										{preferredPrograms.map((program) => (
											<option
												className="text-xs font-lato"
												key={program.id}
												value={program.option}
											>
												{program.option}
											</option>
										))}
									</select>
									<small className="text-[0.875rem] font-lato mt-1 text-red-500">
										{errors && errors?.preferredProgram?.message}
									</small>
								</div>

								{/* starting date 2 */}
								<div className="max-w-full sm:max-w-full min-h-[4.25rem] mt-5 flex justify-center flex-col md:min-h-[4.25rem] md:w-[20.5rem]">
									<label
										className="max-w-full sm:max-w-[12.92rem] font-lato font-semibold min-h-[1.15625rem]"
										htmlFor="PreferredProgram"
									>
										Preferred Start Date <span className="text-red-500">*</span>
									</label>
									<input
										type="date"
										id="preferredDate"
										{...register("preferredDate", {
											required: "Select a date",
										})}
										value={selectedDate}
										onChange={(e) => setSelectedDate(e.target.value)}
										className=" max-w-[32.375rem] px-2 sm:max-w-full ring ring-zinc-400 min-h-[1.375rem] sm:pt-[0.5rem] sm:pb-[0.5rem] sm:pr-[0.75rem] sm:pl-[0.75rem] mt-[0.5rem] mb-[0.00625rem] mr-[0.00625rem] rounded-md ml-[0.00625rem] md:w-[20.5rem]"
									/>
									<small className="text-[0.875rem] font-lato mt-1 text-red-500">
										{errors && errors?.preferredDate?.message}
									</small>
								</div>
							</div>

							{/* Previous education */}
							<div className="w-full sm:w-full min-h-[4.25rem] mt-5 flex justify-center flex-col md:w-[42rem]">
								<label
									className="w-full sm:w-[12.92rem] text-[0.875rem] font-lato font-semibold min-h-[1.15625rem]"
									htmlFor="previousEducation"
								>
									Previous Education <span className="text-red-500">*</span>
								</label>
								<textarea
									id="prevEducation"
									disabled={isApplyingForm}
									{...register("prevEducation", {
										required: "This field is required",
									})}
									minLength="20"
									maxLength="300"
									placeholder="Please describe your educational background"
									className="h-24 border text-sm font-medium placeholder-text-gray-500 border-gray-500 rounded-sm placeholder:px-2 mt-2"
								></textarea>
								<small className="text-[0.875rem] font-lato mt-1 text-red-500 ">
									{errors && errors?.prevEducation?.message}
								</small>
							</div>
						</div>
					</div>

					{/* Personal Statement */}
					<div className="w-full sm:full min-h-[6.75rem] mt-[1rem] flex flex-col gap-3  md:w-[42rem]">
						<div>
							<p className="w-full sm:w-[12.92rem] font-lato text-[1.125rem] font-semibold min-h-[1.15625rem]">
								Personal Statement
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="previousEducation"
								className="min-h-[1.15625rem] font-semibold  text-[0.875rem]"
							>
								Why do you want to join EduVerse <span>*</span>
							</label>
							<textarea
								id="personalStatement"
								{...register("personalStatement", {
									required: "Please upload a file",
								})}
								minLength="20"
								maxLength="300"
								disabled={isApplyingForm}
								placeholder="Tell us about your goals and why you choose EduVerse..."
								className="h-24 text-sm border font-medium placeholder-text-gray-500 border-gray-500 rounded-sm placeholder:px-2 mt-1 md:w-full"
							></textarea>
							<small className="text-[0.875rem] font-lato mt-1 text-red-500 ">
								{errors && errors?.prevEducation?.message}
							</small>
						</div>
					</div>

					{/* Supporting documents */}
					<div className="w-full sm:w-full min-h-[17.75rem] mt-[1rem] flex flex-col gap-3 md:w-[42rem] md:min-h-[9.75rem]">
						<div className="flex items-center gap-2">
							<GoUpload className="text-blue-600 font-bold w-[1.25rem] min-h-[1.125rem]" />
							<p className="w-full sm:w-[12.92rem] font-lato text-[1.125rem] font-semibold min-h-[1.15625rem]">
								Supporting Documents
							</p>
						</div>

						<div className=" w-full sm:w-full flex flex-col gap-4 items-center justify-center md:w-full md:min-h-full md:flex-row ">
							{/* documents 1... Upload Transcript */}

							<div className="container mx-auto relative max-w-full sm:pl-[1rem] border border-gray-500 rounded-md border-dotted sm:pr-[1rem] sm:pt-[1rem] sm:pb-[1rem] sm:max-w-[31.75rem] min-h-[4.75rem] flex flex-col items-center mx-container md:w-[20.5rem] md:min-h-[7rem]">
								<label
									htmlFor="fileTranscript"
									className="mx-auto flex flex-col justify-center items-center max-w-full sm:max-w-full min-h-full"
								>
									<span className="w-[2rem] min-h-[2rem] h-[2rem]">
										<GoUpload className="min-h-full text-gray-500 w-full" />
									</span>
									<p className="text-[0.875rem] text-[#020817] font-semibold font-lato">
										Upload Transcript
									</p>
									<p className="text-[0.75rem] font-light font-lato text-gray-400">
										PDF, DOC, <span>or</span> DOCX
									</p>
								</label>
                                
								{/* The Controller component comes from React Hook Form which is used to manage file input like PDF, Images, DOCX, or DOC */}
								<Controller
									name="fileTranscript"
									control={control}
									rules={{ required: "Please upload a file" }}
									render={({ field, fieldState: { error } }) => (
										<>
											<input
												type="file"
												id="fileTranscript"
												disabled={isApplyingForm}
												onChange={(e) => field.onChange(e.target.files?.[0] || null)}
												onBlur={field.onBlur}
												name={field.name}
												ref={field.ref}
												accept=".pdf,.doc,.docx"
												aria-label="Upload documents"
												className="max-w-full opacity-0 absolute inset-0 w-full h-full cursor-pointer sm:max-w-full min-h-[4.75rem] mx-auto container md:w-[20.5rem] md:min-h-[7rem]"
											/>
											{error && (
												<small className="text-[0.875rem] font-lato mt-1 text-red-500">
													{error?.message}
												</small>
											)}
										</>
									)}
								/>
							</div>

							{/* documents 2... Upload Resume*/}
							<div className=" container mx-auto relative max-w-full sm:pl-[1rem] border border-gray-500 rounded-md border-dotted sm:pr-[1rem] sm:pt-[1rem] sm:pb-[1rem] sm:max-w-[31.75rem] min-h-[4.75rem] flex flex-col items-center mx-container md:w-[20.5rem] md:min-h-[7rem]">
								<label
									htmlFor="fileResume"
									className=" mx-auto flex flex-col justify-center items-center max-w-full sm:max-w-full min-h-full "
								>
									<span className="w-[2rem] min-h-[2rem] h-[2rem] ">
										<GoUpload className=" min-h-full text-gray-500 w-full" />
									</span>
									<p className="text-[0.875rem] text-[#020817] font-semibold font-lato">
										Upload Resume
									</p>
									<p className="text-[0.75rem] font-light font-lato text-gray-400">
										PDF, DOC, <span>or</span> DOCX
									</p>
								</label>
								{/* The Controller component comes from React which is used to manage file input like PDF, Images, DOCX, or DOC */}
								<Controller
									name="fileResume"
									control={control}
									rules={{ required: "Please upload a file" }}
									render={({ field, fieldState: { error } }) => (
										<>
											<input
												type="file"
												id="fileResume"
												disabled={isApplyingForm}
												onChange={(e) => field.onChange(e.target.files?.[0] || null)}
												onBlur={field.onBlur}
												name={field.name}
												ref={field.ref}
												accept=".pdf,.doc,.docx"
												aria-label="Upload documents"
												className="max-w-full opacity-0 absolute inset-0 w-full h-full cursor-pointer sm:max-w-full min-h-[4.75rem] mx-auto container md:w-[20.5rem] md:min-h-[7rem]"
											/>
											{error && (
												<small className="text-[0.875rem] font-lato mt-1 text-red-500">
													{error?.message}
												</small>
											)}
										</>
									)}
								/>
							</div>
						</div>
					</div>

					{/* Horizontal rule */}
					<hr className="text-gray-300 font-light mt-4" />
					{/* Button */}
					<div className="flex flex-col-reverse gap-4 items-center justify-center min-h-[7rem] mt-5 max-w-full sm:max-w-full md:w-[42rem] md:min-h-[7.5625rem]">
						<button
							disabled={!confirmed || isApplyingForm}
							className={`text-white w-auto max-w-full bg-gradient-to-r from-blue-600 to-purple-600  hover:to-purple-700 sm:max-w-[24.25rem] min-h-[2.75rem] rounded-md font-lato sm:px-2 font-semibold text-sm md:w-[10rem] md:min-h-[3.75rem] ${
								isApplyingForm && "hover:bg-blue-300"
							} `}
						>
							{isApplyingForm
								? "animate-pulse cursor-not-allowed"
								: "Submit Application"}
						</button>

						{/* Checkbox */}
						<div className="max-w-full sm:max-w-full flex gap-1 ">
							<input
								className="w-[1.125rem] min-h-[1.25rem]"
								type="checkbox"
								disabled={isApplyingForm}
								name=""
								id="checkBox"
								checked={confirmed}
								onClick={() => setConfirmed(confirm => !confirm)}
							/>
							<small className="text-gray-500 font-lato font-light">
								By submitting this application, you agree to our terms of
								Service and Privacy Policy
							</small>
						</div>
					</div>
				</div>
			</form>

			{/* Footer */}
			<div className="mt-10">
				<Footer />
			</div>
		</div>
	);
}
