import { useQuery } from "@tanstack/react-query";
import { getAssignments } from "../services/apiAssignemnts";

export function useAssignments() {
	const { data, isLoading } = useQuery({
        queryKey: ["assignments"],
        queryFn: getAssignments,
    });

	return { data, isLoading };
}
