import supabase from "./supabase";

export async function getCourses(){
    
const { data, error } = await supabase
  .from('courses')
  .select('*')

  //If there's an error while getting data, throw an error
	if (error) {
		console.error(error.message);
		throw new Error(error.message || "Unable to load courses");
	}

  return data;
}