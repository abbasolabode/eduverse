import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/apiAuth";

export function useLoginUser() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: login, isLoading } = useMutation({
		mutationFn: (credentials) => loginUser(credentials), //The API function

		//The onSuccess function receives the resolved data (user) from API after a successful authentication
		onSuccess: (user) => {
			console.log(user)
			// 1. Update React Query cache
			queryClient.setQueryData(["user"], user?.user);
			// 2. Show success toast
			toast.success("Login successful");
			// 3. Redirect based on userType
			const redirectPath = user?.userType === "student" ? "/studentDashboard" : "/lecturerDashboard";
			setTimeout(navigate(redirectPath, { replace: true }, 50000));
		},

		//If there's error while sending data to the API/server
		onError: (err) => {
			toast.error(err.message || "Login failed. Please try again.");
		},
	});

	return { login, isLoading };
}
