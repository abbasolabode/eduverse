import { useMutation } from "@tanstack/react-query"
import { signup as signupApi } from "../services/apiSignUp"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


//Custom hook for handling user signup
//This hook is responsible for sending user data to the API and handling the response
export function useSignup(){
 const navigate = useNavigate();
 const {mutate: signup, isPending} = useMutation({
       mutationFn: signupApi,
       //The first argument (user) in the onSuccess function is the resolved response from the API function, the second argument(variables) is the actual form data automatically passed to the onSuccess handler 
       onSuccess: (user, variables)=> {
        toast.success(`You've successfully created an account`);
        //Determine the route/navigation based on the userType i.e the userType can either be "student" or "lecturer"
        //If userType is "student", navigate to studentDashboard, otherwise navigate to lecturerDashboard
        variables?.userType === "student" ? navigate(`/${variables.userType}Dashboard`, { replace: true }) : navigate(`/${variables.userType}Dashboard`, { replace: true });
       },
       onError: (error)=> {
         toast.error(error.message || "There's an error while creating an account");
       }
    })

    //Returned values from the custom hook function 
    return {signup, isPending};
}

//NOTE:
//This custom hook (useSignUp) is actually responsible for sending data/credentials to the API and receiving the resolved data/credentials from API
//It also responsible for managing studentSignupForm and lecturerSignupForm based on the userType passed to the mutation function which determines the route (either to navigate to studentDashboard or lecturerDashboard)
//The useSignup hook is used in the StudentSignupForm and LecturerSignupForm components to handle the signup process
//The useMutation hook from react-query is used to handle the mutation (signup) and manage the loading state (isPending) during the signup process
//The signup function is called with the form data when the user submits the signup form