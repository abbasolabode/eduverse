import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export default function UtiliButton({ children, classViewProgramStyle, moveToPrograms, moveToApply, academicProgramStyle}) {
  const navigate = useNavigate();


	function handleNavigation(){
		//If moveToPrograms exists, navigate to moveToPrograms
		//If moveToApply exists, navigate to moveToApply
		if (moveToPrograms) return navigate(moveToPrograms);
		if (moveToApply) return navigate(moveToApply);
	}

	return (
		<button onClick={handleNavigation} className={`flex items-center gap-3 hover:bg-amber-200 sm:w-[12.625rem] sm:pl-[1rem] sm:pr-[1rem] rounded-md sm:pt-[0.5rem] sm:pb-[0.5rem] ${classViewProgramStyle ? classViewProgramStyle : "bg-yellow-500"} ${academicProgramStyle} `}>
			<span className="font-medium font-lato sm:pl-[1.5rem]">{children ? children : "Apply Now"}</span>
			 <IoIosArrowRoundForward className="text-[1.3rem]" />
		</button>
	);
}
