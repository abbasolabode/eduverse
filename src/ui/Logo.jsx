/* eslint-disable no-unused-vars */
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Logo({ mobileNavLogoStyle, footerLogoStyle }) {
    return (
        <div>
            <Link to="/" className={`flex items-center gap-2 ${footerLogoStyle ? footerLogoStyle : "text-black"} `}>
                <FaGraduationCap className={`text-[2rem] w-[2rem] min-h-[2rem] ${footerLogoStyle ? footerLogoStyle : "text-red-500"} `} />
                <small className={`w-[6.42625rem] min-h-[2rem] text-[1.5rem] font-bold font-poppins whitespace-nowrap ${footerLogoStyle ? "text-black" : ""}`}>
                    Campus Pathways
                </small>
            </Link>
        </div>
    )
}
