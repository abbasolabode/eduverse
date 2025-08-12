import { useMutation } from "@tanstack/react-query";
import { uploadAssignment as uploadAssignmentApi } from "../services/apiUploadAssignments";
import toast from "react-hot-toast";

export function useUploadAssignment() {
	const { mutate, isPending } = useMutation({
		mutationFn: uploadAssignmentApi,

		onSuccess: () => {
			toast.success("Assignment has successfully been uploaded");
		},
		onError: (error) => {
			toast.error(
				error.message || "There's an error while uploading assignments"
			);
		},
	});

	return { mutate, isPending };
}
