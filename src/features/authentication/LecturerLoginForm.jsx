import { FaBook, FaGraduationCap, FaUser } from "react-icons/fa6";
import Navbar from "../../ui/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../ui/Footer";
import { useForm } from "react-hook-form";
import { useLoginUser } from "../../hook/useLoginUser";

export default function StudentLoginForm() {
	//Destructured values from useForm
	const {handleSubmit, register, reset, formState } = useForm();
	const { login, isLoading } = useLoginUser();//Extracting the errors from the formState

	//Values from custom hook
	const { errors } = formState;

	const onSubmit = function (data) {
		//Determine if the user is a lecturer
		const userType = "student";
		login({ ...data, userType }, { onSettled: () => reset()});
	};

	return (
		<div className="min-h-screen w-full flex flex-col justify-center">
			<div className="fixed w-full z-50">
				<Navbar />
			</div>

			<main className="sm:min-w-[40rem] sm:min-h-[60.625rem] mt-[6.5rem] flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80 md:min-w-[48rem] ">
				{/* Logo & logo text */}
				<div className="sm:min-w-[28rem] min-w-full sm:min-h-[9.25rem] sm:mb-[2rem] flex items-center flex-col justify-center md:min-w-[28rem]">
					<div className="w-[4rem] min-h-[4rem] flex items-center justify-center text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full">
						<FaGraduationCap className="min-w-full min-h-full text-[2rem] text-white " />
					</div>
					<h2 className="text-[1.875rem] text-white/80 min-h-[2.25rem] font-bold text-center min-w-full">
						Welcome Back
					</h2>
					<p className="font-light min-h-[1.5rem] text-white/80">
						Sign in to your campus Pathways account
					</p>
				</div>
                
				{/* Form input fields */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="sm:min-w-[28rem] min-h-[34rem] min-w-full rounded-[1rem] flex flex-col items-center bg-white/80 backdrop-blur-sm shadow-xl border-0  md:min-w-[28rem] md:pl-[1.5rem] md:pr-[1.5rem] md:pt-[1.5rem] md:pb-[1.5rem]"
				>
					<div className="min-w-full sm:min-w-[25rem] min-h-[6.5rem] sm:pl-[1.5rem] sm:pt-[1.5rem] sm:pb-[1.5rem] sm:pr-[1.5rem]  ">
						<h3 className="text-[1.5rem] min-w-full sm:min-w-[25rem] min-h-[2rem] text-center text-[#020817]">
							Sign In
						</h3>
						<p className="text-center text-[0.875rem] min-w-full min-h-[1.5rem] text-[#64748B]">
							Choose your account type to continue
						</p>
					</div>
					{/* Buttons to navigate to either student dashboard or lecturer dashboard */}
					<div className="flex min-w-full sm:w-[24.5rem] p-4 min-h-[2.5rem]">
						{/* Student button */}
						<div className="flex min-w-full sm:w-[24.5rem] gap-3 p-4 bg-blue-50 rounded-md">
							{/* Student button */}
							<Link
								to="/studentLogin"
								className="sm:w-[12.25rem] rounded-sm focus-visible:outline-none h-10 bg-gray-200 hover:bg-blue-300 active:bg-blue-500 active:scale-[97%] active:shadow-inner active:shadow-blue-600/20 transition-all duration-75 ease-out flex items-center justify-center"
							>
								<span className="flex items-center gap-2 justify-center">
									<FaUser />
									<p className="font-medium font-lato text-[#020817]">
										Student
									</p>
								</span>
							</Link>
							{/* Lecturer button */}
							<Link
								to="/lecturerLogin"
								className="sm:w-[12.25rem] rounded-sm focus-visible:outline-none h-10 bg-gray-200 hover:bg-blue-300 active:bg-blue-500 active:scale-[97%] active:shadow-inner active:shadow-blue-600/20 transition-all duration-75 ease-out flex items-center justify-center"
							>
								<span className="flex items-center gap-2 justify-center">
									<FaBook />
									<p className="font-medium font-lato text-[#020817]">
										Lecturer
									</p>
								</span>
							</Link>
						</div>
					</div>

					{/* Input fields */}
					<div className="m:w-[25rem] min-h-[14rem] pl-[1.5rem] pr-[1.5rem] pb-[1.5rem] mt-5">
						<div className=" min-w-full flex flex-col gap-2 sm:w-[23.375rem] min-h-[1.375rem]">
							<label className="text-[0.875rem] font-medium sm:w-[23.375rem] min-h-[1.375rem]">
								Email
							</label>
							<input
								id="email"
								disabled={isLoading}
								{...register("email", {
									required: "This field is required",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Invalid email address",
									},
								})}
								type="email"
								autoComplete="email"
								placeholder="Enter your email"
								className="border pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] rounded-md outline-0  bg-gray-100"
							/>
							<small className="font-lato text-red-500">
								{errors && errors?.email?.message}
							</small>
						</div>

						<div className=" min-w-full flex flex-col gap-2 sm:min-w-[23.375rem] min-h-[1.375rem] mt-2">
							<label className="text-[0.875rem] font-medium sm:w-[23.375rem] min-h-[1.375rem]">
								Password
							</label>
							<input
								id="password"
								disabled={isLoading}
								{...register("password", {
									required: "This field is required",
								})}
								type="password"
								autoComplete="password"
								placeholder="Enter your password"
								className="border pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] rounded-md outline-0 bg-gray-100"
							/>
							<small className="font-lato text-red-500">
								{errors && errors?.password?.message}
							</small>
						</div>
					</div>

					<div className="sm:w-[23rem] min-h-[1.5rem] md:mt-[-2rem]">
						<button disabled={formState.isSubmitting || isLoading} className="sm:min-w-full min-h-[1.5rem] sm:pr-[1rem] rounded-lg sm:pl-[1rem] sm:pt-[0.5rem] sm:pb-[0.5rem] font-lato font-medium text-sm bg-gradient-to-r from-blue-600 to-green-600  text-white outline-none ">
							{ !formState.isSubmitting || !isLoading ? "Sign in as Lecturer" : "Signing in progress..."}
						</button>
					</div>
					<div>
						<p className="font-lato mt-1 font-light">
							Don't have an account?{" "}
							<Link
								to="/signup"
								className="text-blue-500 hover:underline hover:underline-offset-4 font-bold"
							>
								Sign up here
							</Link>
						</p>
					</div>
				</form>
			</main>
			<div>
				<Footer />
			</div>
		</div>
	);
}
