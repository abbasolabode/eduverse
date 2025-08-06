import supabase from "./supabase";

//API function for user signup
//This function sends user data to the Supabase API to create a new user account
//Destructure the data received from the mutation function
// The function takes an object with user details as an argument
// It returns the data received from the Supabase API or throws an error if the signup fails
export async function signup({firstName, lastName, email, studentId, dob, password, userType, employeeId, department}){
    
  // Check if the userType is neither "student" or "lecturer"
 if(userType !== "student" && userType !== "lecturer") return null;
 const { data, error } = await supabase.auth.signUp({
    email, 
    password,
    options: {
      // It can be used to store additional information about the user
      // This is the user metadata that will be stored in the user's profile
      // The user metadata is an object that contains the user's first name, last name, student ID, date of birth, employee ID, department, and user type
        data: {
            firstName,
            lastName,
            studentId,
            dob,
            employeeId,
				    department,
            userType, //student or lecturer
            avatar: "",
        }
    }
  })

  if(error){
    throw new Error(error?.message)
  }
  
   return data;
}