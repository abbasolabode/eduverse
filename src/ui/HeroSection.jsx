import UtiliButton from "./UtiliButton";
import ModalClipButton from "./ModalClipButton";

export default function HeroSection() {
  
	return (
        <div className="z-0 w-full max-w-full sm:max-w-full lg:mt-[-2rem] sm:h-[35.75rem] container flex flex-col justify-center mx-auto bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90 lg:min-h-[33.3125rem]  lg:min-w-[64rem]">
            <div className="container mx-auto sm:h-[18.75rem] flex flex-col gap-[10rem] text-center lg:min-w-[60rem]  lg:min-h-[19.75rem]">
                <div className=" sm:w-[37rem] sm:h-[6rem] container mx-auto flex flex-col items-center gap-[7rem]">
                    <h1 className="sm:text-[3rem] sm:w-full sm:h-[3rem] font-bold font-lato text-white lg:text-6xl ">Shape Your Future at <span className="text-yellow-500">Campus Pathways</span></h1>
                    <p className="sm:w-[37rem] font-medium text-[1.2rem] text-white lg:min-w-[56rem] lg:min-h-[4rem]">
                        Discover endless opportunities with our world-class education,
                        cutting-edge research, and vibrant campus community
                    </p>
                </div>

                {/* Hero buttons */}
                <div className="container w-full max-w-full sm:max-w-full mx-auto sm:w-[37rem] flex justify-center items-center gap-5 sm:h-[4.75rem] lg:min-w-[54.5rem] lg:min-h-[3.75rem]">
                    {/* Button to navigate the user to the apply route */}
                   <UtiliButton heroBtnStyle="lg:min-w-[11.671875rem] lg:min-h-[3.75rem]"  moveToApply="/apply" />
                   {/* Button for the opening and closing of the modal */}
                    <ModalClipButton />
                </div>
            </div>
		</div>
	);
}


