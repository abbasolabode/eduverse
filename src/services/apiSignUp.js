import supabase from "./supabase";

export async function signup({firstName, lastName, email, studentId, dob, password, userType, employeeId, department}){
    
 const { data, error } = await supabase.auth.signUp({
    email, 
    password,
    options: {
        data: {
            firstName,
            lastName,
            studentId,
            dob,
            avatar: "",
            employeeId,
				    department,
            userType,
        }
    }
  })


  if(error){
    throw new Error(error?.message)
  }
  console.log(data)
   return data;
}