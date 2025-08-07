import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useBiodata } from "../hook/useBiodata";
import { useAuthContext } from "../context/AuthContextProvider";


export default function Biodata() {
	//The useNavigate function to programatically navigate
	const navigate = useNavigate();

	// Get the user from the AuthContext
	// This will provide the user information to the component
	const { user: authenticatedUser = {} } = useAuthContext();
 
	// Fetch the biodata using the useBiodata hook
	// This will return the biodata of all the users which is an array of objects
	const { biodata } = useBiodata();

	// Find the authenticated user in the biodata array
	// This will match the user email with the biodata email 
	const authUser = biodata?.find(item => item?.email === authenticatedUser?.email );
	console.log( authUser)

	
	if (!authUser) {
		return (
			<p className="text-center text-red-500 font-bold font-lato pt-5 pb-5">
				No biodata found. Please fill out your biodata form.
			</p>
		);
	}
	return (
		<div>
			{/* Navigation button to biodata Form */}
			<div className="min-w-full min-h-full">
				<div className="md:min-h-[2.5rem] md:min-w-[48rem] flex justify-end items-center">
					<button
						onClick={() => navigate("/studentDashboard/biodataForm")}
						className="flex gap-2 justify-center items-center md:min-w-[8.8rem] md:min-h-[2.5rem] text-white bg-[#111827] rounded-sm border md:mr-4 font-lato font-medium"
					>
						<span>
							<FiEdit />
						</span>
						<p>Edit Biodata</p>
					</button>
				</div>
			</div>

			{/* Information details of the student */}
			<div className="min-w-full md:min-w-[44.875rem] md:min-h-[10rem] md:pl-[1.5rem] md:pr-[1.5rem] md:pb-[1.5rem] mt-8 flex flex-col gap-5">
				{/* Personal Information */}
				<div
					className="min-w-full md:min-w-full rounded-md pl-5 pr-5 pt-4 pb-4 shadow-md bg-white
        "
				>
					<div className="md:min-w-[41.87rem] md:min-h-[4.75rem]">
						<h3 className="font-semibold font-lato">Personal Information</h3>
					</div>
					<div className="md:min-h-[11.75rem] md:min-w-[41.87rem] flex flex-col gap-2 ">
						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Full Name:
							</p>
							<p className="font-semibold font-lato">{authUser?.fullName}</p>
						</span>
						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Student ID:
							</p>
							<p className="font-semibold font-lato">{authUser?.studentId}</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Email:
							</p>
							<p className="font-semibold font-lato">{authUser?.email}</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Phone:
							</p>
							<p className="font-semibold font-lato"> {authUser?.phone}</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato">
								Date of Birth:
							</p>
							<p className="font-semibold font-lato">{authUser?.dob}</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato">
								Gender:
							</p>
							<p className="font-semibold font-lato">{authUser?.gender}</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato">
								Nationality:
							</p>
							<p className="font-semibold font-lato">{authUser?.nationality}</p>
						</span>
					</div>
				</div>
				{/*Academic Information */}
				<div
					className="min-w-full md:min-w-full rounded-md pl-5 pr-5 pt-4 pb-4 shadow-md bg-white
        "
				>
					<div className="md:min-w-[41.87rem] md:min-h-[4.75rem]">
						<h3 className="font-semibold font-lato">Academic Information</h3>
					</div>
					<div className="md:min-h-[11.75rem] md:min-w-[41.87rem] flex flex-col gap-2 ">
						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Program:
							</p>
							<p className="font-semibold font-lato"> {authUser?.program}</p>
						</span>
						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem] tracking-wider">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Level:
							</p>
							<p className="font-semibold font-lato">{authUser?.level}</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">Year:</p>
							<p className="font-semibold font-lato">{authUser?.year}</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Semester:
							</p>
							<p className="font-semibold font-lato">{authUser?.semester}</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato">GPA:</p>
							<p className="font-semibold font-lato">3.7</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato">
								Total Credits:
							</p>
							<p className="font-semibold font-lato">84</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato">
								Expected Graduation:
							</p>
							<p className="font-semibold font-lato">May 2025</p>
						</span>
					</div>
				</div>
				{/*Contact Information */}
				<div
					className="min-w-full md:min-w-full rounded-md pl-5 pr-5 pt-4 pb-4 shadow-md bg-white
        "
				>
					<div className="md:min-w-[41.87rem] md:min-h-[4.75rem]">
						<h3 className="font-semibold font-lato">Contact Information</h3>
					</div>
					<div className="md:min-h-[11.75rem] md:min-w-[41.87rem] flex flex-col gap-2 ">
						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Permanent Address:
							</p>
							<p className="font-semibold font-lato">
								{authUser?.permanentAddress}
							</p>
						</span>
						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem] tracking-wider">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Current Address:
							</p>
							<p className="font-semibold font-lato">
								{authUser?.currentAddress}
							</p>
						</span>

						<span className="flex items-center justify-between min-w-full md:min-w-[41.87rem]">
							<p className="min-h-[1.25rem] text-[#4B5563] font-lato ">
								Emergency Contact:
							</p>
							<p className="font-semibold font-lato">
								{authUser?.emergencyContact}
							</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
