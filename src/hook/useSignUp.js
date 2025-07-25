import { useMutation } from "@tanstack/react-query"
import { signup as signupApi } from "../services/apiSignUp"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function useSignup(){
  const navigate = useNavigate();
 const {mutate: signup, isLoading: isSigningUp} = useMutation({
       mutationFn: signupApi,
       //The first argument in the onSuccess function is the resolved response from the API function, the second argument is the form data automatically passed to the onSuccess handler 
       onSuccess: (user, variables)=> {
        console.log(user)
        toast.success("You've successfully created an account. Please verify your account provided in your email address");
       
        if( variables?.userType === "student" ) navigate("/studentDashboard", { replace: true })
          else navigate("/lecturerDashboard")
       },
       onError: (error)=> {
         toast.error(error.message || "There's an error while creating an account")
       }
    })


    return {signup, isSigningUp};
}