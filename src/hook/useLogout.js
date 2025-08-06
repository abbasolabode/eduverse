import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../services/apiLogout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    
    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            toast.success("You've been logged out");
            queryClient.removeQueries(); // Clears all query cache
            navigate("/login", { replace: true });
        },
        onError: (err) => {
            toast.error(err.message || "Unable to log out");
        
        }
    });

    return { logout, isLoading };
}