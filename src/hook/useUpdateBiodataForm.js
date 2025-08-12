import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBiodataForm } from "../services/apiBiodata";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdateBiodataForm() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { mutate, isPending } = useMutation({
		mutationFn: updateBiodataForm,// This function is used to update the biodata form
        
        // This function (onSuccess) is called when the mutation is successful
		onSuccess: () => {
			toast.success("Your biodata has been updated successfully");
			queryClient.invalidateQueries({ queryKey: ["biodataForm"] });
			navigate("/studentDashboard");
		},
		onError: (err) => {
			toast.error(err.message || "Unable to update biodata");
		},
	});
    
   
	return { mutate, isPending };
}
