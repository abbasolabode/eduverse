import { useCourses } from "../hook/useCourses";
import Spinner from "./Spinner";

export default function Courses() {
  const {courses = [], isLoading} = useCourses();

  if(isLoading) return <Spinner loadingCourse="Please wait while loading your academic courses" />;

  return (
    <div  className="min-w-full md:min-w-[21.625rem] flex flex-col gap-5 md:min-h-[13.75rem] md:pl-[1.5rem] md:pr-[1.5rem] md:pt-[1.5rem] md:pb-[1.5rem] ">
        {courses.map(course => (
          <div key={course?.id} className="min-w-full md:min-w-[18.625rem] md:min-h-[13.75rem] rounded-md shadow-lg bg-white ">
           <div className="min-w-full md:min-w-[18.625rem] md:min-h-[6.375rem] flex flex-col gap-1 px-4 py-2">
              <h3  className="md:min-h-[1.75rem] text-[#020817] font-semibold font-lato text-[1.125rem] ">{course?.courseTitle}</h3>
              <p className="text-[#64748B] font-lato text-[0.875rem] font-semibold">{course?.courseCode}</p>
           </div>

           <div className="md:min-h-[7.375rem] md:min-w-[18.625rem]">
             <span className="flex justify-between gap-4 text-[0.875rem] md:min-h-[2.375rem] font-lato px-4 py-2  bg-indigo-100">
               <p className=" text-[#64748B] font-normal">Instructor</p>
               <p className=" font-semibold  text-indigo-500">{course?.instructor}</p>
             </span>

             <span className="flex justify-between items-center gap-4 text-[0.875rem] md:min-h-[2.375rem] md:min-w-[18.625rem] px-4 py-2">
                <p className="text-[#64748B] font-normal">Credits</p>
                <p className="text-white font-semibold font-lato flex justify-center items-center rounded-full min-h-[1.5rem] min-w-[1.5rem] bg-indigo-500 shadow-sm">
                 {course?.credits}
                </p>
              </span>

              <span  className="flex justify-between gap-4 text-[0.875rem] md:min-h-[2.375rem] md:min-w-[18.625rem] px-4 py-2  bg-indigo-100">
               <p  className=" text-[#64748B] font-normal">Schedule</p>
               <p className="text-[#020817] font-semibold font-lato  min-h-[1.3rem] min-w-[1.3rem] pl-0.5 pr-0.5 pt-0.5 pb-0.5">{course?.schedule}</p>
             </span>
           </div>
        </div>
        ))}
    </div>
  )
}
