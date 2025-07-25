import { FaGraduationCap, FaBook, FaUser } from "react-icons/fa6";
import Navbar from "../../ui/Navbar";
import Footer from "../../ui/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../../hook/useSignUp";

export default function LecturerSignupForm() {
	const { signup, isSigningUp } = useSignup();

	const {
		handleSubmit,
		reset,
		register,
		getValues,
		formState: { errors },
	} = useForm();

	//The function that's responsible for calling the API function with object
	function onSubmit({
		firstName,
		lastName,
		email,
		employeeId,
		department,
		password,
	}) {
		//Determine if the user is a lecturer
		const userType = "lecturer";

		signup(
			{
				firstName,
				lastName,
				email,
				employeeId,
				department,
				password,
				userType,
			},
			{
				onSettled: () => reset(),
			}
		);
	}

	return (
		<div className="min-w-full sm:min-w-full  min-h-screen border flex flex-col bg-gradient-to-br from-green-900/80 via-blue-900/70 to-purple-900/80 ">
			<div className="fixed w-full z-50">
				<Navbar />
			</div>

			{/* Heading */}
			<div className="min-w-full sm:w-[32rem] sm:min-h-[9.25rem] mt-[10rem]">
				<div className="w-full sm:min-w-full sm:min-h-[9.25rem] flex flex-col items-center  text-center">
					<div className="w-[4rem] min-h-[4rem] flex items-center justify-center rounded-full  bg-gradient-to-br from-green-600 to-blue-600 ">
						<FaGraduationCap className="w-[2rem] min-h-[2rem] text-white" />
					</div>
					<h2 className="min-w-full text-white sm:min-w-[32rem] min-h-[2.25rem] text-[1.875rem] font-bold font-lato ">
						Join Campus Pathways
					</h2>
					<p className="min-w-full sm:min-w-[32rem] text-white min-h-[1.5rem] font-lato font-light">
						Create your account to get started
					</p>
				</div>
			</div>

			{/* Form section */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="min-w-full min-h-[30.75rem] sm:min-w-[32rem] pl-[1.5rem] pr-[1.5rem] pb-[1.5rem] "
			>
				<div className="pl-[1.5rem] pr-[1.5rem] pb-[1.5rem] shadow-xl rounded-md bg-white/80 backdrop-blur-sm">
					<div className="min-w-full  min-h-[6.5rem] sm:min-w-[29rem] flex flex-col items-center justify-center gap-2 font-lato">
						<h2 className="text-[1.5rem] text-[#020817] font-semibold">
							Create Account
						</h2>
						<p className="text-[0.875rem] text-[#64748B] font-light">
							Choose your account type and fill in your details
						</p>
					</div>

					{/* Links for student and lecturer */}
					<div className="min-w-full sm:min-w-[29rem] bg-white/80 sm:pl-[0.25rem] sm:pr-[0.25rem] sm:pt-[0.25rem] sm:pb-[0.25rem] min-h-[2rem] flex justify-center gap-2 items-center rounded-sm">
						{/* Student Link */}
						<div className="bg-rose-400/50 min-w-full sm:min-w-[14.25rem] sm:min-h-[1.25rem] sm:pt-[0.375rem] sm:pb-[0.375rem] sm:pl-[0.75rem] sm:pr-[0.75rem] rounded-sm focus-visible:outline-none h-10 hover:bg-blue-600 active:bg-blue-700 active:scale-95 active:shadow-inner active:shadow-blue-800/30 transition-all duration-100 ">
							<Link
								to="/studentSignup"
								className="min-w-full sm:min-w-[14.25rem] text-center sm:min-h-[1.25rem] flex items-center justify-center"
							>
								<div className="flex justify-center items-center gap-2">
									<FaUser className="text-[#64748B] " />
									<p className=" font-lato font-semibold">Student</p>
								</div>
							</Link>
						</div>

						{/* Lecturer Link */}
						<div className="bg-indigo-400/50 min-w-full sm:min-w-[14.25rem] sm:min-h-[1.25rem] sm:pt-[0.375rem] sm:pb-[0.375rem] sm:pl-[0.75rem] sm:pr-[0.75rem] rounded-sm focus-visible:outline-none h-10 hover:bg-blue-600 active:bg-blue-700 active:scale-95 active:shadow-inner active:shadow-blue-800/30 transition-all duration-100 ">
							<Link
								to="/lecturersignup"
								className="min-w-full sm:min-w-[14.25rem] text-center sm:min-h-[1.25rem] flex items-center justify-center  "
							>
								<div className="flex justify-center items-center gap-2">
									<FaBook className="text-[#64748B] font-bold " />
									<p className=" font-lato font-semibold">Lecturer</p>
								</div>
							</Link>
						</div>
					</div>

					{/* Form input fields */}
					<div className="min-w-full sm:min-w-[32rem] min-h-[43.75rem] flex flex-col gap-3 mt-[1rem]">
						{/* Fist name */}
						<div className="min-w-full min-h-[4.5rem] sm:min-w-[14rem] flex gap-2  justify-center">
							<div className="min-w-full sm:min-w-[14rem] min-h-[2.5rem] flex flex-col gap-2 ">
								<label
									htmlFor="firstName"
									className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
								>
									First Name
								</label>
								<input
									type="text"
									id="firstName"
									placeholder="John"
									disabled={isSigningUp}
									{...register("firstName", {
										required: "This field is required",
									})}
									className="min-w-full sm:min-w-[14rem] min-h-[2.5rem] rounded-md sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem] border outline-none bg-transparent  focus:ring-black "
								/>
								<small className="font-lato text-[0.85rem] text-red-500">
									{errors && errors?.firstName?.message}
								</small>
							</div>

							{/* Last name */}
							<div className="min-w-full sm:min-w-[14rem] min-h-[2.5rem] flex flex-col gap-2 ">
								<label
									htmlFor="lastName"
									className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
								>
									Last Name
								</label>
								<input
									type="text"
									id="lastName"
									placeholder="Doe"
									disabled={isSigningUp}
									{...register("lastName", {
										required: "This field is required",
									})}
									className="min-w-full sm:min-w-[14rem] min-h-[2.5rem] rounded-md sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem] border outline-none bg-transparent focus:ring-black"
								/>
								<small className="font-lato text-[0.85rem] text-red-500">
									{errors && errors?.lastName?.message}
								</small>
							</div>
						</div>

						{/* email */}
						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem]  sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]">
							<label
								htmlFor="email"
								className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
							>
								email
							</label>
							<input
								type="text"
								id="email"
								disabled={isSigningUp}
								placeholder="jane.smith@campuspathways.edu"
								{...register("email", {
									required: "This field is required",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Invalid email address",
									},
								})}
								className="min-w-full sm:min-w-full min-h-[2.5rem] border rounded-md outline-none bg-transparent focus:ring-black focus:ring-offset-4 placeholder:pl-3"
							/>
							<small className="font-lato text-[0.85rem] text-red-500">
								{errors && errors?.email?.message}
							</small>
						</div>

						{/* Employee ID*/}
						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem] sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]">
							<label
								htmlFor="studentId"
								className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
							>
								Employee ID
							</label>
							<input
								type="text"
								id="employeeId"
								placeholder="EMP2024001"
								disabled={isSigningUp}
								{...register("employeeId", {
									required: "This field is required",
								})}
								className="min-w-full sm:min-w-full min-h-[2.5rem] border rounded-md outline-none bg-transparent focus:ring-black focus:ring-offset-4 placeholder:pl-3"
							/>
							<small className="font-lato text-[0.85rem] text-red-500">
								{errors && errors?.employeeId?.message}
							</small>
						</div>

						{/* Department */}

						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem] sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]">
							<label
								htmlFor="studentId"
								className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
							>
								Department
							</label>
							<input
								type="text"
								id="department"
								placeholder="Computer Science"
								disabled={isSigningUp}
								{...register("department", {
									required: "This field is required",
								})}
								className="min-w-full sm:min-w-full min-h-[2.5rem] border rounded-md outline-none bg-transparent focus:ring-black focus:ring-offset-4 placeholder:pl-3"
							/>
							<small className="font-lato text-[0.85rem] text-red-500">
								{errors && errors?.department?.message}
							</small>
						</div>
						{/* Passwords */}
						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem] sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]">
							<label
								htmlFor="password"
								className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
							>
								password (min 6 characters)
							</label>
							<input
								type="password"
								id="password"
								autoComplete="password"
								disabled={isSigningUp}
								{...register("password", {
									required: "This field is required",
									minLength: {
										value: 6,
										message: "Password needs a minimum of 8 characters",
									},
								})}
								className="min-w-full sm:min-w-full min-h-[2.5rem] font-lato border rounded-md outline-none bg-transparent focus:ring-black focus:ring-offset-4 "
							/>
							<small className="font-lato text-[0.85rem] text-red-500">
								{errors && errors?.password?.message}
							</small>
						</div>

						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem] sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]">
							<label
								htmlFor="confirmPassword"
								className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
							>
								Confirm Password
							</label>
							<input
								type="password"
								autoComplete="password"
								id="confirmPassword"
								disabled={isSigningUp}
								{...register("confirmPassword", {
									required: "This field is required",
									validate: (value) =>
										value === getValues().password || "Passwords need to match",
								})}
								className="min-w-full sm:min-w-full min-h-[2.5rem] font-lato border rounded-md outline-none bg-transparent focus:ring-black focus:ring-offset-4"
							/>
							<small className="font-lato text-[0.85rem] text-red-500">
								{errors && errors?.confirmPassword?.message}
							</small>
						</div>

						{/* Button */}
						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem] sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]">
							<button
								disabled={isSigningUp}
								className="min-w-full sm:min-w-full min-h-[2.5rem] border rounded-md font-lato text-white outline-none text-sm bg-gradient-to-r from-blue-600 to-green-600 "
							>
								{!isSigningUp
									? "Create Student Account"
									: "Creating account... please wait"}
							</button>
						</div>
						<span className="min-w-full sm:min-w-[29rem] text-center font-lato font-light text-sm mt-[-1rem]">
							Already have an account{" "}
							<Link to="/studentLogin" className="font-semibold text-blue-500">
								Sign in here
							</Link>
						</span>
					</div>
				</div>
			</form>

			<Footer />
		</div>
	);
}
