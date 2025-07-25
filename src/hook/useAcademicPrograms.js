import { useQuery } from "@tanstack/react-query";
import { getAcademicPrograms } from "../services/apiAcademicPrograms";

export function useAcademicPrograms(){
 const {data: academicPrograms, isLoading: isLoadingAcademicPrograms} = useQuery({
      queryKey: ["academicPrograms"],//Querying the key in supabase
      queryFn: getAcademicPrograms, //The API function that's responsible for querying the API
   })
    

   //Return the destructured elements from the API
   return {academicPrograms, isLoadingAcademicPrograms};
}