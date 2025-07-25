import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getStayUpdated } from "../services/apiStayUpdated";
import toast from "react-hot-toast";


export function useStayUpdated(){
 
    const queryClient = useQueryClient(); // Getting the query client for managing cache

	const { mutate: stayUpdated, isLoading: isStayingUpdated } = useMutation({
		mutationFn: getStayUpdated, // Function to call the API for creating new data

		onSuccess: () => {
            //The toast is called if there's a successful mutation
			toast.success("You have successfully been subscribed to our newsletter");
            // Invalidating the cache for stayUpdated query if the mutation is successful
			queryClient.invalidateQueries({ queryKey: ["stayUpdated"] }); 
		},

		onError: (err) => toast.error(err.message), // Displaying error message if mutation fails i.e The error that comes from the API function
	});

    //The returned data from the useMutation function
    return { stayUpdated, isStayingUpdated }
}


