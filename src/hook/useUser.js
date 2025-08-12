import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

export function useUser(){
 const {data: user = {}, isLoading} = useQuery({
    queryKey: ["user"], // This is the key used to cache the user data
    refetchOnWindowFocus: false, // Prevent refetching when the window is focused i.e when the user returns to the app, no need to login again
    queryFn: getCurrentUser,// This function fetches the current user data from the API. This will refetch the user data every 5 minutes
    })

    const userType = user?.user_metadata?.userType;
    return {user, userType, isLoading, isAuthenticated: user?.role === "authenticated"}
}

//This function is responsible for fetching the logged in user data 