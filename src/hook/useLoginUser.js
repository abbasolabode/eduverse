import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/apiAuth";


export function useLoginUser() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: login, isPending } = useMutation({
		mutationFn: (credentials) => loginUser(credentials), //The API function to call for login

		//The onSuccess function receives the resolved data (user) from API after a successful authentication/mutation
		//Variables is the second argument passed to the onSuccess function automatically
		//It (i.e Variables) contains the data we passed in the onSubmit function
		//In this case, it will contain the userType we passed in the onSubmit function
		//This is useful for redirecting the user based on their type (student or lecturer
		onSuccess: (user, variables) => {
			// 1. Update React Query cache
			// Update the user data in the cache with the authenticated user
			queryClient.setQueryData(["user"], user?.user);
			// 2. Show success toast
			toast.success("Login successful");
			// 3. Redirect based on userType
            // If userType is "student", redirect to student dashboard, otherwise redirect to lecturer dashboard
			// The variables object contains the userType we passed in the onSubmit function
			const redirectPath = variables?.userType === "student" ? `/${variables.userType}Dashboard` : `/${variables.userType}Dashboard`;
			// 4. Navigate to the appropriate dashboard
			// This will replace the current entry in the history stack so that the user cannot go back to the login page using the back button
			navigate(redirectPath, { replace: true })
		},

		//If there's error while sending data to the API/server
		onError: (err) => {
			toast.error(err.message || "Login failed. Please try again!");
		},
	});

	return { login, isPending };
}
