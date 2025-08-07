import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getApplicationForm } from "../services/apiApplicationForm";

export function useApplicationForm() {
	const queryClient = useQueryClient(); // Getting the query client for managing cache
	const { mutate: applyForm, isPending } = useMutation({
		mutationFn: (formData)=> {
            if(!formData.fileResume || !formData.fileTranscript) return;
			return getApplicationForm(formData);
		},
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

//* The Reason Why the Logic of Checking the File Format type needs to be implemented:
//Files can't be sent as JSON: Unlike text/number fields, files must be sent as binary data using multipart/form-data format. The FormData API handles this conversion automatically.
//Regular fields need proper encoding
//Simple fields (text, numbers) must be properly appended to the form data payload.




//Creates a new empty FormData object, which is used to construct key-value pairs for form submission, especially when dealing with file uploads.
			//const formData = new FormData();

			// Append non-file fields... Meaning only append texts and num
		/* 	for (const [key, value] of Object.entries(data)) {
				if (key !== "fileResume" && key !== "fileTranscript") {
					formData.append(key, value);
				}
			}
			 */
			// Append file Resume
			//if (data.fileResume) {
			/* 	formData.append("fileResume", data.fileResume);
			}
			// */ /* Append file Resume
			if (data.fileTranscript) {
				formData.append("fileTranscript", data.fileTranscript);
			} */
			//Append selected Date
		//	formData.append("confirmation", data.confirmed);
			