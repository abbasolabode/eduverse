import UtiliButton from "./UtiliButton";
import ModalClipButton from "./ModalClipButton";

export default function HeroSection() {
  
	return (
        <div className="z-0 w-full max-w-full sm:max-w-full sm:h-[30.75rem] bg-gradient-to-br container flex flex-col justify-center mx-auto from-blue-600 via-purple-500 to-purple-800">
            <div className="container mx-auto sm:h-[18.75rem] flex flex-col gap-[10rem] text-center">
                <div className=" sm:w-[37rem] sm:h-[6rem] container mx-auto flex flex-col items-center gap-[7rem]">
                    <h1 className="sm:text-[3rem] sm:w-full sm:h-[3rem] font-bold font-lato text-white ">Shape Your Future at <span className="text-yellow-500">Campus Pathways</span> </h1>
                    <p className="sm:w-[37rem] font-medium text-[1.2rem] text-white">
                        Discover endless opportunities with our world-class education,
                        cutting-edge research, and vibrant campus community
                    </p>
                </div>

                {/* Hero buttons */}
                <div className="container w-full max-w-full sm:max-w-full mx-auto sm:w-[37rem] flex justify-center items-center gap-5 sm:h-[4.75rem] ">
                    {/* Button to navigate the user to the apply route */}
                   <UtiliButton  moveToApply="/apply" />
                   {/* Button for the opening and closing of the modal */}
                    <ModalClipButton />
                </div>
            </div>
		</div>
	);
}


0