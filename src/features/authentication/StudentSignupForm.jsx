import { FaGraduationCap, FaBook, FaUser } from "react-icons/fa6";
import Navbar from "../../ui/Navbar";
import Footer from "../../ui/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../../hook/useSignUp";


export default function StudentSignupForm() {

	//Destructured values from useForm
	//This hook provides methods to handle form submission, validation, and state management
	//It returns an object with methods like handleSubmit, register, reset, and formState
	//These methods are used to manage the form state and handle user input
	//handleSubmit is used to handle form submission
	const { handleSubmit, reset, register, getValues, formState } = useForm();
	 
	//Extracting errors from formState;
	const {errors} = formState; // formState contains the state of the form, including validation errors

	//Destructured values from the useSignup custom hook
	const { signup, isPending } = useSignup();

	//The function responsible for calling the mutation function with the data passed from the handleSubmit function
	//Destructured the data passed to onSubmit function
	function onSubmit( formData ) {
		if(!formData) return;
		//Determine if the user is a student
		const userType = "student";
		//Call the signup function from the useSignup hook with the data and userType
		//The signup function will send the data to the API and handle the response
		signup({...formData, userType},
			{
				onSettled: () => reset(),// Reset the form after submission
			}
		);
	}

  //Return the JSX for the Student Signup Form
  //This form allows students to create an account by providing their details
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
				className="min-w-full min-h-[34.75rem] sm:min-w-[32rem] pl-[1.5rem] pr-[1.5rem] pb-[1.5rem] "
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
								to="/lecturerSignup"
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
									placeholder="John"
									id="firstName"
									// This input field is disabled when the form is submitting or when the user is signing up
									disabled={formState.isSubmitting || isPending}
									//react-hook-form's register function is used to register the input field
									{...register("firstName", {
										required: "This field is required",
									})}
									className="min-w-full sm:min-w-[14rem] min-h-[2.5rem] rounded-md sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem] border outline-none bg-transparent  focus:ring-black"
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
									placeholder="Doe"
									id="lastName"
									disabled={formState.isSubmitting || isPending}
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
								placeholder="John.doe@email.com"
								id="email"
								disabled={formState.isSubmitting || isPending}
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

						{/* student Id */}
						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem] sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]">
							<label
								htmlFor="studentId"
								className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
							>
								Student ID
							</label>
							<input
								type="text"
								placeholder="STU2024001"
								id="studentId"
								disabled={formState.isSubmitting || isPending}
								{...register("studentId", {
									required: "This field is required",
								})}
								className="min-w-full sm:min-w-full min-h-[2.5rem] border rounded-md outline-none bg-transparent focus:ring-black focus:ring-offset-4 placeholder:pl-3"
							/>
							<small className="font-lato text-[0.85rem] text-red-500">
								{errors && errors?.studentId?.message}
							</small>
						</div>

						{/* Date of Birth*/}
						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem] sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]">
							<label
								htmlFor="dob"
								className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
							>
								Date of Birth
							</label>
							<input
								type="date"
								id="dob"
								disabled={formState.isSubmitting || isPending}
								{...register("dob", {
									required: "This field is required",
								})}
								className="min-w-full sm:min-w-full min-h-[2.5rem] border font-lato rounded-md outline-none bg-transparent focus:ring-black focus:ring-offset-4 placeholder:pl-3"
							/>
							<small className="font-lato text-[0.85rem] text-red-500">
								{errors && errors?.dob?.message}
							</small>
						</div>

						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem] sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]">
							<label
								htmlFor="password"
								className="text-[#020817] w-[5.3rem] font-lato font-semibold min-h-[1.15625rem]"
							>
								password (min 6 characters)
							</label>
							<input
								type="password"
								placeholder="Create a strong password"
								autoComplete="password"
								id="password"
								disabled={formState.isSubmitting || isPending}
								{...register("password", {
									required: "This field is required",
									minLength: {
										value: 6,
										message: "Password needs a minimum of 6 characters",
									},
								})}
								className="min-w-full sm:min-w-full min-h-[2.5rem] font-lato border rounded-md outline-none bg-transparent focus:ring-black focus:ring-offset-4 placeholder:pl-3"
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
								placeholder="Confirm your password"
								autoComplete="password"
								id="confirmPassword"
								disabled={formState.isSubmitting || isPending}
								//react-hook-form's register function is used to register the input field
								// This input field is used to confirm the password entered in the password field
								{...register("confirmPassword", {
									required: "This field is required",
									// This validation checks if the confirmPassword matches the password field
									validate: (value) =>
										value === getValues().password || "Passwords need to match",
								})}
								className="min-w-full sm:min-w-full min-h-[2.5rem] font-lato border rounded-md outline-none bg-transparent focus:ring-black focus:ring-offset-4 placeholder:pl-3"
							/>
							<small className="font-lato text-[0.85rem] text-red-500">
								{errors && errors?.confirmPassword?.message}
							</small>
						</div>

						{/* Button */}
						<div className="min-w-full sm:min-w-[29rem] min-h-[4.5rem] sm:pl-[2.5rem] sm:pr-[0.75rem] sm:pt-[0.5rem] sm:pb-[0.5rem]  ">
							<button
								disabled={formState.isSubmitting || isPending}
								className="min-w-full sm:min-w-full min-h-[2.5rem] border rounded-md font-lato  bg-gradient-to-r from-blue-600 to-purple-600  text-white outline-none text-sm"
							>
								{isPending || formState.isSubmitting
									? "Creating account... please wait"
									: "Create Student Account"}
							</button>
						</div>
						<span className="min-w-full sm:min-w-[29rem] text-center font-lato font-light text-sm mt-[-1rem]">
							Already have an account?{" "}
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
