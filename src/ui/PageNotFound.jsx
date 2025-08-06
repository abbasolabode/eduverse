import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
		<div className="fixed inset-0 font-lato flex flex-col gap-7 font-bold text-[2rem] text-red-500 items-center justify-center bg-black/30">
			Hey, what you're looking for ain't here!
			<button onClick={()=> navigate("/")} className="text-white text-sm rounded-md pl-[1rem] pr-[1rem] bg-gradient-to-r from-green-600 to-blue-600 pt-[0.5rem] pb-[0.5rem] animate-bounce shadow-md duration-300 transition-all  ">
				Back to Home
			</button>
		</div>
	);
}
