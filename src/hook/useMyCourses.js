import { useQuery } from "@tanstack/react-query";
import { getMyCoursesApi } from "../services/apiGetMyCourses";

export function useMyCourses(){

    const {data, isLoading} = useQuery({
        queryKey: ["myCourses"], 
        queryFn: getMyCoursesApi,
    })

    return {data, isLoading};
}
