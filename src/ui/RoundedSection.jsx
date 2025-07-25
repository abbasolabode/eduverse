import { FaUserFriends } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";


const roundedSectionIcons = [
    {
        id: 1,
        number: "25,000+",
        title: "Students Enrolled",
        icon: <FaUserFriends />,
    },
    {
        id: 2,
        number: "200+",
        title: "Degree Programs",
        icon: <FaBookOpen />,
    },
    {
        id: 3,
        number: "1,500+",
        title: "Faculty Members",
        icon: <GiAchievement />,
    },
    {
        id: 4,
        number: "50+",
        title: "Research Centers",
        icon: <FaLocationDot />,
    },
];

export default function RoundedSection() {
    return (
        <main className="w-full max-w-full sm:min-h-[20.5rem] flex justify-center items-center container mx-auto sm:py-16 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="grid sm:grid-cols-2 gap-8 justify-items-center max-w-[40rem]">
                {roundedSectionIcons.map((item) => (
                    <div
                        key={item.id}
                        className="w-[17.5rem] h-[9.25rem] flex flex-col md:max-w-full items-center gap-4"
                    >
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600">
                            <span className="text-white text-2xl">
                                {item.icon}
                            </span>
                        </div>

                        <div className="w-full text-center flex flex-col gap-2 ">
                            <h2 className={`w-full sm:pl-4 ${item.id === 1 ? "sm:pl-[3.8rem]" : ""} font-semibold text-3xl text-[#111827]`}>
                                {item.number}
                            </h2>
                            <p className="w-full sm:pl-[3rem] text-[#4B5563]">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}