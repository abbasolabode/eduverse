import { useQuery } from "@tanstack/react-query";
import { getAssignment } from "../services/apiGetAssignments";

export function useGetAssignment(){
    const {data, isLoading} = useQuery({
     queryKey: ["uploadAssignments"],
     queryFn: getAssignment,
    })

    
    return {data, isLoading};
}