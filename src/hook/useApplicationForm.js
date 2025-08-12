import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getApplicationForm } from "../services/apiApplicationForm";

export function useApplicationForm() {
	const queryClient = useQueryClient(); // Getting the query client for managing cache
	const { mutate: applyForm, isPending } = useMutation({
		mutationFn: getApplicationForm,
		
		onSuccess: () => {
			//The toast is called if there's a successful mutation
			toast.success("Application successfully submitted");
			// Invalidating the cache for stayUpdated query if the mutation is successful
			queryClient.invalidateQueries(["applicationFormData"]);
		},
		onError: (error) => {
			toast.error(error.message); // Displaying error message if mutation fails i.e The error that comes from the API function
		},
	});

	//The returned values from the useMutation function
	return { applyForm, isPending };
}

