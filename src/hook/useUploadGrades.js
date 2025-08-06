import { useMutation } from "@tanstack/react-query";
import { getUploadGrades } from "../services/apiUploadGrades";
import toast from "react-hot-toast";

export function useUploadGrades(){
    const {mutate, isPending} = useMutation({
        mutationFn: getUploadGrades,
        mutationKey: ["uploadGrades"],

        onSuccess: ()=> {
            toast.success("Grade's been uploaded successfully")
        },
        onError: (error)=> {
            toast.error(error.message || "Unable to upload grades")
        }
    })


    return {mutate, isPending};
}