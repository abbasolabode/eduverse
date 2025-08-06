import { MdClose } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import { useModalClip } from "../context/OpenModalContext";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useOutsideClick } from "../hook/useOutsideClick";

export default function ModalClip() {
	//Extracting data object from useModalClip Hook in the OpenModalContext
	const { closeModal, isOpenModal } = useModalClip();
	
	//The useOutsideClick custom hook is called with closeModal
	const ref = useOutsideClick(closeModal);

	// Close on Escape key
	useEffect(() => {
		//Return if isOpenModal does not exist
		if (!isOpenModal) return;

		//e.key is actually the key that's being pressed and passed to the handleKeyDown function
		function handleKeyDown(e) {
			//checks if the e.key (the key pressed) is equal to escape key, close the modal
			e.key === "Escape" && closeModal();
		}
		//Listening for the keydown event
		document.addEventListener("keydown", handleKeyDown);
		//Cleanup function
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpenModal, closeModal]);

	return createPortal(
		<>
			{isOpenModal && (
				<div className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-200 bg-opacity-30 backdrop-blur-sm">
					<div
						className="mx-4 w-full max-w-[36.875rem] rounded-md bg-white p-6 shadow-2xl"
						ref={ref}
					>
						<div className="flex justify-between">
							<div>
								<h2 className="text-lg font-medium text-[#020817]">
									Virtual Campus Tour
								</h2>
								<p className="text-sm text-[#64748B]">
									Explore our beautiful campus from the comfort of your home
								</p>
							</div>
							{/* Close modal button */}
							<button onClick={closeModal}>
								<MdClose className="cursor-pointer text-red-500" />
							</button>
						</div>

						<div className="mt-6 rounded-md bg-gray-200">
							{/* Video container  */}
							<div className="w-full overflow-hidden rounded-md">
								<video className="w-full" controls autoPlay muted playsInline>
									<source src="images/video.mp4" type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					</div>
				</div>
			)}
		</>,
		document.body
	);
}
