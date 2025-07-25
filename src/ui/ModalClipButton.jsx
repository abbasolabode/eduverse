import { IoPlayOutline } from "react-icons/io5";
import { useModalClip } from "../context/OpenModalContext";

export default function ModalClipButton() {
    //handleToggle function is responsible for the toggling of the modal
    const { handleToggle } = useModalClip();

	return (
		<button onClick={handleToggle} className="flex items-center gap-3 bg-purple-200 hover:opacity-40 hover:bg-indigo-200 sm:w-[12.625rem] sm:pl-[1.5rem] sm:pr-[1rem] rounded-md sm:pt-[0.5rem] sm:pb-[0.5rem] ">
			<IoPlayOutline className="text-[1.3rem] text-red-500" />
			<span className="font-semibold font-lato sm:pl-1.5 text-white">Campus Tour</span>
		</button>
	);
}

