import { FaUserFriends } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";

const whyPathways = [
  {
    id: 1,
    title: "World-Class Education",
    content: "Access to cutting-edge curriculum and industry-leading faculty",
    icon: <FaBookOpen className="text-white text-2xl" />,
  },
  {
    id: 2,
    title: "Research Excellence",
    content: "Engage in groundbreaking research across multiple disciplines",
    icon: <GiAchievement className="text-white text-2xl" />,
  },
  {
    id: 3,
    title: "Career Support",
    content: "Comprehensive career services and industry connections",
    icon: <FaUserFriends className="text-white text-2xl" />,
  }
];

export default function WhyChoosePathways() {
  return (
    <main className=" min-w-full  sm:min-w-[40rem] md:min-w-full md:min-h-[26.125rem] sm:py-20 min-h-[49.125rem] gap-5 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex flex-col items-center lg:min-w-[64rem] ">
      {/* Header section */}
      <div className="min-w-full sm:min-w-[37rem] md:max-w-[45rem] md:min-h-[6.75rem] text-center px-4 pb-16 lg:min-w-[60rem] lg:min-h-[7rem]  lg:flex lg:flex-col lg:items-center">
        <h2 className="text-4xl font-bold text-[#111827] mb-4">
          Why Choose Campus Pathways?
        </h2>
        <p className="text-xl text-[#4b5563] md:max-w-[42rem] md:min-h-[3.5rem]">
          Experience excellence in education with our comprehensive programs
          and world-class facilities
        </p>
      </div>

      {/* Centered Cards */}
      <div className="min-w-full md:min-w-full space-y-4 flex flex-col md:flex-row gap-4 justify-center lg:min-w-[60rem] lg:flex items-center lg:justify-center">
        {whyPathways.map((item) => (
          <div key={item.id} className="min-h-[10.825rem] md md:max-w-[13.66625rem] rounded-lg shadow-lg hover:shadow-xl bg-white mx-4 lg:min-h-[10rem]">
            <div className="h-full flex flex-col md:max-w-full md:flex-col  sm:flex-row items-center justify-around p-6 gap-4">
              <div className="w-12 h-12 rounded-md flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600">
                {item.icon}
              </div>

              <div className="text-center  flex-col items-center justify-center max-w-[34rem] sm:min-h-[7rem]">
                <h3 className="text-xl font-semibold md:max-w-[10.66625rem] text-[#020817] md:min-h-[3.5rem]">{item.title}</h3>
                <p className="text-sm text-[#4B5563] mt-2 md:max-w-[10.66625rem] md:min-h-[6rem]">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}