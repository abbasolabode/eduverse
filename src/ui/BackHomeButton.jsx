import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function BackHomeButton({
	children,
	studentDashboardStyle,
	lectBackHomeStyle,
}) {
	//useNavigate hook
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate("/")}
			className={`flex justify-around items-center shadow-2xl rounded-md ring-1 ring-gray-300 duration-300 transition-all hover:shadow-2xl sm:w-[8.5766875rem] min-h-[2.125rem] sm:pl-[0.75rem] sm:pr-[0.75rem] ${
				studentDashboardStyle && studentDashboardStyle
			} ${lectBackHomeStyle && lectBackHomeStyle} `}
		>
			{children ? (
				children
			) : (
				<IoIosArrowRoundBack className="text-[0.9rem] font-bold max-w-full sm:max-w-[1rem]" />
			)}
			<p className="text-[0.875rem] whitespace-nowrap font-bold text-[#020817]">
				{lectBackHomeStyle ? "" : "Back to Home"}
			</p>
		</button>
	);
}
