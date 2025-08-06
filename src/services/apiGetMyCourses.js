import supabase from "./supabase";

export async function getMyCoursesApi(){
    
    const { data, error } = await supabase
  .from('myCourses')
  .select('*')

  if(error){
    console.error(error.message);
    throw new Error(error.message || "There's an error while fetching myCourses data from the server")
  }

  return data;
}