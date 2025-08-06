import { useQuery } from "@tanstack/react-query";
import { getStudentList } from "../services/apiStudentList";

export function useStudentList(){
    const {data, isLoading} = useQuery({
      queryKey: ["studentList"],
      queryFn: getStudentList,
    })

    console.log(data)
    return{data, isLoading}
}