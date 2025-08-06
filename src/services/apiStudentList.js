import supabase from "./supabase";

export async function getStudentList(){
 
 const { data, error } = await supabase
  .from('studentList')
  .select('*')

  if(error){
    console.error(error.message)
    throw new Error(error.message || "There's an developed while reading the student List")
  }


   return data;

}