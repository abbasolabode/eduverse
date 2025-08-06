import supabase from "./supabase";

export async function getAssignments(){
    
 const {data, error } = await supabase
  .from('assignments')
  .select('*')

  if(error){
    console.error(error.message || "There's an error while fetching data from the server.")
  }

  return data;
}